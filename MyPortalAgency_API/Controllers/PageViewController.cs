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

        [HttpPost]
        [Route("EditPage")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public async Task<object> EditPage([FromQuery]Guid? ID, PageViewModel model)
        {
            var result = repo.Repository<PageViewModel>().FindBy(x => x.Id == ID);
            result.Title = model.Title;
            result.Description = model.Description;
            repo.Repository<PageViewModel>().Edit(result);
            return new { sucess = true };
        }

        [HttpPost]
        [Route("DeletePage")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public async Task<object> DeletePage([FromQuery]Guid? ID)
        {
            var result = repo.Repository<PageViewModel>().FindBy(x => x.Id == ID);
            if (result == null)
            {
                return new { sucess = false, error = "notfound" };

            }
            repo.Repository<PageViewModel>().Delete(result);
            return new { sucess = true };
        }

        [HttpGet]
        [Route("GetPageContent")]
        public async Task<object> GetPageContent([FromQuery]Guid? ID)
        {
            var result = repo.Repository<PageContentViewModel>().FindBy( x=>x.Id == ID);
            return result;
        }

        [HttpPost]
        [Route("CreatePageContent")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public async Task<object> CreatePageContent(PageContentViewModel model)
        {
            repo.Repository<PageContentViewModel>().Add(model);
            repo.Repository<PageContentViewModel>().Save();
            return new { sucess = true };
        }
        [HttpPost]
        [Route("EditPageContent")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public async Task<object> EditPageContent( PageContentViewModel model)
        {
            var result = repo.Repository<PageContentViewModel>().FindBy(x => x.Id == model.Id);
            result.Title = model.Title;
            result.Description = model.Description;
            result.Logo = "data:image/jpeg;base64," + model.Logo;
            result.More = model.More;
            repo.Repository<PageContentViewModel>().Edit(result);
            repo.Repository<PageContentViewModel>().Save();
            return new { sucess = true };
        }

        [HttpPost]
        [Route("DeletPageContent")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public async Task<object> DeletPageContent(PageContentViewModel model)
        {
            var result = repo.Repository<PageContentViewModel>().FindBy(x => x.Id == model.Id);
            if (result == null)
            {
                return new { sucess = false, error="notfound" };

            }
            repo.Repository<PageContentViewModel>().Delete(result);
            repo.Repository<PageContentViewModel>().Save();
            return new { sucess = true };
        }

        [HttpGet]
        [Route("GetThemeOption")]
        public async Task<object> GetThemeOption()
        {
            var result = repo.Repository<ThemeOptionModels>().GetAll();
            return result;
        }

        [HttpGet]
        [Route("Protected")]
        [Authorize]
        public async Task<object> Protected()
        {
            return "Protected area";
        }
    }
}