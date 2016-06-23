using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using JSIL.Ast;
using JSIL.Internal;
using Mono.Cecil;

namespace JSIL.Transforms {
    public class TypeExpressionCacher : JSAstVisitor {
        public struct CachedTypeRecord {
            public readonly TypeReference Type;
            public readonly int Index;

            public CachedTypeRecord (TypeReference type, int index) {
                type = TypeUtil.StripModifiers(type);
                type = TypeUtil.StripPointerOrReference(type);

                Type = type;
                Index = index;
            }
        }

        private readonly Stack<JSFunctionExpression> FunctionStack = new Stack<JSFunctionExpression>();
        public readonly Dictionary<MemberIdentifier, Dictionary<GenericTypeIdentifier, CachedTypeRecord>> AllCachedTypes;
        public readonly TypeReference ThisType;
        private int NextID = 0;

        public TypeExpressionCacher (TypeInfoProvider typeInfo, TypeReference thisType) {
            ThisType = thisType;
            AllCachedTypes = new Dictionary<MemberIdentifier, Dictionary<GenericTypeIdentifier, CachedTypeRecord>>(new MemberIdentifier.Comparer(typeInfo));
        }

        private Dictionary<GenericTypeIdentifier, CachedTypeRecord> GetCacheSet()
        {
            Dictionary<GenericTypeIdentifier, CachedTypeRecord> result;

            var fn = FunctionStack.Peek();

            var functionIdentifier = fn.Method.Method.Identifier;
            if (!AllCachedTypes.TryGetValue(functionIdentifier, out result))
                result = AllCachedTypes[functionIdentifier] = new Dictionary<GenericTypeIdentifier, CachedTypeRecord>();

            return result;
        }

        public Dictionary<GenericTypeIdentifier, CachedTypeRecord> CachedTypes
        {
            get { return GetCacheSet(); }
        }

        public void VisitNode(JSFunctionExpression fe)
        {
            FunctionStack.Push(fe);

            try
            {
                VisitChildren(fe);
            }
            finally
            {
                var functionIdentifier = fe.Method.Method.Identifier;
                Dictionary<GenericTypeIdentifier, CachedTypeRecord> localSet;
                if (AllCachedTypes.TryGetValue(functionIdentifier, out localSet))
                {
                    var trType = fe.Method.Reference.Module.TypeSystem.SystemType();

                    int i = 0;
                    foreach (var value in localSet.Values)
                    {
                        var stmt = new JSTypeCacheRecordVariableDeclarationStatement(value.Index, new JSType(value.Type), trType);

                        fe.Body.Statements.Insert(i++, stmt);
                    }
                }

                FunctionStack.Pop();
            }
        }

        private JSCachedType GetCachedType (TypeReference type) {
            if (!IsCacheable(type))
                return null;

            GenericTypeIdentifier? identifier = GenericTypeIdentifier.Create(type);

            if (identifier == null)
            {
                return null;
            }

            CachedTypeRecord record;
            if (!CachedTypes.TryGetValue(identifier.Value, out record))
                CachedTypes.Add(identifier.Value, record = new CachedTypeRecord(type, NextID++));

            return new JSCachedType(type, record.Index);
        }

        private JSCachedTypeOfExpression GetCachedTypeOf (TypeReference type) {
            var ct = GetCachedType(type);
            if (ct == null)
                return null;

            return new JSCachedTypeOfExpression(ct.Type, ct.Index);
        }

        public bool IsCacheable (TypeReference type) {
            if (TypeUtil.TypesAreEqual(type, ThisType))
                return false;

            /*
            // Referring to an enclosing type from a nested type creates a cycle
            if (TypeUtil.IsNestedInside(type, ThisType))
                return false;
             */

            if (TypeUtil.ContainsGenericParameter(type))
                return false;

            if (TypeUtil.IsOpenType(type))
                return false;

            if ((type is ByReferenceType) || (type is PointerType))
                return false;

            return true;
        }

        public void VisitNode (JSType type) {
            var ct = GetCachedType(type.Type);

            if (ct != null) {
                ParentNode.ReplaceChild(type, ct);
                VisitReplacement(ct);
            } else {
                VisitChildren(type);
            }
        }

        public void VisitNode (JSTypeReference tr) {
            VisitChildren(tr);
        }

        public void VisitNode (JSTypeOfExpression toe) {
            var ct = GetCachedTypeOf(toe.Type);

            if (ct != null) {
                ParentNode.ReplaceChild(toe, ct);
                VisitReplacement(ct);
            } else {
                VisitChildren(toe);
            }
        }

        public void VisitNode (JSCachedType ct) {
            VisitChildren(ct);
        }

        public void VisitNode (JSNewArrayExpression na) {
            var ct = GetCachedType(na.ElementType);
            if (ct != null)
                na.CachedElementTypeIndex = ct.Index;

            VisitChildren(na);
        }

        public void VisitNode (JSIsExpression @is) {
            var ct = GetCachedType(@is.Type);
            if (ct != null)
                @is.CachedTypeIndex = ct.Index;

            VisitChildren(@is);
        }

        public void VisitNode (JSCastExpression cast) {
            var ct = GetCachedType(cast.NewType);
            if (ct != null)
                cast.CachedTypeIndex = ct.Index;

            VisitChildren(cast);
        }

        public void VisitNode (JSInvocationExpression ie) {
            if ((ie.GenericArguments != null) && (ie.JSMethod != null)) {
                ie.JSMethod.SetCachedGenericArguments(
                    from ga in ie.GenericArguments select GetCachedType(ga)
                );
            }

            VisitChildren(ie);
        }


        public void VisitNode (JSDefaultValueLiteral dvl) {
            // We need to check this since it's a literal and it could show up in the tree multiple times.
            if (!dvl.CachedTypeIndex.HasValue) {
                var ct = GetCachedType(dvl.Value);
                if (ct != null)
                    dvl.CachedTypeIndex = ct.Index;
            }

            VisitChildren(dvl);
        }

        public void VisitNode (JSEnumLiteral el) {
            // It's a literal so it could show up in the tree multiple times.
            if (el.CachedEnumType == null) {
                el.SetCachedType(GetCachedType(el.EnumType));
            }

            VisitChildren(el);
        }

        public void CacheTypesForFunction (JSFunctionExpression function) {
            Visit(function);
        }
    }
}
