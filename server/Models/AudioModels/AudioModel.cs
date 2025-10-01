using System;

namespace server.Models
{
    public class AudioModel
    {
        public int Id { get; set; }        // Primary key

        public string? Title { get; set; } // Nullable title

        // Store audio file path, URL, or base64 string
        public string? AudioUrl { get; set; } // Nullable audio content

          public DateOnly? Date { get; set; }  
    }
}
