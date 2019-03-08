using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyPortalAgency_API.Models
{
    public class Services : Table
    {
        public string Title { get; set; }
        public string Description { get; set; }
    }

    public class Services_Technology : Table
    {
        public string title { get; set; }
        public string description { get; set; }
    }

    public class Services_Technology_Skill : Table
    {
        public string Logo { get; set; }
        public string title { get; set; }
        public string description { get; set; }
    }
    public class Services_Technology_Advantage : Table
    {
        public string Icon { get; set; }
        public string title { get; set; }
        public string description { get; set; }
    }
}
