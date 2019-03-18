using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyPortalAgency.Areas.Administrator.Models
{
    public class PageViewModel
    {
        public Guid Id { get; set; }
        public String Title { get; set; }
        public String Description { get; set; }
        public String Type { get; set; }
        public ICollection<PageContentViewModel> PageContentViewModel { get; set; }

    }
    public class PageContentViewModel
    {
        public Guid Id { get; set; }
        public String Title { get; set; }
        public String Description { get; set; }
        public String Logo { get; set; }
        public String Type { get; set; }
        public String More { get; set; }
        public String Page { get; set; }
        public Guid PageViewModelId { get; set; }

    }
}
