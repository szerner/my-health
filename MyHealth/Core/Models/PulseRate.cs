using System.ComponentModel.DataAnnotations;

namespace MyHealth.Core.Models
{
    public class PulseRate : Measurement
    {
		[Required]
        public byte Rate { get; set; }
    }
}