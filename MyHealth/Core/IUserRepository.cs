using System.Collections.Generic;
using System.Threading.Tasks;
using MyHealth.Core.Models;

namespace MyHealth.Core
{
    public interface IUserRepository
    {
		Task<User> GetUser(int id);
		Task<IEnumerable<User>> GetUsers();
		void Add(User user);
		void Update(User user);
		void Remove(User user);
	}
}