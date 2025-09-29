var builder = WebApplication.CreateBuilder(args);

// Add services to the container
builder.Services.AddControllers();      // Use controllers for your API
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();       // Optional: can be removed in production

var app = builder.Build();

// Configure the HTTP request pipeline
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseAuthorization();

// Listen on Render-assigned port
var port = Environment.GetEnvironmentVariable("PORT") ?? "5000";
app.Urls.Add($"http://*:{port}");

// Map controllers
app.MapControllers();

app.Run();
