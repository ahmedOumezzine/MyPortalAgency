using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AO.AspNetCore.NLib;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace MyPortalAgency_API.Controllers
{
    [Route("[controller]")]
    [ApiController]
    [Authorize]
    public class ManageController : Controller
    {
        private readonly IUnitOfWork repo;

        public ManageController(IUnitOfWork repo)
        {
            this.repo = repo;
        }

        [Authorize]
        [HttpGet]
        [Route("Protected")]
        public async Task<object> Protected()
        {
            return "Protected area";
        }
    }
}