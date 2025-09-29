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
            return await _context.Galleries.ToListAsync();
        }

        // GET: api/Galleries/5
        [HttpGet("{id}")]
        public async Task<ActionResult<GalleryModel>> GetGallery(int id)
        {
            var gallery = await _context.Galleries.FindAsync(id);

            if (gallery == null)
                return NotFound();

            return gallery;
        }

        // POST: api/Galleries
        [HttpPost]
        public async Task<ActionResult<GalleryModel>> CreateGallery(GalleryModel gallery)
        {
            _context.Galleries.Add(gallery);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetGallery), new { id = gallery.Id }, gallery);
        }

        // PUT: api/Galleries/5
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateGallery(int id, GalleryModel gallery)
        {
            if (id != gallery.Id)
                return BadRequest();

            _context.Entry(gallery).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!_context.Galleries.Any(e => e.Id == id))
                    return NotFound();
                else
                    throw;
            }

            return NoContent();
        }

        // DELETE: api/Galleries/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteGallery(int id)
        {
            var gallery = await _context.Galleries.FindAsync(id);
            if (gallery == null)
                return NotFound();

            _context.Galleries.Remove(gallery);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}
