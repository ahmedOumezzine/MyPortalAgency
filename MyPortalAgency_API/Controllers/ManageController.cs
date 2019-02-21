using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace JWTAuthentication.Controllers
{
    [Route("api/Account")]
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