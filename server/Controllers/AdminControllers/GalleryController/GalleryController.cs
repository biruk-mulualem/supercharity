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
public async Task<ActionResult<GalleryModel>> CreateGallery([FromForm] GalleryCreateRequest request)
{
    if (request == null)
        return BadRequest(new { message = "Gallery data is required." });

    if (request.ImageFile == null || request.ImageFile.Length == 0)
        return BadRequest(new { message = "Image file is required." });

    var extension = Path.GetExtension(request.ImageFile.FileName).ToLower();
    if (extension != ".webp")
        return BadRequest(new { message = "Only .webp files are supported." });

    var uniqueFileName = $"{Guid.NewGuid()}{extension}";
    var uploadsFolder = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "uploads", "images");

    if (!Directory.Exists(uploadsFolder))
        Directory.CreateDirectory(uploadsFolder);

    var filePath = Path.Combine(uploadsFolder, uniqueFileName);

    using (var stream = new FileStream(filePath, FileMode.Create))
    {
        await request.ImageFile.CopyToAsync(stream);
    }

    var gallery = new GalleryModel
    {
        Title = request.Title,
        Description = request.Description,
        Category = request.Category,
        Date = request.Date,
        imageUrl = $"/uploads/images/{uniqueFileName}"
    };

    _context.Galleries.Add(gallery);
    await _context.SaveChangesAsync();

    return CreatedAtAction(nameof(GetGallery), new { id = gallery.Id }, gallery);
}



        // PUT: api/Galleries/5
[HttpPut("{id}")]
public async Task<IActionResult> UpdateGallery(int id, [FromForm] GalleryUpdateRequest request)
{
    var existingGallery = await _context.Galleries.FindAsync(id);
    if (existingGallery == null)
        return NotFound(new { message = $"Gallery with Id {id} not found." });

    // Update metadata
    existingGallery.Title = request.Title;
    existingGallery.Description = request.Description;
    existingGallery.Category = request.Category;
    existingGallery.Date = request.Date;

    // If new image is uploaded
    if (request.ImageFile != null && request.ImageFile.Length > 0)
    {
        var extension = Path.GetExtension(request.ImageFile.FileName).ToLower();
        if (extension != ".webp")
            return BadRequest(new { message = "Only .webp files are supported." });

        // Delete old image
        if (!string.IsNullOrEmpty(existingGallery.imageUrl))
        {
            var oldImagePath = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", existingGallery.imageUrl.TrimStart('/').Replace('/', Path.DirectorySeparatorChar));
            if (System.IO.File.Exists(oldImagePath))
            {
                System.IO.File.Delete(oldImagePath);
            }
        }

        // Save new image
        var uniqueFileName = $"{Guid.NewGuid()}{extension}";
        var uploadsFolder = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "uploads", "images");

        if (!Directory.Exists(uploadsFolder))
            Directory.CreateDirectory(uploadsFolder);

        var newFilePath = Path.Combine(uploadsFolder, uniqueFileName);
        using (var stream = new FileStream(newFilePath, FileMode.Create))
        {
            await request.ImageFile.CopyToAsync(stream);
        }

        existingGallery.imageUrl = $"/uploads/images/{uniqueFileName}";
    }

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
   
   // DELETE: api/Galleries/5
[HttpDelete("{id}")]
public async Task<IActionResult> DeleteGallery(int id)
{
    var gallery = await _context.Galleries.FindAsync(id);
    if (gallery == null)
        return NotFound(new { message = $"Gallery with Id {id} not found." });

    // Delete the physical image file if it exists
    if (!string.IsNullOrEmpty(gallery.imageUrl))
    {
        var imagePath = Path.Combine(
            Directory.GetCurrentDirectory(), 
            "wwwroot", 
            gallery.imageUrl.TrimStart('/').Replace('/', Path.DirectorySeparatorChar)
        );

        if (System.IO.File.Exists(imagePath))
        {
            try
            {
                System.IO.File.Delete(imagePath);
            }
            catch (Exception ex)
            {
                // Log the error here (depending on your logging setup)
                // But do NOT block deleting the DB entry due to file issues
                Console.Error.WriteLine($"Failed to delete image file: {ex.Message}");
            }
        }
    }

    // Remove the gallery record from database
    _context.Galleries.Remove(gallery);
    await _context.SaveChangesAsync();

    return NoContent();
}

}

    }

