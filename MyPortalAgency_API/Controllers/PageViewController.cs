using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AO.AspNetCore.NLib;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MyPortalAgency_API.Models;

namespace MyPortalAgency_API.Controllers
{
    [Route("[controller]")]
    [ApiController]
    [Authorize]
    public class PageViewController : Controller
    {
        private readonly IUnitOfWork repo;

        public PageViewController(IUnitOfWork repo)
        {
            this.repo = repo;
        }

        [HttpGet]
        [Route("GetPages")]
        public List<PageViewModel> GetPages()
        {
            return repo.Repository<PageViewModel>().GetAll();

        }

        [HttpGet]
        [Route("Protected")]
        public async Task<object> Protected()
        {
            return "Protected area";
        }
    }
}