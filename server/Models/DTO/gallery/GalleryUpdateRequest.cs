public class GalleryUpdateRequest
{
    public IFormFile? ImageFile { get; set; }  // Optional new image file
    public string Title { get; set; }
    public string Description { get; set; }
    public string Category { get; set; }
    public DateOnly Date { get; set; }
}