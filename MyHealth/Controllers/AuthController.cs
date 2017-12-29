using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Permissions;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using MyHealth.Core;
using MyHealth.Core.Models;

namespace MyHealth.Controllers
{
	[Route("api/auth")]
	public class AuthController : Controller
	{
		private IConfiguration _config;
		private readonly IUserRepository repository;

		public AuthController(IUserRepository repository, IConfiguration config)
		{
			this.repository = repository;
			_config = config;
		}

		[HttpPost]
		public async Task<IActionResult> RequestToken([FromBody]Login login)
		{
			IActionResult response = Unauthorized();
			var user = await Authenticate(login);

			if (user != null)
			{
				var tokenString = BuildToken(user);
				response = Ok(new { token = tokenString });
			}

			return response;
		}

		private string BuildToken(User user)
		{
			var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]));
			var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
			var claims = new[] {
				new Claim("userId", user.Id.ToString()),
				new Claim("userName", user.FirstName + " " + user.LastName),
				new Claim("userRole", (bool)user.Admin ? "Admin" : "User")
			};

			var token = new JwtSecurityToken(_config["Jwt:Issuer"],
			  _config["Jwt:Issuer"],
			  claims: claims,
			  expires: DateTime.Now.AddMinutes(60),
			  signingCredentials: creds);

			return new JwtSecurityTokenHandler().WriteToken(token);
		}

		private async Task<User> Authenticate(Login login)
		{
			var user = await repository.GetUser(login.Email);
			if (user == null || login.Password != user.FirstName + "." + user.LastName)
				return null;
			else
				return user;
		}

	}
}