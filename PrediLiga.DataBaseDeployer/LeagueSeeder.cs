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
    class LeagueSeeder : IDataSeeder
    {
        readonly ISession _session;

        public LeagueSeeder(ISession session)
        {
            _session = session;
        }

        public void Seed()
        {
            _session.Save(new League
            {
                Name = "TestLeague",
                Day = "Test",
                Location = "Test"
            });
        }
    }
}
