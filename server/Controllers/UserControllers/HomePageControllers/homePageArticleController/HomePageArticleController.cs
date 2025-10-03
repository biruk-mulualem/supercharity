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
    public class HomePageArticleController : ControllerBase
     
    {
        private readonly AppDbContext _context;

        public HomePageArticleController(AppDbContext context)
        {
            _context = context;
        }

        // GET: 
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ArticleModel>>> GetLatestArticles()
        {
            return await _context.Articles
                .OrderByDescending(a => a.Date)
                .Take(4)
                .ToListAsync();
        }
    }
}
