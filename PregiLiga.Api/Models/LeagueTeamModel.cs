﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PregiLiga.Api.Models
{
    public class LeagueTeamModel
    {
        public long id { get; set; }
        public long idLeague { get; set; }
        public long idTeam { get; set; }
    }
}