using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AO.AspNetCore.NLib;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace MyPortalAgency_API.Controllers
{
    [Route("[controller]")]
    [ApiController]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    public class ManageController : Controller
    {
        private readonly IUnitOfWork repo;

        public ManageController(IUnitOfWork repo)
        {
            this.repo = repo;
        }

        [HttpPost]
        [Route("Protected")]
        public async Task<object> Protected()
        {
            return "Protected area";
        }

        [HttpGet]
        [Route("Protected2")]
        public async Task<object> Protected2()
        {
            return "Protected area";
        }
    }
}