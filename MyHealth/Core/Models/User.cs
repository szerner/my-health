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
		[StringLength(100)]
		public string Email { get; set; }

		public Gender? Gender { get; set; }
		
		[StringLength(10)]
		public string BirthDate { get; set; }
		public float? Height { get; set; }
		public bool? Admin { get; set; }

		public int Age { 
			get {
            if (BirthDate == null) return 0;

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