using Core.API.Models;
using Microsoft.EntityFrameworkCore;

namespace Core.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<User> Values { get; set; }
    }
}