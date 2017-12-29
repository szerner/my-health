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
	[Route("/api/users")]
	public class UsersController : Controller
	{
		private readonly IUserRepository repository;
		private readonly IUnitOfWork unitOfWork;

		public UsersController(IUserRepository repository, IUnitOfWork unitOfWork)
		{
			this.unitOfWork = unitOfWork;
			this.repository = repository;
		}

      [Authorize(Policy = "Admin")]
		[HttpPost()]
		public async Task<IActionResult> CreateUser([FromBody] User user)
		{
			if (!ModelState.IsValid)
				return BadRequest(ModelState);

			repository.Add(user);
			await unitOfWork.CompleteAsync();

			// user = await repository.GetUser(user.Id);

			return Ok(user);
		}

		[HttpPut("{id}")]
		public async Task<IActionResult> UpdateUser(int id, [FromBody] User user)
		{
			if (!ModelState.IsValid)
				return BadRequest(ModelState);
			if (id!=user.Id)
				return BadRequest();

			var dbUser = await repository.GetUser(id);
			if (dbUser == null)
				return NotFound();
			
			repository.Update(user);
			await unitOfWork.CompleteAsync();

			// user = await repository.GetUser(user.Id);

			return Ok(user);
		}

      [Authorize(Policy = "Admin")]
		[HttpGet()]
		public async Task<IActionResult> GetUsers()
		{
			var users = await repository.GetUsers();
			return Ok(users);
		}

		[HttpGet("{id}")]
		public async Task<IActionResult> GetUser(int id)
		{
			var user = await repository.GetUser(id);
			if (user == null)
			{
				return NotFound();
			}

			return Ok(user);
		}
      
      [Authorize(Policy = "Admin")]
		[HttpDelete("{id}")]
		public async Task<IActionResult> DeleteUser(int id)
		{
			var user = await repository.GetUser(id);

			if (user == null)
				return NotFound();

			repository.Remove(user);

			await unitOfWork.CompleteAsync();

			return Ok(id);
		}
	}
}