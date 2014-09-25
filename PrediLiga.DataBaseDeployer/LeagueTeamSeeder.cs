using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DomainDrivenDatabaseDeployer;
using NHibernate;
using PrediLiga.Domain.Entities;

namespace PrediLiga.DatabaseDeployer
{
    class LeagueTeamSeeder : IDataSeeder
    {
        readonly ISession _session;

        public LeagueTeamSeeder(ISession session)
        {
            _session = session;
        }

        public void Seed()
        {
            var leagueTeam1 = new LeagueTeam
            {
                idLeague = 1,
                idTeam = 1
            };
            _session.Save(leagueTeam1);

            var leagueTeam2 = new LeagueTeam
            {
                idLeague = 1,
                idTeam = 2
            };
            _session.Save(leagueTeam2);

        }
    }
}
