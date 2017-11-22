using Microsoft.EntityFrameworkCore;
using MyHealth.Models;

namespace MyHealth.Persistence
{
    public class MyHealthDbContext : DbContext
    {
		public DbSet<User> Users { get; set; }
		public DbSet<BloodPressure> BloodPressure { get; set; }
		public DbSet<PulseRate> PulseRate { get; set; }
		public DbSet<BodyWeight> BodyWeight { get; set; }
        public MyHealthDbContext(DbContextOptions<MyHealthDbContext> options) : base(options)
		  {
				
		  }
    }
}