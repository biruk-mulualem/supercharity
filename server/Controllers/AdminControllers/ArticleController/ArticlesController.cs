using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using server.Data;
using server.Models;

namespace server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ArticlesController : ControllerBase
    {
        private readonly AppDbContext _context;

        public ArticlesController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/Articles
     [HttpGet]
public async Task<ActionResult<IEnumerable<ArticleModel>>> GetArticles()
{
    return await _context.Articles
        .OrderByDescending(a => a.Date)   // ✅ Sort newest → oldest
        .ToListAsync();
}

        // GET: api/Articles/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ArticleModel>> GetArticle(int id)
        {
            var article = await _context.Articles.FindAsync(id);

            if (article == null)
                return NotFound();

            return article;
        }

        // POST: api/Articles
        [HttpPost]
        public async Task<ActionResult<ArticleModel>> CreateArticle(ArticleModel article)
        {
            _context.Articles.Add(article);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetArticle), new { id = article.Id }, article);
        }

        // PUT: api/Articles/5
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateArticle(int id, ArticleModel article)
        {
            if (id != article.Id)
                return BadRequest();

            _context.Entry(article).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!_context.Articles.Any(e => e.Id == id))
                    return NotFound();
                else
                    throw;
            }

            return NoContent();
        }

        // DELETE: api/Articles/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteArticle(int id)
        {
            var article = await _context.Articles.FindAsync(id);
            if (article == null)
                return NotFound();

            _context.Articles.Remove(article);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}
