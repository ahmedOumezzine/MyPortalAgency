using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyPortalAgency_API.Models
{
    public class ContactUs : Table
    {
        public string Title { get; set; }
        public string Description { get; set; }
    }

    public class ContactUs_Office : Table
    {
        public string Icon { get; set; }
        public string Key { get; set; }
        public string Value { get; set; }
    }

    public class ContactUs_Support : Table
    {
        public string Icon { get; set; }
        public string Key { get; set; }
        public string Value { get; set; }
    }

    public class ContactUs_Speak : Table
    {
        public string Icon { get; set; }
        public string Key { get; set; }
        public string Value { get; set; }
    }
}
