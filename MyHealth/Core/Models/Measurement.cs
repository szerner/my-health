using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MyHealth.Core.Models
{
	// [Table("Measurements")]
    public class Measurement
    {
		public int Id { get; set; }
        public int UserId { get; set; }
		[Required]
		public DateTime Time { get; set; }
    }
}