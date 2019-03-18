using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace MyPortalAgency.Areas.Administrator.Controllers
{
    [Area("Administrator")]
    [Microsoft.AspNetCore.Authorization.Authorize]
    public class SettingsController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        public IActionResult General()
        {
            return View();
        }
        public IActionResult ThemeOption()
        {
            return View();
        }
    }
}