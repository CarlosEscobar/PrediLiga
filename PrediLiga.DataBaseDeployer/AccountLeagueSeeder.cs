using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DomainDrivenDatabaseDeployer;
using NHibernate;
using PrediLiga.Domain.Entities;
using PrediLiga.domain.Entities;

namespace PrediLiga.DatabaseDeployer
{
    class AccountLeagueSeeder : IDataSeeder
    {
        readonly ISession _session;

        public AccountLeagueSeeder(ISession session)
        {
            _session = session;
        }

        public void Seed()
        {
            var accountLeague = new AccountLeague
            {
                idAccount = 1,
                idLeague = 1
            };
            _session.Save(accountLeague);

        }
    }
}
