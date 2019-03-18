using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace MyPortalAgency.Areas.Administrator.Controllers
{
    [Area("Administrator")]
    [Microsoft.AspNetCore.Authorization.Authorize]

    public class PageController : Controller
    {
        public IActionResult Index()
        {
            return RedirectToAction("Create");
        }
        public IActionResult Create()
        {
            return View();
        }
    }
}