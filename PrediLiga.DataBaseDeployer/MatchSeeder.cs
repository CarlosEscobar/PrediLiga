using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DomainDrivenDatabaseDeployer;
using NHibernate;
using PrediLiga.domain.Entities;

namespace PrediLiga.DatabaseDeployer
{
    class MatchSeeder : IDataSeeder 
    {
        readonly ISession _session;

        public MatchSeeder(ISession session)
        {
            _session = session;
        }

        public void Seed()
        {
            _session.Save(new Match
            {
                Team1 = "Team1",
                Team2 = "Team2",
                Day = "Test"

                /*
                Team1 = _session.QueryOver<Team>().Where(x => x.Name == "TestTeam1").SingleOrDefault<Team>(),
                Team2 = _session.QueryOver<Team>().Where(x => x.Name == "TestTeam2").SingleOrDefault<Team>(),
                Day = "Test"
                 */
            });
        }
    }
}
