﻿JSIL.Dispose = function (disposable) {
  if (typeof (disposable) === "undefined")
    JSIL.RuntimeError("Disposable is undefined");
  else if (disposable === null)
    return false;

  var tIDisposable = $jsilcore.System.IDisposable;

  if (tIDisposable.$Is(disposable))
    tIDisposable.$Methods.Dispose.Call(disposable);
  else if (typeof (disposable.Dispose) === "function")
    disposable.$Methods.Dispose();
  else
    return false;

  return true;
};