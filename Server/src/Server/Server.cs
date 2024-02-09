using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Linq;
using System.Threading.Tasks;

namespace Intro
{
    /// <summary>
    /// Classe che configura e gestisce il server.
    /// </summary>
    internal class Server
    {
        /// <summary>
        /// Configura i servizi dell'applicazione.
        /// </summary>
        /// <param name="services">Collezione dei servizi disponibili.</param>
        public void ConfigureServices(IServiceCollection services)
        {
            // Configura il CORS per consentire le richieste da qualsiasi origine, metodo e header
            services.AddCors(options =>
            {
                options.AddDefaultPolicy(builder =>
                {
                    builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();
                });
            });

            // Aggiunge il supporto per i controller
            services.AddControllers();
        }

        /// <summary>
        /// Configura l'applicazione e l'ambiente di hosting.
        /// </summary>
        /// <param name="app">L'applicazione.</param>
        /// <param name="env">L'ambiente di hosting.</param>
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            // Configurazione specifica per l'ambiente di sviluppo
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            // Abilita il CORS
            app.UseCors();

            // Configurazione del routing e dei percorsi degli endpoint
            app.UseRouting();

            // Configurazione degli endpoint per le diverse operazioni
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapPost("/registraCliente", RegisterHandler.Handle);
                endpoints.MapPost("/autenticaUtente", LoginHandler.Handle);
                endpoints.MapGet("/visualizzaClienti", ListHandler.Handle);
            });
        }
    }
}
