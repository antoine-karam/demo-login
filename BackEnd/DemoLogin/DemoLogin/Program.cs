using DemoLogin.Domain.Entities;
using DemoLogin.Domain.Services;
using DemoLogin.Infrastructure.Repositories.Base;
using DemoLogin.Services;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using MongoDB.Driver;
using System.Reflection.PortableExecutable;
using System.Text;

public class Program
{
    private static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);

        builder.Services.AddControllers();
        builder.Services.AddEndpointsApiExplorer();
        builder.Services.AddSwaggerGen();
        builder.Services.AddAuthentication(x =>
        {
            x.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
            x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
        }).AddJwtBearer(x =>
        {
            x.RequireHttpsMetadata = false;
            x.SaveToken = true;
            x.TokenValidationParameters = new TokenValidationParameters
            {
                ValidateIssuerSigningKey = true,
                IssuerSigningKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes("DEMO-Secret-my-login-ultra-secure-and-ultra-long-secret")),
                ValidateIssuer = false,
                ValidateAudience = false
            };
        });
        builder.Services.AddCors(options =>
        {
            options.AddPolicy("AllowSpecificOrigin", builder =>
            {
                builder.WithOrigins("http://localhost:3000") // The origin of the React app
                       .AllowAnyHeader()
                       .AllowAnyMethod()
                       .AllowCredentials(); // Allow cookies and other credentials
            });
        });

        // Register the IAuthService with DI
        builder.Services.AddScoped<IAuthService, AuthService>();
        builder.Services.AddScoped<IUserService, UserService>();

        //TODO uncomment to connect to your mongo DB
       // builder.Services.AddSingleton<IMongoClient, MongoClient>(sp =>
       //new MongoClient("Your MongoDB connection string"));

       // builder.Services.AddScoped<IMongoDatabase>(sp =>
       //     sp.GetRequiredService<IMongoClient>().GetDatabase("YourDatabaseName"));

       // builder.Services.AddScoped<IMongoRepository<DemoLogin.Infrastructure.Models.User>, MongoRepository<DemoLogin.Infrastructure.Models.User>>();
       
        var app = builder.Build();

        // Configure the HTTP request pipeline.
        if (app.Environment.IsDevelopment())
        {
            app.UseSwagger();
            app.UseSwaggerUI();
        }

        app.UseHttpsRedirection();

        app.UseAuthorization();

        app.MapControllers();

        app.UseCors("AllowSpecificOrigin");

        app.UseRouting();

        app.Run();
    }
}