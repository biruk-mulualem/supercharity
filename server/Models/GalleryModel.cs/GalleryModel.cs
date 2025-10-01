using System;

namespace server.Models
{
    public class GalleryModel
    {
        public int Id { get; set; }           // Primary key

        public string? Title { get; set; }        // Nullable title
        public string? Description { get; set; }  // Nullable description
        public string? Category { get; set; }     // Nullable category

        // Store image as path, URL, or base64 string
        public string? imageUrl { get; set; }        // Nullable image

          public DateOnly? Date { get; set; }  
    }
}
