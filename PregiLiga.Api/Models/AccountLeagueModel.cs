using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using PrediLiga.domain.Entities;

namespace PregiLiga.Api.Models
{
    public class AccountLeagueModel
    {
        public long idAccount{ get; set; }
        public long idLeague { get; set; }
    }
}