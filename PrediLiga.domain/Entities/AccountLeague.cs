using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using PrediLiga.domain.Entities;

namespace PrediLiga.Domain.Entities
{
    public class AccountLeague : IEntity
    {
        public virtual long Id { get; set; }
        public virtual bool IsArchived { get; set; }

        public virtual long idAccount { get; set; }

        public virtual long idLeague { get; set; }
    }
}
