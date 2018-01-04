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

      void AddCirculation(Circulation circulation);
		Task<IEnumerable<Circulation>> GetCirculations(int userId);
		Task<Circulation> GetLastCirculation(int userId);
      void DeleteCirculation(int circulationId);
   }
}