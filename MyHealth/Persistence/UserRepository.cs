using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using MyHealth.Core;
using MyHealth.Core.Models;

namespace MyHealth.Persistence
{
	public class UserRepository : IUserRepository
	{
		private readonly MyHealthDbContext context;

		public UserRepository(MyHealthDbContext context)
		{
			this.context = context;
		}

		public async Task<User> GetUser(int id)
		{
			return await context.Users.FindAsync(id);
		}

		public async Task<IEnumerable<User>> GetUsers()
		{
			return await context.Users.ToListAsync();
		}

		public void Add(User user) {
			context.Users.Add(user);
		}

		public void Update(User user) {
			var oldUser = context.Users.Find(user.Id);
			context.Entry(oldUser).CurrentValues.SetValues(user);
			// context.Users.Update(user);
		}

		public void Remove(User user) {
			context.Remove(user);
		}
	}
}