using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyPortalAgency_API.Models
{
    public class Portfolio : Table
    {
        public string title { get; set; }
        public string description { get; set; }
    }

    public class Portfolio_Projet : Table
    {
        public string title { get; set; }
        public string description { get; set; }
        public string ClientName { get; set; }
        public string Date { get; set; }
        public string Skills { get; set; }
        public string ProjeturlView { get; set; }
    }

    public class Portfolio_Album : Table
    {
        public string title { get; set; }
        public string Photos { get; set; }
    }
}
