/*? if (!('$jsilcore_$MakeParseExternals' in __out)) { __out.$jsilcore_$MakeParseExternals = true; */
$jsilcore.$MakeParseExternals = function ($, type, parse, tryParse) {
  $.Method({ Static: true, Public: true }, "Parse",
    (new JSIL.MethodSignature(type, [$.String], [])),
    parse
  );

  $.Method({ Static: true, Public: true }, "Parse",
    (new JSIL.MethodSignature(type, [$.String, $jsilcore.TypeRef("System.Globalization.NumberStyles")], [])),
    parse
  );

  $.Method({ Static: true, Public: true }, "Parse",
    (new JSIL.MethodSignature(type, [$.String, $jsilcore.TypeRef("System.IFormatProvider")], [])),
    function (input, formatProvider) {
      // TODO: Really use fromat provider
      return parse(input, null);
    }
  );

  $.Method({ Static: true, Public: true }, "Parse",
    (new JSIL.MethodSignature(type, [$.String, $jsilcore.TypeRef("System.Globalization.NumberStyles"), $jsilcore.TypeRef("System.IFormatProvider")], [])),
     // TODO: Really use fromat provider
    parse
  );

  $.Method({ Static: true, Public: true }, "TryParse",
    (new JSIL.MethodSignature($.Boolean, [$.String, $jsilcore.TypeRef("JSIL.Reference", [type])], [])),
    tryParse
  );

  $.Method({ Static: true, Public: true }, "TryParse",
    (new JSIL.MethodSignature($.Boolean, [$.String, $jsilcore.TypeRef("System.IFormatProvider"), $jsilcore.TypeRef("JSIL.Reference", [type])], [])),
    tryParse
  );

  $.Method({ Static: true, Public: true }, "TryParse",
    (new JSIL.MethodSignature($.Boolean, [$.String, $jsilcore.TypeRef("System.Globalization.NumberStyles"), $jsilcore.TypeRef("System.IFormatProvider"), $jsilcore.TypeRef("JSIL.Reference", [type])], [])),
        function (input, style, formatProvider, output) {
          // TODO: Really use fromat provider
          return tryParse(input, style, output);
        }
  );
};
/*? }*/