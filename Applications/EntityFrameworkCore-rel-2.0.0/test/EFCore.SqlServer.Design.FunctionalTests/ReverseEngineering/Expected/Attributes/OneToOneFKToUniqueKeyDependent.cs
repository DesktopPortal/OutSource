using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace E2ETest.Namespace.SubDir
{
    [Table("OneToOneFKToUniqueKeyDependent")]
    public partial class OneToOneFktoUniqueKeyDependent
    {
        [Column("OneToOneFKToUniqueKeyDependentID1")]
        public int OneToOneFktoUniqueKeyDependentId1 { get; set; }
        [Column("OneToOneFKToUniqueKeyDependentID2")]
        public int OneToOneFktoUniqueKeyDependentId2 { get; set; }
        [Required]
        [StringLength(20)]
        public string SomeColumn { get; set; }
        [Column("OneToOneFKToUniqueKeyDependentFK1")]
        public int? OneToOneFktoUniqueKeyDependentFk1 { get; set; }
        [Column("OneToOneFKToUniqueKeyDependentFK2")]
        public int? OneToOneFktoUniqueKeyDependentFk2 { get; set; }

        public OneToOneFktoUniqueKeyPrincipal OneToOneFktoUniqueKeyDependentFk { get; set; }
    }
}
