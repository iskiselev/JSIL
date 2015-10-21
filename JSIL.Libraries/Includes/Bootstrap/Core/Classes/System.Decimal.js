JSIL.MakeStruct("System.ValueType", "System.Decimal", true, [], function ($) {
  var mscorlib = JSIL.GetCorlib();

  var ctorImpl = function (value) {
    this.value = value.valueOf();
  };

  var decimalToNumber = function (decimal) {
    return decimal.valueOf();
  };

  var numberToDecimal = function (value) {
    var result = JSIL.CreateInstanceOfType($.Type, null);
    result.value = value.valueOf();
    return result;
  };

  $.RawMethod(false, "valueOf", function () {
    return this.value;
  });

  $.Method({ Static: false, Public: true }, "toString",
    new JSIL.MethodSignature("System.String", []),
    function (format) {
      return this.value.toString();
    }
  );

  $.Method({ Static: false, Public: true }, ".ctor",
    (new JSIL.MethodSignature(null, [mscorlib.TypeRef("System.Int32")], [])),
    ctorImpl
  );

  $.Method({ Static: false, Public: true }, ".ctor",
    (new JSIL.MethodSignature(null, [mscorlib.TypeRef("System.UInt32")], [])),
    ctorImpl
  );

  $.Method({ Static: false, Public: true }, ".ctor",
    (new JSIL.MethodSignature(null, [mscorlib.TypeRef("System.Int64")], [])),
    ctorImpl
  );

  $.Method({ Static: false, Public: true }, ".ctor",
    (new JSIL.MethodSignature(null, [mscorlib.TypeRef("System.UInt64")], [])),
    ctorImpl
  );

  $.Method({ Static: true, Public: true }, "op_Equality",
    (new JSIL.MethodSignature($.Boolean, [$.Type, $.Type], [])),
    function (lhs, rhs) {
      return decimalToNumber(lhs) === decimalToNumber(rhs);
    }
  );

  $.Method({ Static: true, Public: true }, "op_Inequality",
    (new JSIL.MethodSignature($.Boolean, [$.Type, $.Type], [])),
    function (lhs, rhs) {
      return decimalToNumber(lhs) !== decimalToNumber(rhs);
    }
  );

  $.Method({ Static: true, Public: true }, "op_Addition",
    (new JSIL.MethodSignature($.Type, [$.Type, $.Type], [])),
    function (lhs, rhs) {
      return numberToDecimal(decimalToNumber(lhs) + decimalToNumber(rhs));
    }
  );

  $.Method({ Static: true, Public: true }, "op_Division",
    (new JSIL.MethodSignature($.Type, [$.Type, $.Type], [])),
    function (lhs, rhs) {
      return numberToDecimal(decimalToNumber(lhs) / decimalToNumber(rhs));
    }
  );

  $.Method({ Static: true, Public: true }, "op_Multiply",
    (new JSIL.MethodSignature($.Type, [$.Type, $.Type], [])),
    function (lhs, rhs) {
      return numberToDecimal(decimalToNumber(lhs) * decimalToNumber(rhs));
    }
  );

  $.Method({ Static: true, Public: true }, "op_Subtraction",
    (new JSIL.MethodSignature($.Type, [$.Type, $.Type], [])),
    function (lhs, rhs) {
      return numberToDecimal(decimalToNumber(lhs) - decimalToNumber(rhs));
    }
  );

  $.Method({Static:true , Public:true }, "op_GreaterThan", 
    (new JSIL.MethodSignature($.Boolean, [$.Type, $.Type], [])),
    function (lhs, rhs) {
      return decimalToNumber(lhs) > decimalToNumber(rhs);
    }
  );

  $.Method({Static:true , Public:true }, "op_LessThan", 
    (new JSIL.MethodSignature($.Boolean, [$.Type, $.Type], [])),
    function (lhs, rhs) {
      return decimalToNumber(lhs) < decimalToNumber(rhs);
    }
  );

  $.Method({Static:true , Public:true }, "op_GreaterThanOrEqual", 
    (new JSIL.MethodSignature($.Boolean, [$.Type, $.Type], [])),
    function (lhs, rhs) {
      return decimalToNumber(lhs) >= decimalToNumber(rhs);
    }
  );
  
  $.Method({Static:true , Public:true }, "op_LessThanOrEqual", 
    (new JSIL.MethodSignature($.Boolean, [$.Type, $.Type], [])),
    function (lhs, rhs) {
      return decimalToNumber(lhs) <= decimalToNumber(rhs);
    }
  );

  $.Method({ Static: true, Public: true }, "op_Explicit",
    (new JSIL.MethodSignature($.Type, [mscorlib.TypeRef("System.Single")], [])),
    numberToDecimal
  );

  $.Method({ Static: true, Public: true }, "op_Explicit",
    (new JSIL.MethodSignature($.Type, [mscorlib.TypeRef("System.Double")], [])),
    numberToDecimal
  );

  $.Method({ Static: true, Public: true }, "op_Explicit",
    (new JSIL.MethodSignature(mscorlib.TypeRef("System.Byte"), [$.Type], [])),
    decimalToNumber
  );

  $.Method({ Static: true, Public: true }, "op_Explicit",
    (new JSIL.MethodSignature(mscorlib.TypeRef("System.SByte"), [$.Type], [])),
    decimalToNumber
  );

  $.Method({ Static: true, Public: true }, "op_Explicit",
    (new JSIL.MethodSignature(mscorlib.TypeRef("System.Char"), [$.Type], [])),
    decimalToNumber
  );

  $.Method({ Static: true, Public: true }, "op_Explicit",
    (new JSIL.MethodSignature(mscorlib.TypeRef("System.Int16"), [$.Type], [])),
    decimalToNumber
  );

  $.Method({ Static: true, Public: true }, "op_Explicit",
    (new JSIL.MethodSignature(mscorlib.TypeRef("System.UInt16"), [$.Type], [])),
    decimalToNumber
  );

  $.Method({ Static: true, Public: true }, "op_Explicit",
    (new JSIL.MethodSignature(mscorlib.TypeRef("System.Int32"), [$.Type], [])),
    decimalToNumber
  );

  $.Method({ Static: true, Public: true }, "op_Explicit",
    (new JSIL.MethodSignature(mscorlib.TypeRef("System.UInt32"), [$.Type], [])),
    decimalToNumber
  );

  $.Method({ Static: true, Public: true }, "op_Explicit",
    (new JSIL.MethodSignature(mscorlib.TypeRef("System.Int64"), [$.Type], [])),
    decimalToNumber
  );

  $.Method({ Static: true, Public: true }, "op_Explicit",
    (new JSIL.MethodSignature(mscorlib.TypeRef("System.UInt64"), [$.Type], [])),
    decimalToNumber
  );

  $.Method({ Static: true, Public: true }, "op_Explicit",
    (new JSIL.MethodSignature(mscorlib.TypeRef("System.Single"), [$.Type], [])),
    decimalToNumber
  );

  $.Method({ Static: true, Public: true }, "op_Explicit",
    (new JSIL.MethodSignature(mscorlib.TypeRef("System.Double"), [$.Type], [])),
    decimalToNumber
  );

  $.Method({ Static: true, Public: true }, "op_Implicit",
    (new JSIL.MethodSignature($.Type, [mscorlib.TypeRef("System.Byte")], [])),
    numberToDecimal
  );

  $.Method({ Static: true, Public: true }, "op_Implicit",
    (new JSIL.MethodSignature($.Type, [mscorlib.TypeRef("System.SByte")], [])),
    numberToDecimal
  );

  $.Method({ Static: true, Public: true }, "op_Implicit",
    (new JSIL.MethodSignature($.Type, [mscorlib.TypeRef("System.Char")], [])),
    numberToDecimal
  );

  $.Method({ Static: true, Public: true }, "op_Implicit",
    (new JSIL.MethodSignature($.Type, [mscorlib.TypeRef("System.Int16")], [])),
    numberToDecimal
  );

  $.Method({ Static: true, Public: true }, "op_Implicit",
    (new JSIL.MethodSignature($.Type, [mscorlib.TypeRef("System.UInt16")], [])),
    numberToDecimal
  );

  $.Method({ Static: true, Public: true }, "op_Implicit",
    (new JSIL.MethodSignature($.Type, [mscorlib.TypeRef("System.Int32")], [])),
    numberToDecimal
  );

  $.Method({ Static: true, Public: true }, "op_Implicit",
    (new JSIL.MethodSignature($.Type, [mscorlib.TypeRef("System.UInt32")], [])),
    numberToDecimal
  );

  $.Method({ Static: true, Public: true }, "op_Implicit",
    (new JSIL.MethodSignature($.Type, [mscorlib.TypeRef("System.Int64")], [])),
    numberToDecimal
  );

  $.Method({ Static: true, Public: true }, "op_Implicit",
    (new JSIL.MethodSignature($.Type, [mscorlib.TypeRef("System.UInt64")], [])),
    numberToDecimal
  );

  $.Field({ Public: true, Static: true }, "Zero", $.Type, function () { return new $jsilcore.System.Decimal(0); });
  $.Field({ Public: true, Static: true }, "One", $.Type, function () { return new $jsilcore.System.Decimal(1); });
  $.Field({ Public: true, Static: true }, "MinusOne", $.Type, function () { return new $jsilcore.System.Decimal(-1); });

  $.Field({ Static: false, Public: false }, "value", mscorlib.TypeRef("System.Double"), function () {
    return 0;
  });

  var $formatSignature = function () {
    return ($formatSignature = JSIL.Memoize(new JSIL.MethodSignature($jsilcore.TypeRef("System.String"), [
        $jsilcore.TypeRef("System.String"), $jsilcore.TypeRef("System.Double"),
        $jsilcore.TypeRef("System.IFormatProvider")
    ])))();
  };

  $.RawMethod(
    true, "$ToString",
    function $ToString(self, format, formatProvider) {
      return $formatSignature().CallStatic($jsilcore.JSIL.System.NumberFormatter, "NumberToString", null, format, decimalToNumber(self), formatProvider).toString();
    }
  );

  $jsilcore.$MakeParseExternals($, $.Type,
    function(text, style) {
      return new $jsilcore.System.Decimal($jsilcore.$ParseFloat(text, style));
    }, function (text, style, result) {
      var r = $jsilcore.$TryParseFloat(text, style, result);
      if (r) {
        result.set(new $jsilcore.System.Decimal(result.get()));
      }
      return r;
    });

  JSIL.MakeIConvertibleMethods($);
});