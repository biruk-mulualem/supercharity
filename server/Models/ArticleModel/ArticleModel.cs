using System;
using System.Collections.Generic;

namespace server.Models
{
    public class ArticleModel
    {
        public int Id { get; set; } // Primary key, usually not nullable

        public string? Title { get; set; }        // Nullable
        public string? Description { get; set; }  // Nullable
        public string? Writer { get; set; }       // Nullable
        // If you want multiple tags, you can use a list of strings
        public string? Tag { get; set; }  
         public DateOnly? Date { get; set; }  
    }
}
