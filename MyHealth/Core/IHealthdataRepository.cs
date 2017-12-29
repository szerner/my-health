using System.Collections.Generic;
using System.Threading.Tasks;
using MyHealth.Core.Models;

namespace MyHealth.Core
{
    public interface IHealthdataRepository
    {
		void AddBodyWeight(BodyWeight weight);
		Task<IEnumerable<BodyWeight>> GetBodyWeights(int userId);
		Task<BodyWeight> GetLastBodyWeight(int userId);
      void DeleteBodyWeight(int weightId);

      void AddBloodPressure(BloodPressure pressure);
		Task<IEnumerable<BloodPressure>> GetBloodPressures(int userId);
		Task<BloodPressure> GetLastBloodPressure(int userId);

		void AddPulseRate(PulseRate rate);
		Task<IEnumerable<PulseRate>> GetPulseRates(int userId);
		Task<PulseRate> GetLastPulseRate(int userId);
	}
}