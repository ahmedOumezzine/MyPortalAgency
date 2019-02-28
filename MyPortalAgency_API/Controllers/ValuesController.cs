using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using MyPortalAgency_API.Models;

namespace MyPortalAgency_API.Controllers
{
    [Route("[controller]")]
    [ApiController]
    [Produces("application/json")]
    public class ValuesController : ControllerBase
    {
        // GET api/values
        [HttpGet]
        public ActionResult<string> Gets()
        {
            List<PageViewModel> PageViewModel = new List<PageViewModel>() {
                new Models.PageViewModel() { Title="aa",Description="bb",Type="cc"},
                new Models.PageViewModel() { Title="aa2",Description="bb2",Type="cc2"}
            };
           var result=  JsonConvert.SerializeObject(PageViewModel);
            return result;
        }

        // GET api/values/5
        [HttpGet]
        public ActionResult<string> Get([FromQuery] int id)
        {
            PageViewModel PageViewModel = new Models.PageViewModel() { Title = "aa", Description = "bb", Type = "cc" };
            var result = JsonConvert.SerializeObject(PageViewModel);
            return result;
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
