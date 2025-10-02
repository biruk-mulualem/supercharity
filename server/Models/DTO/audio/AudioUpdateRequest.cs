using Microsoft.AspNetCore.Http;
using System.ComponentModel.DataAnnotations;

public class AudioUpdateRequest
{
    [Required]
    public string Title { get; set; } = string.Empty;

    [Required]
    public DateOnly Date { get; set; }

    // Optional: only needed if replacing audio file
    public IFormFile? AudioFile { get; set; }
}
