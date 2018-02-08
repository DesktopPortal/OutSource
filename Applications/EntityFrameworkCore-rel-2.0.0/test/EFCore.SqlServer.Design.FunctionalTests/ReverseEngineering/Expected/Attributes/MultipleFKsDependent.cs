using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace E2ETest.Namespace.SubDir
{
    [Table("MultipleFKsDependent")]
    public partial class MultipleFksDependent
    {
        [Column("MultipleFKsDependentId")]
        public int MultipleFksDependentId { get; set; }
        [Required]
        [StringLength(20)]
        public string AnotherColumn { get; set; }
        [Column("RelationAId")]
        public int RelationAid { get; set; }
        [Column("RelationBId")]
        public int? RelationBid { get; set; }
        [Column("RelationCId")]
        public int? RelationCid { get; set; }

        [ForeignKey("RelationAid")]
        [InverseProperty("MultipleFksDependentRelationA")]
        public MultipleFksPrincipal RelationA { get; set; }
        [ForeignKey("RelationBid")]
        [InverseProperty("MultipleFksDependentRelationB")]
        public MultipleFksPrincipal RelationB { get; set; }
        [ForeignKey("RelationCid")]
        [InverseProperty("MultipleFksDependentRelationC")]
        public MultipleFksPrincipal RelationC { get; set; }
    }
}
