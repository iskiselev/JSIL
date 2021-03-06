﻿JSIL.ImplementExternals("System.Nullable", function ($) {
  var mscorlib = JSIL.GetCorlib();

  $.Method({ Static: true, Public: true }, "GetUnderlyingType",
    (new JSIL.MethodSignature(mscorlib.TypeRef("System.Type"), [mscorlib.TypeRef("System.Type")], [])),
    function GetUnderlyingType(nullableType) {
      if (nullableType.__FullName__.indexOf("System.Nullable`1") !== 0) {
        return null;
      } else {
        return nullableType.__PublicInterface__.T;
      }
    }
  );
});

JSIL.ImplementExternals("System.Nullable`1", function ($) {
});

//? if ('GENERATE_STUBS' in  __out) {
JSIL.MakeStaticClass("System.Nullable", true, [], function ($) {
});
//? }

JSIL.MakeStruct("System.ValueType", "System.Nullable`1", true, ["T"], function ($) {
  $.RawMethod(true, "CheckType", function (value) {
    if (this.T.$Is(value))
      return true;

    return false;
  });

  $.Method({ Static: false, Public: true }, "get_HasValue",
    JSIL.MethodSignature.Return($.Boolean),
    function () {
      return this !== null;
    }
  );

  $.Method({ Static: false, Public: true }, "get_Value",
    new JSIL.MethodSignature($.GenericParameter("T"), null),
    function () {
      return JSIL.Nullable_Value(this);
    }
  );

  $.Property({ Static: false, Public: true }, "Value", $.GenericParameter("T"));
  $.Property({ Static: false, Public: true }, "HasValue", $.Boolean);
});