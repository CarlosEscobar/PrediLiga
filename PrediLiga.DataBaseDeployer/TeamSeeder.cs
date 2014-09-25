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
    class TeamSeeder : IDataSeeder
    {
        readonly ISession _session;

        public TeamSeeder(ISession session)
        {
            _session = session;
        }

        public void Seed()
        {
            _session.Save(new Team
            {
                Name = "TestTeam1",
                NumberOfPlayers = 0,
                Coach = "Test"
            });

            _session.Save(new Team
            {
                Name = "TestTeam2",
                NumberOfPlayers = 0,
                Coach = "Test"
            });
        }
    }
}
