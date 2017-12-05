using System.Threading.Tasks;

namespace MyHealth.Core
{
    public interface IUnitOfWork
    {
		Task CompleteAsync();
	}
}