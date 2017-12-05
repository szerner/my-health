using System.ComponentModel.DataAnnotations;

namespace MyHealth.Core.Models
{
    public class BodyWeight : Measurement
    {
		[Required]
        public float Weight { get; set; }
    }
}