using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PrediLiga.Domain.Entities
{
    class LeagueMatch : IEntity
    {
        public virtual long Id { get; set; }
        public virtual bool IsArchived { get; set; }

        public virtual long IdLeague { get; set; }

        public virtual long IdMatch { get; set; }
    }
}
