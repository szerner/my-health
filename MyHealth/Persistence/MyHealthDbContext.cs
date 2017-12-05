using Microsoft.EntityFrameworkCore;
using MyHealth.Core.Models;

namespace MyHealth.Persistence
{
    public class MyHealthDbContext : DbContext
    {
		public DbSet<User> Users { get; set; }
		public DbSet<BloodPressure> BloodPressures { get; set; }
		public DbSet<PulseRate> PulseRates { get; set; }
		public DbSet<BodyWeight> BodyWeights { get; set; }
		
        public MyHealthDbContext(DbContextOptions<MyHealthDbContext> options) : base(options)
		  {
				
		  }
    }
}