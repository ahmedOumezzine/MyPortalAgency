using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace MyPortalAgency_API.Models
{
    public class ThemeOptionModels
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; }
        public String Key { get; set; }
        public String Value { get; set; }
        public String Name { get; set; }
        public String Type { get; set; }

    }

    /* 
     
    1-  logo options
            image
            facion
    2- header options

    3- footer options
       

   5-  social network


     
     * 
     */

}
