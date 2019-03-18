using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MyPortalAgency.Areas.Administrator.Models;

namespace MyPortalAgency.Areas.Administrator.Controllers
{
    [Area("Administrator")]
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
        
        public IActionResult Portfilio()
        {
            return View();
        }
        
        public IActionResult Career()
        {
            return View();
        }


        public IActionResult ContactUs()
        {
            return View();
        }


        public IActionResult Services()
        {
            return View();
        }
        public IActionResult Loggers()
        {
            return View();
        }
        public IActionResult Create(Guid id,String Type, String Page)
        {
            ViewBag.id = id;
            ViewBag.Type = Type;

            return View( new MyPortalAgency.Areas.Administrator.Models.PageContentViewModel() { PageViewModelId = id, Type = Type, Page = Page });
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
    }
}