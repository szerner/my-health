namespace MyHealth.Models
{
	public class BloodPressure : Measurement
	{
		public byte Systolic { get; set; }
		public byte Diastolic { get; set; }
	}
}