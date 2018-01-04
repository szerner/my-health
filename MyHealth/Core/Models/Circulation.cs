using System.ComponentModel.DataAnnotations;

namespace MyHealth.Core.Models
{
	public class Circulation : Measurement
	{
		public int? PressureSystolic { get; set; }
		public int? PressureDiastolic { get; set; }
      public int? HeartRate { get; set; }
	}
}