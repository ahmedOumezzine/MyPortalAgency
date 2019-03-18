using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace MyPortalAgency.Controllers
{
    public class AccountController : Controller
    {
        public async Task<IActionResult> Index()
        {
            if (User.Identity.IsAuthenticated)
            {
                return RedirectToAction("Index", "Home", new { Area = "Administrator" });

            }
            else
            {
                return RedirectToAction("Login");

            }

        }

        public async Task<IActionResult> Logging()
        {
            await HttpContext.SignOutAsync();
            return RedirectToAction("Index");
        }
        public IActionResult Login(string ReturnUrl = null)
        {
            ViewBag.ReturnUrl = ReturnUrl;
            return View();
        }
        [HttpPost]
        public async Task<IActionResult> Login(MyPortalAgency.Models.LoginModel Model, string ReturnUrl = null)
        {
            if (!ModelState.IsValid)
            {
                return View(Model);
            }
            using (var client = new HttpClient())
            {
                client.BaseAddress = new Uri("http://myportalagency.azurewebsites.net");
                client.DefaultRequestHeaders.Accept.Clear();


                string myContent = JsonConvert.SerializeObject(Model);
                var stringContent = new StringContent(myContent, UnicodeEncoding.UTF8, "application/json");

                var resulttt = await client.PostAsync("api/Account/Login", stringContent);
                if (resulttt.IsSuccessStatusCode)
                {
                    MyPortalAgency.Models.LoginAPI LoginAPI2 = await resulttt.Content.ReadAsAsync<MyPortalAgency.Models.LoginAPI>();
                    if(LoginAPI2.error== "INVALID_LOGIN_ATTEMPT")
                    {
                        ModelState.AddModelError("error", "notvalid");
                        return View(Model);
                    }
                    if (LoginAPI2.Token!= "null")
                    {
 
                        var claims = new List<Claim>{
                            new Claim(ClaimTypes.Name, Model.Email)
                        };
                        var userIdentity = new ClaimsIdentity(claims, "login");
                        ClaimsPrincipal principal = new ClaimsPrincipal(userIdentity);
                        await HttpContext.SignInAsync(principal);
                        HttpContext.Session.SetString("token", LoginAPI2.Token);
                         
                        if (Url.IsLocalUrl(ReturnUrl))
                        {
                             return Redirect(ReturnUrl);

                        }
                        else
                        {
                            return RedirectToAction("Index", "Home", new { Area = "Administrator" });
                        }
                    }
                }

            }
            return View();
        }
    }
}