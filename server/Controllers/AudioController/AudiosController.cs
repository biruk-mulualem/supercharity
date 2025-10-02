using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using server.Data;
using server.Models;
using System.IO;

namespace server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AudiosController : ControllerBase
    {
        private readonly AppDbContext _context;

        public AudiosController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/Audios
        [HttpGet]
        public async Task<ActionResult<IEnumerable<AudioModel>>> GetAudios()
        {
            return await _context.Audios.ToListAsync();
        }

        // GET: api/Audios/5
        [HttpGet("{id}")]
        public async Task<ActionResult<AudioModel>> GetAudio(int id)
        {
            var audio = await _context.Audios.FindAsync(id);
            if (audio == null)
                return NotFound(new { message = $"Audio with Id {id} not found." });

            return Ok(audio);
        }

        // POST: api/Audios
        [HttpPost]
        public async Task<ActionResult<AudioModel>> CreateAudio([FromForm] AudioCreateRequest request)
        {
            if (request == null)
                return BadRequest(new { message = "Audio data is required." });

            if (request.AudioFile == null || request.AudioFile.Length == 0)
                return BadRequest(new { message = "Audio file is required." });

            var allowedExtensions = new[] { ".mp3", ".wav", ".ogg", ".m4a" };
            var extension = Path.GetExtension(request.AudioFile.FileName).ToLower();

            if (!allowedExtensions.Contains(extension))
                return BadRequest(new { message = $"Unsupported audio format. Allowed: {string.Join(", ", allowedExtensions)}" });

            var uniqueFileName = $"{Guid.NewGuid()}{extension}";
            var uploadsFolder = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "uploads", "audios");

            if (!Directory.Exists(uploadsFolder))
                Directory.CreateDirectory(uploadsFolder);

            var filePath = Path.Combine(uploadsFolder, uniqueFileName);
            using (var stream = new FileStream(filePath, FileMode.Create))
            {
                await request.AudioFile.CopyToAsync(stream);
            }

            var audio = new AudioModel
            {
                Title = request.Title,
                Date = request.Date,
                AudioUrl = $"/uploads/audios/{uniqueFileName}"
            };

            _context.Audios.Add(audio);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetAudio), new { id = audio.Id }, audio);
        }

        // PUT: api/Audios/5
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateAudio(int id, [FromForm] AudioUpdateRequest request)
        {
            var existingAudio = await _context.Audios.FindAsync(id);
            if (existingAudio == null)
                return NotFound(new { message = $"Audio with Id {id} not found." });

            existingAudio.Title = request.Title;
            existingAudio.Date = request.Date;

            if (request.AudioFile != null && request.AudioFile.Length > 0)
            {
                var allowedExtensions = new[] { ".mp3", ".wav", ".ogg", ".m4a" };
                var extension = Path.GetExtension(request.AudioFile.FileName).ToLower();

                if (!allowedExtensions.Contains(extension))
                    return BadRequest(new { message = $"Unsupported audio format. Allowed: {string.Join(", ", allowedExtensions)}" });

                // Delete old audio file
                if (!string.IsNullOrEmpty(existingAudio.AudioUrl))
                {
                    var oldFilePath = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", existingAudio.AudioUrl.TrimStart('/').Replace('/', Path.DirectorySeparatorChar));
                    if (System.IO.File.Exists(oldFilePath))
                    {
                        System.IO.File.Delete(oldFilePath);
                    }
                }

                // Save new audio file
                var uniqueFileName = $"{Guid.NewGuid()}{extension}";
                var uploadsFolder = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "uploads", "audios");

                if (!Directory.Exists(uploadsFolder))
                    Directory.CreateDirectory(uploadsFolder);

                var newFilePath = Path.Combine(uploadsFolder, uniqueFileName);
                using (var stream = new FileStream(newFilePath, FileMode.Create))
                {
                    await request.AudioFile.CopyToAsync(stream);
                }

                existingAudio.AudioUrl = $"/uploads/audios/{uniqueFileName}";
            }

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!_context.Audios.Any(e => e.Id == id))
                    return NotFound();
                else
                    throw;
            }

            return NoContent();
        }

        // DELETE: api/Audios/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAudio(int id)
        {
            var audio = await _context.Audios.FindAsync(id);
            if (audio == null)
                return NotFound(new { message = $"Audio with Id {id} not found." });

            // Delete physical audio file
            if (!string.IsNullOrEmpty(audio.AudioUrl))
            {
                var filePath = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", audio.AudioUrl.TrimStart('/').Replace('/', Path.DirectorySeparatorChar));
                if (System.IO.File.Exists(filePath))
                {
                    try
                    {
                        System.IO.File.Delete(filePath);
                    }
                    catch (Exception ex)
                    {
                        // Log error but don't block deletion
                        Console.Error.WriteLine($"Failed to delete audio file: {ex.Message}");
                    }
                }
            }

            _context.Audios.Remove(audio);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}
