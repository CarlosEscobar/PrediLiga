using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PregiLiga.Api.Models
{
    public class LeagueMatchModel
    {
        public long id { get; set; }
        public long idLeague { get; set; }
        public long idMatch { get; set; }
    }
}