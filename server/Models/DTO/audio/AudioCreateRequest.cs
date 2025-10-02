using Microsoft.AspNetCore.Http;
using System.ComponentModel.DataAnnotations;

public class AudioCreateRequest
{
    [Required]
    public string Title { get; set; } = string.Empty;

    [Required]
    public DateOnly Date { get; set; }

    [Required]
    public IFormFile AudioFile { get; set; } = null!;
}
