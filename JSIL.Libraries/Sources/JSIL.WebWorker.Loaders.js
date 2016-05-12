importScripts(jsilConfig.libraryRoot + "JSIL.Browser.Loaders.js")
JSIL.loadGlobalScript = function(uri, onComplete, dllName) {
    //setTimeout(function () {
            try {
                importScripts(uri);
                onComplete(true, null);
            } catch (e) {
                onComplete(null, e);
            } 
     //   },
     //   0);
}

self.initAssetLoaders = function () {
}

self.getAbsoluteUrl = function (localUrl) {
    return localUrl;
};