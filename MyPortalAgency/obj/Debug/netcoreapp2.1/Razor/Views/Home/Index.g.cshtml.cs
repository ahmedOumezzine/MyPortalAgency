#pragma checksum "C:\Users\ahmed\Source\Repos\ahmedOumezzine\MyPortalAgency\MyPortalAgency\Views\Home\Index.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "aeb807dba680a9fc244fad2d61bb18602dc5d74d"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Home_Index), @"mvc.1.0.view", @"/Views/Home/Index.cshtml")]
[assembly:global::Microsoft.AspNetCore.Mvc.Razor.Compilation.RazorViewAttribute(@"/Views/Home/Index.cshtml", typeof(AspNetCore.Views_Home_Index))]
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
#line 1 "C:\Users\ahmed\Source\Repos\ahmedOumezzine\MyPortalAgency\MyPortalAgency\Views\_ViewImports.cshtml"
using MyPortalAgency;

#line default
#line hidden
#line 2 "C:\Users\ahmed\Source\Repos\ahmedOumezzine\MyPortalAgency\MyPortalAgency\Views\_ViewImports.cshtml"
using MyPortalAgency.Models;

#line default
#line hidden
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"aeb807dba680a9fc244fad2d61bb18602dc5d74d", @"/Views/Home/Index.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"fead5a1bba5a3a18e477323e877c4764b5e44bb0", @"/Views/_ViewImports.cshtml")]
    public class Views_Home_Index : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
#line 1 "C:\Users\ahmed\Source\Repos\ahmedOumezzine\MyPortalAgency\MyPortalAgency\Views\Home\Index.cshtml"
  
    ViewData["Title"] = "Home Page";

#line default
#line hidden
            DefineSection("scripts", async() => {
                BeginContext(62, 1869, true);
                WriteLiteral(@" 
<script>
    class User {
        constructor() {
             
        }
    }
    //var User = {
    //    Title: """",
    //    Description: """",
    //    Type : """"
    //}
    var Users= new User();
    call('https://localhost:44380/PageView/GetPages/', 'GET', { id: '58121566-F3F8-4BAC-841A-E0996798DA0A' }, Users);

    function call(url, type, parameters, callobj) {
        var urlstring = ""?"";
        Object.entries(parameters).forEach((item, index, arr) => {
            urlstring += item[0] + ""="" + item[1] + ""&"";
            if (!arr[index + 1]) {
                urlstring = urlstring.substring(0, urlstring.length - 1);
            }
        });
           $.ajax({
               type: type,
               url: url + urlstring,
               contentType: ""application/json"",
               dataType: ""json"",
               beforeSend: function () {
                   // this is where we append a loading image
                   //  $('#ajax-panel').html('<div class=""loadin");
                WriteLiteral(@"g""><img src=""/images/loading.gif"" alt=""Loading..."" /></div>');
               },
            success: function (data) {
                // successful request; do something with the data
                //obj = JSON.parse(data);
                var result = Object.assign(callobj, data);
                result.StatusCode = 200;
                callobj = result;
            },
               error: function (xhr, ajaxOptions, thrownError) {
                // failed request; give feedback to user
                // $('#ajax-panel').html('<p class=""error""><strong>Oops!</strong> Try that again in a few moments.</p>');
                   var result = Object.assign(callobj, xhr.responseJSON);
                   result.StatusCode = 400;
                   callobj = result;
               }

        });

     }
</script>
");
                EndContext();
            }
            );
            BeginContext(1934, 22929, true);
            WriteLiteral(@"

<div class=""container"" style=""margin-top:60px"">
    <div class=""row"">
        <div class=""col-md-12"">
            <h2>Our <strong>Services</strong></h2>
        </div>
    </div>
    <div class=""row"">
        <div class=""col-md-4"">
            <a href=""/mobile-development"" class=""text-decoration-none appear-animation animated fadeInUp appear-animation-visible"" data-appear-animation=""fadeInUp"" data-appear-animation-delay=""0"">
                <div class=""feature-box custom-feature-box feature-box-style-2"">
                    <div class=""feature-box-icon"">
                        <img src=""/img/icons/mob_service.png"">
                    </div>
                    <div class=""feature-box-info ml-md"">
                        <h4 class=""font-weight-normal text-lg"">Mobile App Development</h4>
                        <p>If you’re looking to extend your marketing efforts or have the next great app concept, we’re ready to bring your ideas to life. We also design HTML 5 mobile apps that are not only");
            WriteLiteral(@" functional but also responsive, so you know they’ll work beautifully on just about any mobile screen.</p>
                    </div>
                </div>
            </a>
        </div>
        <div class=""col-md-4"">
            <a href=""/web-development"" class=""text-decoration-none appear-animation animated fadeInUp appear-animation-visible"" data-appear-animation=""fadeInUp"" data-appear-animation-delay=""100"">
                <div class=""feature-box custom-feature-box feature-box-style-2"">
                    <div class=""feature-box-icon"">
                        <img src=""/img/icons/web_service.png"">
                    </div>
                    <div class=""feature-box-info ml-md"">
                        <h4 class=""font-weight-normal text-lg"">Web Application Development</h4>
                        <p>At Shine Infosoft, we realize that custom web development projects require careful planning and flawless execution. That’s why we strive to fit our website platforms and programming to your pro");
            WriteLiteral(@"ject, not the other way around.</p>
                    </div>
                </div>
            </a>
        </div>
        <div class=""col-md-4"">
            <a href=""/ui-ux-development"" class=""text-decoration-none appear-animation animated fadeInUp appear-animation-visible"" data-appear-animation=""fadeInUp"" data-appear-animation-delay=""200"">
                <div class=""feature-box custom-feature-box feature-box-style-2"">
                    <div class=""feature-box-icon"">
                        <img src=""/img/icons/ui_service.png"">
                    </div>
                    <div class=""feature-box-info ml-md"">
                        <h4 class=""font-weight-normal text-lg"">UI/UX Design &amp; Development</h4>
                        <p>Shine Infosoft consists of talented graphic artists who are also strategic marketers. We support our clients with all of their digital and print design needs. Our designers are focused on creating value, strengthening brand presence and delivering a sustainabl");
            WriteLiteral(@"e edge.</p>
                    </div>
                </div>
            </a>
        </div>
    </div>
    <div class=""row"">
        <div class=""col-md-4"">
            <a href=""/game-development"" class=""text-decoration-none appear-animation animated fadeInUp appear-animation-visible"" data-appear-animation=""fadeInUp"" data-appear-animation-delay=""300"">
                <div class=""feature-box custom-feature-box feature-box-style-2"">
                    <div class=""feature-box-icon"">
                        <img src=""/img/icons/game_service.png"">
                    </div>
                    <div class=""feature-box-info ml-md"">
                        <h4 class=""font-weight-normal text-lg"">Game Development</h4>
                        <p>Shine Infosoft is a praise worthy name to get sterling mobile game development solutions and fulfill a string of multiplex project needs. We have a team of technical experts in which everyone is highly qualified and skilled in their respective realm with the spl");
            WriteLiteral(@"endid experience.</p>
                    </div>
                </div>
            </a>
        </div>
        <div class=""col-md-4"">
            <a href=""#"" onclick=""return false;"" class=""text-decoration-none appear-animation animated fadeInUp appear-animation-visible"" data-appear-animation=""fadeInUp"" data-appear-animation-delay=""400"">
                <div class=""feature-box custom-feature-box feature-box-style-2"">
                    <div class=""feature-box-icon"">
                        <img src=""/img/icons/developers_serv.png"">
                    </div>
                    <div class=""feature-box-info ml-md"">
                        <h4 class=""font-weight-normal text-lg"">Dedicated Developers</h4>
                        <p>Shine Infosoft provides highly reliable dedicated development teams who have vast experience and expertise in latest web and mobile software development technologies required for any project.</p>
                    </div>
                </div>
            </a>
     ");
            WriteLiteral(@"   </div>
        <div class=""col-md-4"">
            <a href=""/cloud-development"" class=""text-decoration-none appear-animation animated fadeInUp appear-animation-visible"" data-appear-animation=""fadeInUp"" data-appear-animation-delay=""400"">
                <div class=""feature-box custom-feature-box feature-box-style-2"">
                    <div class=""feature-box-icon"">
                        <img src=""/img/icons/cloud_service.png"">
                    </div>
                    <div class=""feature-box-info ml-md"">
                        <h4 class=""font-weight-normal text-lg"">Cloud Services Development</h4>
                        <p>Cloud computing refers to computational process which can be done on demand via a computer network, or a virtual online space without requiring advanced infrastructure. This is a low cost and easy to manage approach for handling online businesses.</p>
                    </div>
                </div>
            </a>
        </div>
    </div>
    <div class=""row"">");
            WriteLiteral(@"
        <div class=""col-md-4"">
            <a href=""#"" onclick=""return false;"" class=""text-decoration-none appear-animation animated fadeInUp appear-animation-visible"" data-appear-animation=""fadeInUp"" data-appear-animation-delay=""400"">
                <div class=""feature-box custom-feature-box feature-box-style-2"">
                    <div class=""feature-box-icon"">
                        <img src=""/img/icons/Modernization_ser.png"">
                    </div>
                    <div class=""feature-box-info ml-md"">
                        <h4 class=""font-weight-normal text-lg"">Application Modernization</h4>
                        <p>Transform legacy applications to state of art technologies and modern architecture to stay relevant and deliver greater business value.</p>
                    </div>
                </div>
            </a>
        </div>
        <div class=""col-md-4"">
            <a href=""#"" onclick=""return false;"" class=""text-decoration-none appear-animation animated fadeInUp app");
            WriteLiteral(@"ear-animation-visible"" data-appear-animation=""fadeInUp"" data-appear-animation-delay=""400"">
                <div class=""feature-box custom-feature-box feature-box-style-2"">
                    <div class=""feature-box-icon"">
                        <img src=""/img/icons/maintanance_ser.png"">
                    </div>
                    <div class=""feature-box-info ml-md"">
                        <h4 class=""font-weight-normal text-lg"">Application Maintenance</h4>
                        <p>Sustain your existing software applications &amp; reduce maintenance costs. We help you focus on your business and leave the headache of ongoing application maintenance to us.</p>
                    </div>
                </div>
            </a>
        </div>
        <div class=""col-md-4"">
            <a href=""#"" onclick=""return false;"" class=""text-decoration-none appear-animation animated fadeInUp appear-animation-visible"" data-appear-animation=""fadeInUp"" data-appear-animation-delay=""500"">
                <di");
            WriteLiteral(@"v class=""feature-box custom-feature-box feature-box-style-2"">
                    <div class=""feature-box-icon"">
                        <img src=""/img/icons/entpsolutions_ser.png"">
                    </div>
                    <div class=""feature-box-info ml-md"">
                        <h4 class=""font-weight-normal text-lg"">Enterprise Solutions</h4>
                        <p>Shine Infosoft has been assisting large enterprises in making critical business decisions and applying cross-domain mobility solutions for enhancing their operations.</p>
                    </div>
                </div>
            </a>
        </div>
    </div>
    <div class=""row"">
        <div class=""col-md-4"">
            <a href=""#"" onclick=""return false;"" class=""text-decoration-none appear-animation animated fadeInUp appear-animation-visible"" data-appear-animation=""fadeInUp"" data-appear-animation-delay=""400"">
                <div class=""feature-box custom-feature-box feature-box-style-2"">
                    <di");
            WriteLiteral(@"v class=""feature-box-icon"">
                        <img src=""/img/icons/brand_iden.png"">
                    </div>
                    <div class=""feature-box-info ml-md"">
                        <h4 class=""font-weight-normal text-lg"">Branding &amp; Identity</h4>
                        <p>We guide startups and established businesses alike to craft a powerful story that resonates with their target audience. our clients are able to construct unique organizational identities that communicate a consistent and meaningful message.</p>
                    </div>
                </div>
            </a>
        </div>
        <div class=""col-md-4"">
            <a href=""#"" onclick=""return false;"" class=""text-decoration-none appear-animation animated fadeInUp appear-animation-visible"" data-appear-animation=""fadeInUp"" data-appear-animation-delay=""400"">
                <div class=""feature-box custom-feature-box feature-box-style-2"">
                    <div class=""feature-box-icon"">
                      ");
            WriteLiteral(@"  <img src=""/img/icons/digi_mark.png"">
                    </div>
                    <div class=""feature-box-info ml-md"">
                        <h4 class=""font-weight-normal text-lg"">Social Media &amp; Digital Marketing</h4>
                        <p>Shine Infosoft creates compelling content and amazing visuals that your online community wants to read and share on social medias like facebook, twitter etc. This allows you to connect with your community in an authentic way in relation to your products and services.</p>
                    </div>
                </div>
            </a>
        </div>

        <div class=""col-md-4"">
            <a href=""#"" onclick=""return false;"" class=""text-decoration-none appear-animation animated fadeInUp appear-animation-visible"" data-appear-animation=""fadeInUp"" data-appear-animation-delay=""500"">
                <div class=""feature-box custom-feature-box feature-box-style-2"">
                    <div class=""feature-box-icon"">
                        <img src");
            WriteLiteral(@"=""/img/icons/maintenance_service.png"">
                    </div>
                    <div class=""feature-box-info ml-md"">
                        <h4 class=""font-weight-normal text-lg"">Support &amp; Maintanance</h4>
                        <p>We are available 24/7 so that we connects you with the right team of technical experts, instantly to reduce complexity and enhance productivity.</p>
                    </div>
                </div>
            </a>
        </div>
    </div>
</div>


<section class=""section section-tertiary pb-none mb-none"">
    <div class=""container"">
        <div class=""row"">
            <div class=""col-md-7"">
                <h2 class=""text-light"">Our <strong>Achievements</strong></h2>
                <p class=""text-light"">Shine Infosoft is awarded for successfully being part of nomination phase of india's top 500 most promising IT company by <a href=""https://www.india5000.com"" style=""color:white"">www.india500.com</a> for Qaulity Assurance in recently 2017. Shine in");
            WriteLiteral(@"fosoft is most successful IT company since last four years by providing on-demand IT outsourcing services with result oriented &amp; on-time delivery guarantee for Web &amp; Mobile app development projects.</p>
            </div>
            <div class=""col-md-4 col-md-offset-1"" style=""margin-bottom:55px"">
                <img class=""img-responsive appear-animation animated fadeInUp appear-animation-visible"" src=""/img/icons/Certificate.jpg"" alt="""" data-appear-animation=""fadeInUp"">
            </div>
        </div>
    </div>
</section>

<div class=""container"" style=""margin-top:60px"">
    <div class=""col-md-12"">
        <h2>Our <strong>Process</strong></h2>
    </div>
</div>
<div class=""home-concept appear-animation animated fadeIn appear-animation-visible"" data-appear-animation=""fadeIn"" data-appear-animation-delay=""500"">
    <svg class=""home-concept-bg"" x=""0px"" y=""0px"" width=""345px"" height=""93px"" viewBox=""0 0 345 83"" enable-background=""new 0 0 345 93"" xml:space=""preserve"">
    <image overflow=");
            WriteLiteral(@"""visible"" width=""26"" height=""39"" xlink:href=""img/home-concept-pin.png"" transform=""matrix(0.169 0.1308 -0.1308 0.169 339.8496 0.6826)"" class=""final-pin appear-animation animated"" data-appear-animation=""animated-pin"" data-appear-animation-delay=""3650"">
						</image>
    <path class=""line appear-animation animated animated-line appear-animation-visible"" fill=""none"" stroke=""#6f6f6f"" stroke-width=""0.25"" stroke-miterlimit=""0"" stroke-dasharray=""0"" data-appear-animation=""animated-line"" data-appear-animation-duration=""4s"" d=""M7.086,87.455c8.133-8.646,54.247-51.634,155.173-36.766C268.762,66.38,327.34,17.642,337.992,10.241"" style=""animation-duration: 4s;""></path>
    <path fill=""none"" stroke=""#FFF"" stroke-width=""0.50"" stroke-miterlimit=""10"" stroke-dasharray=""1,2.5"" d=""M7.086,87.455c8.133-8.646,54.247-51.634,155.173-36.766C268.762,66.38,327.34,17.642,337.992,10.241""></path>
    <image overflow=""visible"" width=""26"" height=""39"" xlink:href=""img/home-concept-pin.png"" transform=""matrix(0.2137 0 0 0.2137 1 81.5898)"" class");
            WriteLiteral(@"=""initial-pin appear-animation animated animated-pin appear-animation-visible"" data-appear-animation=""animated-pin"">
						</image>
					</svg>
    <div class=""container"">
        <div class=""row center"">
            <span class=""sun""></span>
            <span class=""cloud"" style=""top: 52.44px;""></span>
            <div class=""col-md-2"" style=""margin-top:80px"">
                <div class=""process-image"">
                    <div class=""box-image"">
                        <svg class=""small-circle"" x=""0px"" y=""0px"" width=""39px"" height=""39px"" viewBox=""0 0 39 39"" enable-background=""new 0 0 39 39"" xml:space=""preserve"">
                        <circle class=""line appear-animation animated animated-line appear-animation-visible"" fill=""#FFF"" stroke=""#6f6f6f"" stroke-width=""0.25"" stroke-miterlimit=""0"" stroke-dasharray=""0"" data-appear-animation=""animated-line"" data-appear-animation-delay=""1200"" cx=""19.5"" cy=""19.5"" r=""19.063""></circle>
                        <circle fill=""none"" stroke=""#FFF"" stroke-width=""0.5");
            WriteLiteral(@"0"" stroke-miterlimit=""10"" stroke-dasharray=""1,2.5"" cx=""19.5"" cy=""19.5"" r=""19.063""></circle>
										</svg>
                        <img id=""flipimage"" src=""/img/icons/Discover_icon.png"" alt="""" class=""appear-animation animated zoomIn appear-animation-visible"" data-appear-animation=""zoomIn"" data-appear-animation-duration=""300"" data-appear-animation-delay=""1900"">
                    </div>
                    <strong class=""appear-animation animated fadeInDown appear-animation-visible"" data-appear-animation=""fadeInDown"" data-appear-animation-delay=""2150"" data-plugin-options=""{'accY': 200}"">Discovery</strong>
                </div>
            </div>
            <div class=""col-md-2"" style=""margin-top:40px"">
                <div class=""process-image"">
                    <div class=""box-image"">
                        <svg class=""small-circle"" x=""0px"" y=""0px"" width=""39px"" height=""39px"" viewBox=""0 0 39 39"" enable-background=""new 0 0 39 39"" xml:space=""preserve"">
                        <circle class=""l");
            WriteLiteral(@"ine appear-animation animated animated-line appear-animation-visible"" fill=""#FFF"" stroke=""#6f6f6f"" stroke-width=""0.25"" stroke-miterlimit=""0"" stroke-dasharray=""0"" data-appear-animation=""animated-line"" data-appear-animation-delay=""1200"" cx=""19.5"" cy=""19.5"" r=""19.063""></circle>
                        <circle fill=""none"" stroke=""#FFF"" stroke-width=""0.50"" stroke-miterlimit=""10"" stroke-dasharray=""1,2.5"" cx=""19.5"" cy=""19.5"" r=""19.063""></circle>
										</svg>
                        <img id=""flipimage"" src=""/img/icons/planning_icon.png"" alt="""" class=""appear-animation animated zoomIn appear-animation-visible"" data-appear-animation=""zoomIn"" data-appear-animation-duration=""300"" data-appear-animation-delay=""1900"">
                    </div>
                    <strong class=""appear-animation animated fadeInDown appear-animation-visible"" data-appear-animation=""fadeInDown"" data-appear-animation-delay=""2150"" data-plugin-options=""{'accY': 200}"">Planning</strong>
                </div>
            </div>
         ");
            WriteLiteral(@"   <div class=""col-md-2"" style=""margin-top:30px"">
                <div class=""process-image"">
                    <div class=""box-image"">
                        <svg class=""small-circle"" x=""0px"" y=""0px"" width=""39px"" height=""39px"" viewBox=""0 0 39 39"" enable-background=""new 0 0 39 39"" xml:space=""preserve"">
                        <circle class=""line appear-animation animated animated-line appear-animation-visible"" fill=""#FFF"" stroke=""#6f6f6f"" stroke-width=""0.25"" stroke-miterlimit=""0"" stroke-dasharray=""0"" data-appear-animation=""animated-line"" data-appear-animation-delay=""1200"" cx=""19.5"" cy=""19.5"" r=""19.063""></circle>
                        <circle fill=""none"" stroke=""#FFF"" stroke-width=""0.50"" stroke-miterlimit=""10"" stroke-dasharray=""1,2.5"" cx=""19.5"" cy=""19.5"" r=""19.063""></circle>
										</svg>
                        <img id=""flipimage"" src=""/img/icons/design_icon.png"" alt="""" class=""appear-animation animated zoomIn appear-animation-visible"" data-appear-animation=""zoomIn"" data-appear-animation-duratio");
            WriteLiteral(@"n=""300"" data-appear-animation-delay=""1900"">
                    </div>
                    <strong class=""appear-animation animated fadeInDown appear-animation-visible"" data-appear-animation=""fadeInDown"" data-appear-animation-delay=""2150"" data-plugin-options=""{'accY': 200}"">Design</strong>
                </div>
            </div>
            <div class=""col-md-2"" style=""margin-top:50px"">
                <div class=""process-image"">
                    <div class=""box-image"">
                        <svg class=""small-circle"" x=""0px"" y=""0px"" width=""39px"" height=""39px"" viewBox=""0 0 39 39"" enable-background=""new 0 0 39 39"" xml:space=""preserve"">
                        <circle class=""line appear-animation animated animated-line appear-animation-visible"" fill=""#FFF"" stroke=""#6f6f6f"" stroke-width=""0.25"" stroke-miterlimit=""0"" stroke-dasharray=""0"" data-appear-animation=""animated-line"" data-appear-animation-delay=""1200"" cx=""19.5"" cy=""19.5"" r=""19.063""></circle>
                        <circle fill=""none"" strok");
            WriteLiteral(@"e=""#FFF"" stroke-width=""0.50"" stroke-miterlimit=""10"" stroke-dasharray=""1,2.5"" cx=""19.5"" cy=""19.5"" r=""19.063""></circle>
										</svg>
                        <img id=""flipimage"" src=""/img/icons/develop_icon.png"" alt="""" class=""appear-animation animated zoomIn appear-animation-visible"" data-appear-animation=""zoomIn"" data-appear-animation-duration=""300"" data-appear-animation-delay=""1900"">
                    </div>
                    <strong class=""appear-animation animated fadeInDown appear-animation-visible"" data-appear-animation=""fadeInDown"" data-appear-animation-delay=""2150"" data-plugin-options=""{'accY': 200}"">Development</strong>
                </div>
            </div>
            <div class=""col-md-2"" style=""margin-top:50px"">
                <div class=""process-image"">
                    <div class=""box-image"">
                        <svg class=""small-circle"" x=""0px"" y=""0px"" width=""39px"" height=""39px"" viewBox=""0 0 39 39"" enable-background=""new 0 0 39 39"" xml:space=""preserve"">
             ");
            WriteLiteral(@"           <circle class=""line appear-animation animated animated-line appear-animation-visible"" fill=""#FFF"" stroke=""#6f6f6f"" stroke-width=""0.25"" stroke-miterlimit=""0"" stroke-dasharray=""0"" data-appear-animation=""animated-line"" data-appear-animation-delay=""1200"" cx=""19.5"" cy=""19.5"" r=""19.063""></circle>
                        <circle fill=""none"" stroke=""#FFF"" stroke-width=""0.50"" stroke-miterlimit=""10"" stroke-dasharray=""1,2.5"" cx=""19.5"" cy=""19.5"" r=""19.063""></circle>
										</svg>
                        <img id=""flipimage"" src=""/img/icons/Testing_icon.png"" alt="""" class=""appear-animation animated zoomIn appear-animation-visible"" data-appear-animation=""zoomIn"" data-appear-animation-duration=""300"" data-appear-animation-delay=""1900"">
                    </div>
                    <strong class=""appear-animation animated fadeInDown appear-animation-visible"" data-appear-animation=""fadeInDown"" data-appear-animation-delay=""2150"" data-plugin-options=""{'accY': 200}"">Testing</strong>
                </div>
    ");
            WriteLiteral(@"        </div>
            <div class=""col-md-2"" style=""margin-bottom:180px"">
                <div class=""process-image"">
                    <div class=""box-image"">
                        <svg class=""small-circle"" x=""0px"" y=""0px"" width=""39px"" height=""39px"" viewBox=""0 0 39 39"" enable-background=""new 0 0 39 39"" xml:space=""preserve"">
                        <circle class=""line appear-animation animated animated-line appear-animation-visible"" fill=""#FFF"" stroke=""#6f6f6f"" stroke-width=""0.25"" stroke-miterlimit=""0"" stroke-dasharray=""0"" data-appear-animation=""animated-line"" data-appear-animation-delay=""1200"" cx=""19.5"" cy=""19.5"" r=""19.063""></circle>
                        <circle fill=""none"" stroke=""#FFF"" stroke-width=""0.50"" stroke-miterlimit=""10"" stroke-dasharray=""1,2.5"" cx=""19.5"" cy=""19.5"" r=""19.063""></circle>
										</svg>
                        <img id=""flipimage"" src=""/img/icons/Launch_icon.png"" alt="""" class=""appear-animation animated zoomIn appear-animation-visible"" data-appear-animation=""zoomIn"" ");
            WriteLiteral(@"data-appear-animation-duration=""300"" data-appear-animation-delay=""1900"">
                    </div>
                    <strong class=""appear-animation animated fadeInDown appear-animation-visible"" data-appear-animation=""fadeInDown"" data-appear-animation-delay=""2150"" data-plugin-options=""{'accY': 200}"">Launch</strong>
                </div>
            </div>
        </div>
    </div>
</div>");
            EndContext();
        }
        #pragma warning restore 1998
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
