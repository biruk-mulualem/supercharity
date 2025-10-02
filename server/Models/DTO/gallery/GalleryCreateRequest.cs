public class GalleryCreateRequest
{
    public IFormFile ImageFile { get; set; }  // Required image file
    public string Title { get; set; }
    public string Description { get; set; }
    public string Category { get; set; }
    public DateOnly Date { get; set; }
}