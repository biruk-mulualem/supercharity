using System;

namespace server.Models
{
    public class VideoModel
    {
        public int Id { get; set; }            // Primary key

        // Video file path, URL, or base64 string
        public string? VideoUrl { get; set; }

        public string? Description { get; set; }  // Nullable description
        public string? Category { get; set; }     // Nullable category
          public DateOnly? Date { get; set; }  
    }
}
