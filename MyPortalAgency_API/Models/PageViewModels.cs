using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace MyPortalAgency_API.Models
{
    [Table("PageView")]
    public class PageViewModel 
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; }
        public String Title { get; set; }
        public String Description { get; set; }
        public String Type { get; set; }
        public ICollection<PageContentViewModel> PageContentViewModel { get; set; }

    }
    [Table("PageContentView")]
    public class PageContentViewModel  
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; }
        public String Title { get; set; }
        public String Description { get; set; }
        public String Logo { get; set; }
        public String Type { get; set; }
        public String More { get; set; }
        public Guid PageViewModelId { get; set; }
        public virtual PageViewModel PageViewModel { get; set; }
    }

    public class PageContentAlbumViewModel : Table
    {
        public String Title { get; set; }
        public String alt { get; set; }
        public String Path { get; set; }

    }

    public class FormViewModel : Table
    {
        public String name { get; set; }
        public String header { get; set; }
        public String url { get; set; }

    }
    public class Form_ContentViewModel : Table
    {
        public String field { get; set; }
        public String type { get; set; }
        public String required { get; set; }
        public String options { get; set; } // { items: ['Adams, John', 'Johnson, Peter', 'Lewis, Frank', 'Cruz, Steve', 'Donnun, Nick'] }

    }
    public class PageContentFormResultViewModel : Table
    {

        public String Title { get; set; }
        public String FormName { get; set; }
        public String Result { get; set; }

    }
}
