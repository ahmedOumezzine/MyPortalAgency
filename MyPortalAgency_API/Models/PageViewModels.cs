using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyPortalAgency_API.Models
{
    public class PageViewModel
    {
        public String Title { get; set; }
        public String Description { get; set; }
        public String Type { get; set; }
    }

    public class PageContentViewModel
    {
        public String Title { get; set; }
        public String Description { get; set; }
        public String Logo { get; set; }
        public String Type { get; set; }
        public String More { get; set; }
    }

    public class PageContentAlbumViewModel
    {
        public String Title { get; set; }
        public String alt { get; set; }
        public String Path { get; set; }

    }

    public class PageContentFormViewModel
    {
        public String FieldType { get; set; }
        public String FieldName { get; set; }
        public String Label { get; set; }
        public String placeholder { get; set; }
        public String FormName { get; set; }

    }
    public class PageContentFormResultViewModel
    {

        public String Title { get; set; }
        public String FormName { get; set; }
        public String Result { get; set; }

    }
}
