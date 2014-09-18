using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PrediLiga.Domain.Entities
{
    class AccountLeague : IEntity
    {
        public virtual long Id { get; set; }
        public virtual bool IsArchived { get; set; }

        public virtual long IdAccount { get; set; }

        public virtual long IdLeague { get; set; }
    }
}
