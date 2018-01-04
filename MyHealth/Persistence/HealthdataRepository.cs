using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using MyHealth.Core;
using MyHealth.Core.Models;

namespace MyHealth.Persistence
{
	public class HealthdataRepository : IHealthdataRepository
	{
		private readonly MyHealthDbContext context;

		public HealthdataRepository(MyHealthDbContext context)
		{
			this.context = context;
		}

		public void AddBodyWeight(BodyWeight weight)
		{
			context.BodyWeights.Add(weight);
		}

		public async Task<IEnumerable<BodyWeight>> GetBodyWeights(int userId)
		{
			return await context.BodyWeights
            .Where(measurement => measurement.UserId == userId)
            .OrderByDescending(measurement => measurement.Time)
            .ToListAsync();
		}

		public async Task<BodyWeight> GetLastBodyWeight(int userId)
		{
			return await context.BodyWeights
				.Where(measurement => measurement.UserId == userId)
				.OrderByDescending(measurement => measurement.Time)
				.FirstOrDefaultAsync();
		}

      public void DeleteBodyWeight(int weightId) {
         context.BodyWeights.Remove(context.BodyWeights.Single(d => d.Id == weightId));
      }

		public void AddCirculation(Circulation circulation)
		{
			context.Circulations.Add(circulation);
		}

		public async Task<IEnumerable<Circulation>> GetCirculations(int userId)
		{
			return await context.Circulations
            .Where(measurement => measurement.UserId == userId)
            .OrderByDescending(measurement => measurement.Time)
            .ToListAsync();
		}

		public async Task<Circulation> GetLastCirculation(int userId)
		{
			return await context.Circulations
				.Where(measurement => measurement.UserId == userId)
				.OrderByDescending(measurement => measurement.Time)
				.FirstOrDefaultAsync();
		}

      public void DeleteCirculation(int circulationId)
      {
         context.Circulations.Remove(context.Circulations.Single(d => d.Id == circulationId));
      }

	}
}