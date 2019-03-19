using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MyPortalAgency.Areas.Administrator.Models;
using Newtonsoft.Json;

namespace MyPortalAgency.Areas.Administrator.Controllers
{
    [Area("Administrator")]
    [Microsoft.AspNetCore.Authorization.Authorize]

    public class OurCompanyController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public async Task<IActionResult> AboutUs()
        {
            PageViewModel PageViewModel = null;
            using (var client = new HttpClient())
            {
                client.BaseAddress = new Uri("https://myportalagency.azurewebsites.net/");
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpResponseMessage response = await client.GetAsync("api//PageView/GetPages/?type=AboutUs");
                if (response.IsSuccessStatusCode)
                {
                    PageViewModel = await response.Content.ReadAsAsync<PageViewModel>();
                }
            }
            return View(PageViewModel);
        }
        
        public async Task<IActionResult> Portfilio()
        {
            PageViewModel PageViewModel = null;
            using (var client = new HttpClient())
            {
                client.BaseAddress = new Uri("https://myportalagency.azurewebsites.net/");
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpResponseMessage response = await client.GetAsync("api//PageView/GetPages/?type=portfolio");
                if (response.IsSuccessStatusCode)
                {
                    PageViewModel = await response.Content.ReadAsAsync<PageViewModel>();
                }
            }
            return View(PageViewModel);
        }
        
        public async Task<IActionResult> Career()
        {
            PageViewModel PageViewModel = null;
            using (var client = new HttpClient())
            {
                client.BaseAddress = new Uri("https://myportalagency.azurewebsites.net/");
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpResponseMessage response = await client.GetAsync("api//PageView/GetPages/?type=Career");
                if (response.IsSuccessStatusCode)
                {
                    PageViewModel = await response.Content.ReadAsAsync<PageViewModel>();
                }
            }
            return View(PageViewModel);
        }


        public async Task<IActionResult> ContactUs()
        {
            PageViewModel PageViewModel = null;
            using (var client = new HttpClient())
            {
                client.BaseAddress = new Uri("https://myportalagency.azurewebsites.net/");
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpResponseMessage response = await client.GetAsync("api//PageView/GetPages/?type=ContactUs");
                if (response.IsSuccessStatusCode)
                {
                    PageViewModel = await response.Content.ReadAsAsync<PageViewModel>();
                }
            }
            return View(PageViewModel);
        }


        public async Task<IActionResult> Services()
        {
            PageViewModel PageViewModel = null;
            using (var client = new HttpClient())
            {
                client.BaseAddress = new Uri("https://myportalagency.azurewebsites.net/");
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpResponseMessage response = await client.GetAsync("api//PageView/GetPages/?type=Services");
                if (response.IsSuccessStatusCode)
                {
                    PageViewModel = await response.Content.ReadAsAsync<PageViewModel>();
                }
            }
            return View(PageViewModel);
        }
        public IActionResult Loggers()
        {
            return View();
        }
        public IActionResult Create(Guid id,String Type, String Page)
        {
            ViewBag.id = id;
            ViewBag.Type = Type;

            return View( new MyPortalAgency.Areas.Administrator.Models.PageContentViewModel() { Id = Guid.Empty , PageViewModelId = id, Type = Type, Page = Page });
        }
        [HttpPost]
        public async Task<IActionResult> Create(MyPortalAgency.Areas.Administrator.Models.PageContentViewModel Model)
        {
            var identity = HttpContext.User.Identity as ClaimsIdentity;//cast to claimsidentity
            IEnumerable<Claim> claim = identity.Claims;
            var token = claim.Where(x => x.Type == "token").FirstOrDefault();

            using (var client = new HttpClient())
            {
                client.BaseAddress = new Uri("https://myportalagency.azurewebsites.net");
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", token.Value);
                string myContent = JsonConvert.SerializeObject(Model);
                var stringContent = new StringContent(myContent, UnicodeEncoding.UTF8, "application/json");
                HttpResponseMessage response = await client.PostAsync("api/PageView/CreatePageContent/", stringContent);
                if (response.IsSuccessStatusCode)
                {
                    return RedirectToAction(Model.Type);
                }
                ModelState.AddModelError("error", " Please try  in again.");
                return View(Model);
            }
        }



        [HttpPost]
        public async Task<IActionResult> EditPage(MyPortalAgency.Areas.Administrator.Models.PageViewModel Model)
        {
            var identity = HttpContext.User.Identity as ClaimsIdentity;//cast to claimsidentity
            IEnumerable<Claim> claim = identity.Claims;
            var token = claim.Where(x => x.Type == "token").FirstOrDefault();

            using (var client = new HttpClient())
            {
                client.BaseAddress = new Uri("https://myportalagency.azurewebsites.net");
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Authorization =  new AuthenticationHeaderValue("Bearer", token.Value);


                string myContent = JsonConvert.SerializeObject(Model);
                var stringContent = new StringContent(myContent, UnicodeEncoding.UTF8, "application/json");

                HttpResponseMessage response = await client.PostAsync("api/PageView/EditPage/", stringContent);
                if (response.IsSuccessStatusCode)
                {
                    return RedirectToAction(Model.Type);
                }
                ModelState.AddModelError("error", "Login failed. Please try logging in again.");
                return View(Model);
            }
        }

        [HttpPost]
        public async Task<IActionResult> Edit(MyPortalAgency.Areas.Administrator.Models.PageContentViewModel Model)
        {
            var identity = HttpContext.User.Identity as ClaimsIdentity;//cast to claimsidentity
            IEnumerable<Claim> claim = identity.Claims;
            var token = claim.Where(x => x.Type == "token").FirstOrDefault();

            using (var client = new HttpClient())
            {
                client.BaseAddress = new Uri("https://myportalagency.azurewebsites.net");
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Authorization =  new AuthenticationHeaderValue("Bearer", token.Value);
                string myContent = JsonConvert.SerializeObject(Model);
                var stringContent = new StringContent(myContent, UnicodeEncoding.UTF8, "application/json");
                HttpResponseMessage response = await client.PostAsync("api/PageView/EditPageContent/", stringContent);
                if (response.IsSuccessStatusCode)
                {
                    return RedirectToAction(Model.Type);
                }
                ModelState.AddModelError("error", " Please try  in again.");
                return View(Model);
            }
        }

        


        public async Task<IActionResult> Edit(String Page, Guid? id)
        {
            PageContentViewModel PageContentView = null;
            using (var client = new HttpClient())
            {
                client.BaseAddress = new Uri("https://myportalagency.azurewebsites.net/");
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));

                // New code:
                HttpResponseMessage response = await client.GetAsync("api/PageView/GetPageContent/?id=" + id.Value);
                if (response.IsSuccessStatusCode)
                {
                    PageContentView = await response.Content.ReadAsAsync<PageContentViewModel>();
                }
            }
            PageContentView.Page = Page;
            return View(PageContentView);
        }

        public async Task<IActionResult> Delete(String Page, Guid? id)
        {
            PageContentViewModel PageContentView = null;
            using (var client = new HttpClient())
            {
                client.BaseAddress = new Uri("https://myportalagency.azurewebsites.net/");
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));

                // New code:
                HttpResponseMessage response = await client.GetAsync("api/PageView/GetPageContent/?id=" + id.Value);
                if (response.IsSuccessStatusCode)
                {
                    PageContentView = await response.Content.ReadAsAsync<PageContentViewModel>();
                }
            }
            PageContentView.Page = Page;
            return View(PageContentView);
        }

        [HttpPost]
        public async Task<IActionResult> Delete(MyPortalAgency.Areas.Administrator.Models.PageContentViewModel Model)
        {
            var identity = HttpContext.User.Identity as ClaimsIdentity;//cast to claimsidentity
            IEnumerable<Claim> claim = identity.Claims;
            var token = claim.Where(x => x.Type == "token").FirstOrDefault();

            using (var client = new HttpClient())
            {
                client.BaseAddress = new Uri("https://myportalagency.azurewebsites.net");
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", token.Value);
                string myContent = JsonConvert.SerializeObject(Model);
                var stringContent = new StringContent(myContent, UnicodeEncoding.UTF8, "application/json");
                HttpResponseMessage response = await client.PostAsync("api/PageView/DeletPageContent/", stringContent);
                if (response.IsSuccessStatusCode)
                {
                    return RedirectToAction(Model.Page);
                }
                ModelState.AddModelError("error", " Please try  in again.");
                return View(Model);
            }
        }

    }
}