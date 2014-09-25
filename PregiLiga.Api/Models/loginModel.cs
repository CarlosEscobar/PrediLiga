using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PregiLiga.Api.Models
{
    public class loginModel
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
    }
}