using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AO.AspNetCore.NLib;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MyPortalAgency_API.Models;
using Newtonsoft.Json;

namespace MyPortalAgency_API.Controllers
{
    [Route("[controller]")]
    [ApiController]
   //[Authorize]
    public class PageViewController : Controller
    {
        private readonly IUnitOfWork repo;

        public PageViewController(IUnitOfWork repo)
        {
            this.repo = repo;
        }

        [HttpGet]
        [Route("GetPages")]
        public async Task<object> GetPages([FromQuery] Guid Id)
        {
            var result = repo.Repository<PageViewModel>().FindBy( x=>x.Id ==Id, "PageContentViewModel");
            return result;
        }

        [HttpGet]
        [Route("Protected")]
        public async Task<object> Protected()
        {
            return "Protected area";
        }
    }
}