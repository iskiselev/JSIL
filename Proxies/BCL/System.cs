﻿namespace JSIL.Proxies.Bcl
{
    using System.Collections.Generic;
    using System.Security.Cryptography.X509Certificates;
    using JSIL.Meta;
    using JSIL.Proxy;

    [JSProxy(typeof(X509ExtensionCollection), JSProxyMemberPolicy.ReplaceNone, JSProxyAttributePolicy.ReplaceDeclared, JSProxyInterfacePolicy.ReplaceNone, false)]
    [JSIgnore]
    public class System_Security_Cryptography_X509Certificates_X509ExtensionCollection
    {
    }

    [JSProxy(typeof(X509Certificate2Collection), JSProxyMemberPolicy.ReplaceNone, JSProxyAttributePolicy.ReplaceDeclared, JSProxyInterfacePolicy.ReplaceNone, false)]
    [JSIgnore]
    public class System_Security_Cryptography_X509Certificates_X509Certificate2Collection
    {
    }

    [JSProxy(typeof(X509Certificate2), JSProxyMemberPolicy.ReplaceNone, JSProxyAttributePolicy.ReplaceDeclared, JSProxyInterfacePolicy.ReplaceNone, false)]
    [JSIgnore]
    public class System_Security_Cryptography_X509Certificates_X509Certificate2
    {
    }

    [JSProxy("System.Security.Cryptography.X509Certificates.X509Utils", JSProxyMemberPolicy.ReplaceNone, JSProxyAttributePolicy.ReplaceDeclared, JSProxyInterfacePolicy.ReplaceNone, false)]
    [JSStubOnly]
    public class System_Security_Cryptography_X509Certificates_X509Utils
    {
    }
}
