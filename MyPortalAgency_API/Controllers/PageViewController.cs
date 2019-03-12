using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AO.AspNetCore.NLib;
using Microsoft.AspNetCore.Authentication.JwtBearer;
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
        public async Task<object> GetPages([FromQuery]String Type)
        {
            var result = repo.Repository<PageViewModel>().FindBy( x=>x.Type == Type, "PageContentViewModel");
            return result;
        }

        [HttpGet]
        [Route("GetThemeOption")]
        public async Task<object> GetThemeOption()
        {
            var result = repo.Repository<ThemeOptionModels>().GetAll();
            return result;
        }
 
    }
}