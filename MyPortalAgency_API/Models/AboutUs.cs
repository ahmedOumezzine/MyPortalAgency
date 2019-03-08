using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyPortalAgency_API.Models
{
    public class AboutUs:Table
    {
        public string title { get; set; }
        public string description { get; set; }
    }

    public class AboutUs_ourStory : Table
    {
        public string Logo { get; set; }
        public string Date { get; set; }
        public string description { get; set; }
    }

    public class AboutUs_ourSuccess : Table
    {
        public string Icon { get; set; }
        public string Title { get; set; }
        public string description { get; set; }
    }
}
