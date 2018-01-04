using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MyHealth.Core;
using MyHealth.Core.Models;
using MyHealth.Persistence;

namespace MyHealth.Controllers
{
   [Authorize]
	[Route("/api/healthdata")]
	public class HealthdataController : Controller
	{
		private readonly IHealthdataRepository repository;
		private readonly IUnitOfWork unitOfWork;

		public HealthdataController(IHealthdataRepository repository, IUnitOfWork unitOfWork)
		{
			this.unitOfWork = unitOfWork;
			this.repository = repository;
		}

		[HttpPost("bodyweights")]
		public async Task<IActionResult> AddBodyWeight([FromBody] BodyWeight weight)
		{
			if (!ModelState.IsValid)
				return BadRequest(ModelState);

			repository.AddBodyWeight(weight);
			await unitOfWork.CompleteAsync();

			return Ok(weight);
		}
		[HttpGet("bodyweights/{userId}")]
		public async Task<IActionResult> GetBodyWeights(int userId)
		{
			var weights = await repository.GetBodyWeights(userId);
			return Ok(weights);
		}
		[HttpGet("bodyweights/{userId}/latest")]
		public async Task<IActionResult> GetLastBodyWeight(int userId)
		{
			var weight = await repository.GetLastBodyWeight(userId);
         if (weight == null)
            return NotFound();

         return Ok(weight);
		}
		[HttpDelete("bodyweights/{userId}/{weightId}")]
		public async Task<IActionResult> DeleteBodyWeight(int weightId)
		{
			repository.DeleteBodyWeight(weightId);
         await unitOfWork.CompleteAsync();
			return NoContent();
		}

		[HttpPost("circulations")]
		public async Task<IActionResult> AddCirculation([FromBody] Circulation circulation)
		{
			if (!ModelState.IsValid)
				return BadRequest(ModelState);

			repository.AddCirculation(circulation);
			await unitOfWork.CompleteAsync();

			return Ok(circulation);
		}
		[HttpGet("circulations/{id}")]
		public async Task<IActionResult> GetCirculations(int id)
		{
			var circulations = await repository.GetCirculations(id);
			return Ok(circulations);
		}
		[HttpGet("circulations/{id}/latest")]
		public async Task<IActionResult> GetLastCirculations(int id)
		{
			var circulation = await repository.GetLastCirculation(id);

         if (circulation == null) return NotFound();

         return Ok(circulation);
		}

      [HttpDelete("circulations/{userId}/{circulationId}")]
      public async Task<IActionResult> DeleteCirculation(int circulationId)
      {
         repository.DeleteCirculation(circulationId);
         await unitOfWork.CompleteAsync();
         return NoContent();
      }

	}
}