using System;
using System.Collections.Generic;

namespace MyHealth.Models
{
	public class User
	{
		public int Id { get; set; }
		public string FirstName { get; set; }
		public string LastName { get; set; }
		public Gender Gender { get; set; }
		public DateTime BirthDate { get; set; }
		public ICollection<Measurement> Measurements { get; set; }
	}

	public enum Gender : byte
	{
		male = 1,
		female = 2,
		undefined = 3
	}
}