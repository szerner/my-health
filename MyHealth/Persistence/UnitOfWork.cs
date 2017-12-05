using System.Threading.Tasks;
using MyHealth.Core;

namespace MyHealth.Persistence
{
	public class UnitOfWork : IUnitOfWork
	{
		private readonly MyHealthDbContext context;
		public UnitOfWork(MyHealthDbContext context)
		{
			this.context = context;
		}

		public async Task CompleteAsync()
		{
			await context.SaveChangesAsync();
		}
	}
}