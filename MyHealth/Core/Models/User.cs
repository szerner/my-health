using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.ComponentModel.DataAnnotations;

namespace MyHealth.Core.Models
{
	public class User
	{
		public int Id { get; set; }
		[Required]
		[StringLength(100)]
		public string FirstName { get; set; }
		[Required]
		[StringLength(100)]
		public string LastName { get; set; }
		[Required]
		public Gender Gender { get; set; }
		[Required]
		[StringLength(20)]
		public string BirthDate { get; set; }
		[Required]
		public float Height { get; set; }
		[Required]
		public float Weight { get; set; }

		public int Age { 
			get {
				DateTime now = DateTime.Today;
				DateTime birthDate = System.Convert.ToDateTime(BirthDate);
				int age = now.Year - birthDate.Year;
				if (now < birthDate.AddYears(age)) age--;

				return age;
			}
	 	}
		
		// public ICollection<BloodPressure> BloodPressures { get; set; }
		// public ICollection<PulseRate> PulseRates { get; set; }
		// public ICollection<BodyWeight> BodyWeights { get; set; }

		public User()
		{
			// BloodPressures = new Collection<BloodPressure>();
			// PulseRates = new Collection<PulseRate>();
			// BodyWeights = new Collection<BodyWeight>();
		}
	}


}