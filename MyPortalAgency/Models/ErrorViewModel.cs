using System;
using System.ComponentModel.DataAnnotations;

namespace MyPortalAgency.Models
{
    public class LoginModel
    {
       [Required]
        public string Email { get; set; }
        [Required]
        [DataType(DataType.Password)]
        public string Password { get; set; }

        public bool RememberMe { get; set; }
    }
    public class ErrorViewModel
    {
        public string RequestId { get; set; }

        public bool ShowRequestId => !string.IsNullOrEmpty(RequestId);
    }
    public class LoginAPI
    {
        public string Token { get; set; }
        public string error { get; set; }

    }
}