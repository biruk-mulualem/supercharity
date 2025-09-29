using Microsoft.EntityFrameworkCore;
using server.Models;

namespace server.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) 
            : base(options) 
        { 
        }

        // DbSets for your models
        public DbSet<ArticleModel> Articles { get; set; }
        public DbSet<AudioModel> Audios { get; set; }
        public DbSet<GalleryModel> Galleries { get; set; }
        public DbSet<VideoModel> Videos { get; set; }
    }
}
