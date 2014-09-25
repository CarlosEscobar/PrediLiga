using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DomainDrivenDatabaseDeployer;
using NHibernate;
using NHibernate.Hql.Ast.ANTLR;
using PrediLiga.Domain.Entities;

namespace PrediLiga.DatabaseDeployer
{
    class LeagueMatchSeeder : IDataSeeder
    {
        readonly ISession _session;

        public LeagueMatchSeeder(ISession session)
        {
            _session = session;
        }

        public void Seed()
        {
            var leagueMatch = new LeagueMatch()
            {
                idLeague = 1,
                idMatch = 1
            };
            _session.Save(leagueMatch);

        }
    }
}
