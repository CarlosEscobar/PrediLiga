using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using PrediLiga.domain.Entities;

namespace PregiLiga.Api.Models
{
    public class MatchModel
    {
        public long Id { get; set; }
        public string Team1 { get; set; }
        public string Team2 { get; set; }
        public string Day { get; set; }
    }
}