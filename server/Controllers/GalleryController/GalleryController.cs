using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using server.Data;
using server.Models;

namespace server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GalleriesController : ControllerBase
    {
        private readonly AppDbContext _context;

        public GalleriesController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/Galleries
        [HttpGet]
        public async Task<ActionResult<IEnumerable<GalleryModel>>> GetGalleries()
        {
            // Return all galleries, sorted by Date ascending
            var galleries = await _context.Galleries
                .OrderByDescending(g => g.Date)
                .ToListAsync();

            return Ok(galleries);
        }

        // GET: api/Galleries/5
        [HttpGet("{id}")]
        public async Task<ActionResult<GalleryModel>> GetGallery(int id)
        {
            var gallery = await _context.Galleries.FindAsync(id);

            if (gallery == null)
                return NotFound(new { message = $"Gallery with Id {id} not found." });

            return Ok(gallery);
        }

        // POST: api/Galleries
        [HttpPost]
        public async Task<ActionResult<GalleryModel>> CreateGallery([FromBody] GalleryModel gallery)
        {
            if (gallery == null)
                return BadRequest(new { message = "Gallery data is required." });

            _context.Galleries.Add(gallery);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetGallery), new { id = gallery.Id }, gallery);
        }

        // PUT: api/Galleries/5
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateGallery(int id, [FromBody] GalleryModel gallery)
        {
            if (gallery == null || id != gallery.Id)
                return BadRequest(new { message = "Invalid gallery data or ID mismatch." });

            var existingGallery = await _context.Galleries.FindAsync(id);
            if (existingGallery == null)
                return NotFound(new { message = $"Gallery with Id {id} not found." });

            // Update fields
            existingGallery.Title = gallery.Title;
            existingGallery.Description = gallery.Description;
            existingGallery.Category = gallery.Category;
            existingGallery.imageUrl = gallery.imageUrl;
            existingGallery.Date = gallery.Date;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                return StatusCode(500, new { message = "Failed to update the gallery due to a concurrency issue." });
            }

            return NoContent();
        }

        // DELETE: api/Galleries/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteGallery(int id)
        {
            var gallery = await _context.Galleries.FindAsync(id);
            if (gallery == null)
                return NotFound(new { message = $"Gallery with Id {id} not found." });

            _context.Galleries.Remove(gallery);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}
