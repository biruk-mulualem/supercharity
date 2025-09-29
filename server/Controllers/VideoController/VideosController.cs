using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using server.Data;
using server.Models;

namespace server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VideosController : ControllerBase
    {
        private readonly AppDbContext _context;

        public VideosController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/Videos
        [HttpGet]
        public async Task<ActionResult<IEnumerable<VideoModel>>> GetVideos()
        {
            return await _context.Videos.ToListAsync();
        }

        // GET: api/Videos/5
        [HttpGet("{id}")]
        public async Task<ActionResult<VideoModel>> GetVideo(int id)
        {
            var video = await _context.Videos.FindAsync(id);

            if (video == null)
                return NotFound();

            return video;
        }

        // POST: api/Videos
        [HttpPost]
        public async Task<ActionResult<VideoModel>> CreateVideo(VideoModel video)
        {
            _context.Videos.Add(video);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetVideo), new { id = video.Id }, video);
        }

        // PUT: api/Videos/5
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateVideo(int id, VideoModel video)
        {
            if (id != video.Id)
                return BadRequest();

            _context.Entry(video).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!_context.Videos.Any(e => e.Id == id))
                    return NotFound();
                else
                    throw;
            }

            return NoContent();
        }

        // DELETE: api/Videos/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteVideo(int id)
        {
            var video = await _context.Videos.FindAsync(id);
            if (video == null)
                return NotFound();

            _context.Videos.Remove(video);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}
