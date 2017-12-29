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
			return Ok(weight);
		}
		[HttpDelete("bodyweights/{userId}/{weightId}")]
		public async Task<IActionResult> DeleteBodyWeight(int weightId)
		{
			repository.DeleteBodyWeight(weightId);
         await unitOfWork.CompleteAsync();
			return Ok();
		}

		[HttpPost("bloodpressures")]
		public async Task<IActionResult> AddBloodPressure([FromBody] BloodPressure pressure)
		{
			if (!ModelState.IsValid)
				return BadRequest(ModelState);

			repository.AddBloodPressure(pressure);
			await unitOfWork.CompleteAsync();

			return Ok(pressure);
		}
		[HttpGet("bloodpressures/{id}")]
		public async Task<IActionResult> GetBloodPressures(int id)
		{
			var pressures = await repository.GetBloodPressures(id);
			return Ok(pressures);
		}
		[HttpGet("bloodpressures/{id}/latest")]
		public async Task<IActionResult> GetLastBloodPressure(int id)
		{
			var pressure = await repository.GetLastBloodPressure(id);
			return Ok(pressure);
		}

		[HttpPost("pulserates")]
		public async Task<IActionResult> AddPulseRate([FromBody] PulseRate rate)
		{
			if (!ModelState.IsValid)
				return BadRequest(ModelState);

			repository.AddPulseRate(rate);
			await unitOfWork.CompleteAsync();

			return Ok(rate);
		}

		[HttpGet("pulserates/{id}")]
		public async Task<IActionResult> GetPulseRates(int id)
		{
			var rates = await repository.GetPulseRates(id);
			return Ok(rates);
		}
		[HttpGet("pulserates/{id}/latest")]
		public async Task<IActionResult> GetLastPulseRate(int id)
		{
			var rate = await repository.GetLastPulseRate(id);
			return Ok(rate);
		}

	}
}