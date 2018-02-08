using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace E2E.Sqlite
{
    public partial class SelfRef
    {
        public SelfRef()
        {
            InverseSelfForeignKeyNavigation = new HashSet<SelfRef>();
        }

        public long Id { get; set; }
        public long? SelfForeignKey { get; set; }

        [ForeignKey("SelfForeignKey")]
        [InverseProperty("InverseSelfForeignKeyNavigation")]
        public SelfRef SelfForeignKeyNavigation { get; set; }
        [InverseProperty("SelfForeignKeyNavigation")]
        public ICollection<SelfRef> InverseSelfForeignKeyNavigation { get; set; }
    }
}
