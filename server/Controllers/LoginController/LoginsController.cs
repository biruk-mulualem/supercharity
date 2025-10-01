using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using server.Data;
using server.Models;

namespace server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginsController : ControllerBase
    {
        private readonly AppDbContext _context;
        public LoginsController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/Logins/by-username/{username}
        [HttpGet("by-username/{username}")]
        public async Task<IActionResult> GetUserByUsername(string username)
        {
            if (string.IsNullOrWhiteSpace(username))
                return BadRequest("Username is required.");

            var user = await _context.Users
                .AsNoTracking()
                .FirstOrDefaultAsync(u => u.username == username);

            if (user == null)
                return NotFound("User not found.");

            // For security, do NOT send password in production!
            // Here we send it just for your demo.
            return Ok(new 
            {
                user.Id,
                user.fullname,
                user.username,
                user.password,
                user.RegistedDate
            });
        }
    }
}
