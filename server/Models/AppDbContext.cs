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
        public DbSet<UserModel> Users { get; set; }
          
           protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Ensure username is unique
            modelBuilder.Entity<UserModel>()
                .HasIndex(u => u.username)
                .IsUnique();

            base.OnModelCreating(modelBuilder);
        }
    }
}
