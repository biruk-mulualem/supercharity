using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using server.Data;
using server.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HomePageGalleryController : ControllerBase
    {
        private readonly AppDbContext _context;

        public HomePageGalleryController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/HomePageGallery
        [HttpGet]
        public async Task<ActionResult<IEnumerable<GalleryModel>>> GetLatestGalleryItems()
        {
            return await _context.Galleries
                .OrderByDescending(g => g.Date)
                .Take(7)
                .ToListAsync();
        }
    }
}
