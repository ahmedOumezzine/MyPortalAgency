using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace MyPortalAgency.Areas.Administrator.Controllers
{
    [Area("Administrator")]
    public class OurCompanyController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Services()
        {
            return View();
        }
        public IActionResult ServicesCreate()
        {
            return View();
        }
    }
}