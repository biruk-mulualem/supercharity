using Microsoft.EntityFrameworkCore;
using server.Data; // adjust namespace if needed

var builder = WebApplication.CreateBuilder(args);

// Add services to the container
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// ===== Add DbContext =====
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseMySql(
        builder.Configuration.GetConnectionString("DefaultConnection"),
        ServerVersion.AutoDetect(builder.Configuration.GetConnectionString("DefaultConnection"))
    )
);
// ===== Enable CORS for Angular frontend =====
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAngular", policy =>
    {
        policy.WithOrigins("http://localhost:4200") // Angular dev server
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});
var app = builder.Build();
// Configure the HTTP request pipeline
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
// Use HTTPS redirection in production
if (!app.Environment.IsDevelopment())
{
    app.UseHttpsRedirection();
}
// Use CORS
app.UseCors("AllowAngular");
app.UseStaticFiles();
app.UseAuthorization();
// Listen on the port provided by the environment (Render, Azure, etc.)
var port = Environment.GetEnvironmentVariable("PORT") ?? "5000";
app.Urls.Add($"http://0.0.0.0:{port}");
// Map controllers (your API endpoints will go here)
app.MapControllers();
app.Use(async (context, next) =>
{
    await next();
    // If the request results in a 404 and
    // - the path doesn't have a file extension (i.e. it's not a static file)
    // - and the path doesn't start with /api
    if (context.Response.StatusCode == 404 &&
        !Path.HasExtension(context.Request.Path.Value) &&
        !context.Request.Path.Value.StartsWith("/api"))
    {
        // Re-execute the request pipeline with the path set to index.html
        context.Request.Path = "/index.html";
        context.Response.StatusCode = 200; // OK
        await next();
    }
});
app.Run();
