using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AO.AspNetCore.NLib;
using Microsoft.AspNetCore.Mvc;

namespace MyPortalAgency_API.Controllers
{
    public class HomeController : Controller
    {
        private readonly IUnitOfWork repo;

        public HomeController(IUnitOfWork repo)
        {
            this.repo = repo;
        }
        public IActionResult Index()
        {
            return View();
        }
    }
}