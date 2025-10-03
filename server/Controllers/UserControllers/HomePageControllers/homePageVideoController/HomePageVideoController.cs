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
    public class HomePageVideoController : ControllerBase
    {
        private readonly AppDbContext _context;

        public HomePageVideoController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/HomePageVideo
        [HttpGet]
        public async Task<ActionResult<IEnumerable<VideoModel>>> GetLatestVideos()
        {
            var videos = await _context.Videos
                .OrderByDescending(v => v.Date)
                .Take(4)
                .ToListAsync();

            return Ok(videos);
        }
    }
}
