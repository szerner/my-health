using Microsoft.EntityFrameworkCore;
using MyHealth.Core.Models;

namespace MyHealth.Persistence
{
    public class MyHealthDbContext : DbContext
    {
		public DbSet<User> Users { get; set; }
		public DbSet<Circulation> Circulations { get; set; }
		public DbSet<BodyWeight> BodyWeights { get; set; }
		
        public MyHealthDbContext(DbContextOptions<MyHealthDbContext> options) : base(options)
		  {
				
		  }

      protected override void OnModelCreating(ModelBuilder modelBuilder)
      {
         modelBuilder.Entity<User>()
             .Property(b => b.Admin)
             .HasDefaultValue(false);

         modelBuilder.Entity<BodyWeight>()
            .Property(p => p.Time)
            .HasDefaultValueSql("GetUtcDate()");
         modelBuilder.Entity<Circulation>()
            .Property(p => p.Time)
            .HasDefaultValueSql("GetUtcDate()");
      }
    }
}