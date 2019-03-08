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

    public class PageContentFormViewModel : Table
    {
        public String FieldType { get; set; }
        public String FieldName { get; set; }
        public String Label { get; set; }
        public String placeholder { get; set; }
        public String FormName { get; set; }

    }
    public class PageContentFormResultViewModel : Table
    {

        public String Title { get; set; }
        public String FormName { get; set; }
        public String Result { get; set; }

    }
}
