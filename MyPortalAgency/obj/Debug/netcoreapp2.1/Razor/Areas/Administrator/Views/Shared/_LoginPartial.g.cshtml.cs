#pragma checksum "C:\Users\AhmedOumezzine\Source\Repos\ahmedOumezzine\MyPortalAgency\MyPortalAgency\Areas\Administrator\Views\Shared\_LoginPartial.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "12b6d2ee4b5a99f71ea973d4acb92f32b97b935d"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Areas_Administrator_Views_Shared__LoginPartial), @"mvc.1.0.view", @"/Areas/Administrator/Views/Shared/_LoginPartial.cshtml")]
[assembly:global::Microsoft.AspNetCore.Mvc.Razor.Compilation.RazorViewAttribute(@"/Areas/Administrator/Views/Shared/_LoginPartial.cshtml", typeof(AspNetCore.Areas_Administrator_Views_Shared__LoginPartial))]
namespace AspNetCore
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
#line 1 "C:\Users\AhmedOumezzine\Source\Repos\ahmedOumezzine\MyPortalAgency\MyPortalAgency\Areas\Administrator\Views\Shared\_LoginPartial.cshtml"
using Microsoft.AspNetCore.Identity;

#line default
#line hidden
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"12b6d2ee4b5a99f71ea973d4acb92f32b97b935d", @"/Areas/Administrator/Views/Shared/_LoginPartial.cshtml")]
    public class Areas_Administrator_Views_Shared__LoginPartial : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            BeginContext(38, 2, true);
            WriteLiteral("\r\n");
            EndContext();
            BeginContext(138, 2, true);
            WriteLiteral("\r\n");
            EndContext();
#line 6 "C:\Users\AhmedOumezzine\Source\Repos\ahmedOumezzine\MyPortalAgency\MyPortalAgency\Areas\Administrator\Views\Shared\_LoginPartial.cshtml"
 if (SignInManager.IsSignedIn(User))
{

#line default
#line hidden
            BeginContext(181, 56, true);
            WriteLiteral("    <form asp-area=\"Identity\" asp-page=\"/Account/Logout\"");
            EndContext();
            BeginWriteAttribute("asp-route-returnUrl", " asp-route-returnUrl=\"", 237, "\"", 306, 1);
#line 8 "C:\Users\AhmedOumezzine\Source\Repos\ahmedOumezzine\MyPortalAgency\MyPortalAgency\Areas\Administrator\Views\Shared\_LoginPartial.cshtml"
WriteAttributeValue("", 259, Url.Action("Index", "Home", new { area = "" }), 259, 47, false);

#line default
#line hidden
            EndWriteAttribute();
            BeginContext(307, 215, true);
            WriteLiteral(" method=\"post\" id=\"logoutForm\" class=\"navbar-right\">\r\n        <ul class=\"nav navbar-nav navbar-right\">\r\n            <li>\r\n                <a asp-area=\"Identity\" asp-page=\"/Account/Manage/Index\" title=\"Manage\">Hello ");
            EndContext();
            BeginContext(523, 29, false);
#line 11 "C:\Users\AhmedOumezzine\Source\Repos\ahmedOumezzine\MyPortalAgency\MyPortalAgency\Areas\Administrator\Views\Shared\_LoginPartial.cshtml"
                                                                                        Write(UserManager.GetUserName(User));

#line default
#line hidden
            EndContext();
            BeginContext(552, 190, true);
            WriteLiteral("!</a>\r\n            </li>\r\n            <li>\r\n                <button type=\"submit\" class=\"btn btn-link navbar-btn navbar-link\">Logout</button>\r\n            </li>\r\n        </ul>\r\n    </form>\r\n");
            EndContext();
#line 18 "C:\Users\AhmedOumezzine\Source\Repos\ahmedOumezzine\MyPortalAgency\MyPortalAgency\Areas\Administrator\Views\Shared\_LoginPartial.cshtml"
}
else
{

#line default
#line hidden
            BeginContext(754, 217, true);
            WriteLiteral("    <ul class=\"nav navbar-nav navbar-right\">\r\n        <li><a asp-area=\"Identity\" asp-page=\"/Account/Register\">Register</a></li>\r\n        <li><a asp-area=\"Identity\" asp-page=\"/Account/Login\">Login</a></li>\r\n    </ul>\r\n");
            EndContext();
#line 25 "C:\Users\AhmedOumezzine\Source\Repos\ahmedOumezzine\MyPortalAgency\MyPortalAgency\Areas\Administrator\Views\Shared\_LoginPartial.cshtml"
}

#line default
#line hidden
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public UserManager<IdentityUser> UserManager { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public SignInManager<IdentityUser> SignInManager { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<dynamic> Html { get; private set; }
    }
}
#pragma warning restore 1591