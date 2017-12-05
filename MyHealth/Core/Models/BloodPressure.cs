using System.ComponentModel.DataAnnotations;

namespace MyHealth.Core.Models
{
	public class BloodPressure : Measurement
	{
		[Required]
		public byte Systolic { get; set; }
		[Required]
		public byte Diastolic { get; set; }
	}
}