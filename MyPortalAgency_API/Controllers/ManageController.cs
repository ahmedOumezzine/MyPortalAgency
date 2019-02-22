using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace MyPortalAgency_API.Controllers
{
    [Route("[controller]")]
    [ApiController]
    [Authorize]
    public class ManageController : Controller
    {
        [Authorize]
        [HttpGet]
        [Route("Protected")]
        public async Task<object> Protected()
        {
            return "Protected area";
        }
    }
}