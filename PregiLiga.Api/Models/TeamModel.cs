using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PregiLiga.Api.Models
{
    public class TeamModel
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public int NumberOfPlayers { get; set; }
        public string Coach { get; set; }
    }
}