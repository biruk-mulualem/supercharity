using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using server.Data;
using server.Models;

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
                return NotFound();

            return audio;
        }

        // POST: api/Audios
        [HttpPost]
        public async Task<ActionResult<AudioModel>> CreateAudio(AudioModel audio)
        {
            _context.Audios.Add(audio);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetAudio), new { id = audio.Id }, audio);
        }

        // PUT: api/Audios/5
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateAudio(int id, AudioModel audio)
        {
            if (id != audio.Id)
                return BadRequest();

            _context.Entry(audio).State = EntityState.Modified;

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
                return NotFound();

            _context.Audios.Remove(audio);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}
