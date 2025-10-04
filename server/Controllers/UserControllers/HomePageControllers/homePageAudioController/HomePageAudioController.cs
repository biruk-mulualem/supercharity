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
    public class HomePageAudioController : ControllerBase
    {
        private readonly AppDbContext _context;

        public HomePageAudioController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/HomePageAudio
        [HttpGet]
        public async Task<ActionResult<IEnumerable<AudioModel>>> GetLatestAudios()
        {
            return await _context.Audios
                .OrderByDescending(a => a.Date)
                .Take(5)
                .ToListAsync();
        }
    }
}
