using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyPortalAgency_API.Models
{
    public class Careers : Table
    {
        public string title { get; set; }
        public string description { get; set; }
    }

    public class Careers_Jobs : Table
    {
        public string title { get; set; }
        public string description { get; set; }
        public string Experience { get; set; }
        public string Position { get; set; }
        public string Email { get; set; }
    }
}
