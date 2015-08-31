//? __out.GENERATE_STUBS=true;
//? include("../Includes/Bootstrap/Int/Main.js");

    $.Method({ Static: false, Public: true }, "GetHashCode",
    (new JSIL.MethodSignature($.Int32, [], [])),
    function UInt64_GetHashCode () {
        return this.a | ((this.b & 0xff) << 24);
    });
    });

    $.Method({ Static: false, Public: true }, "GetHashCode",
    (new JSIL.MethodSignature($.Int32, [], [])),
    function Int64_GetHashCode () {
        return this.a | ((this.b & 0xff) << 24);