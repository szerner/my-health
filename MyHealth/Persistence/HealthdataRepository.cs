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

		public void AddBloodPressure(BloodPressure pressure)
		{
			context.BloodPressures.Add(pressure);
		}

		public async Task<IEnumerable<BloodPressure>> GetBloodPressures(int userId)
		{
			return await context.BloodPressures
            .Where(measurement => measurement.UserId == userId)
            .OrderByDescending(measurement => measurement.Time)
            .ToListAsync();
		}

		public async Task<BloodPressure> GetLastBloodPressure(int userId)
		{
			return await context.BloodPressures
				.Where(measurement => measurement.UserId == userId)
				.OrderByDescending(measurement => measurement.Time)
				.FirstOrDefaultAsync();
		}

		public void AddPulseRate(PulseRate rate)
		{
			context.PulseRates.Add(rate);
		}

		public async Task<IEnumerable<PulseRate>> GetPulseRates(int userId)
		{
			return await context.PulseRates
            .Where(measurement => measurement.UserId == userId)
            .OrderByDescending(measurement => measurement.Time)
            .ToListAsync();
		}

		public async Task<PulseRate> GetLastPulseRate(int userId)
		{
			return await context.PulseRates
				.Where(measurement => measurement.UserId == userId)
				.OrderByDescending(measurement => measurement.Time)
				.FirstOrDefaultAsync();
		}


	}
}