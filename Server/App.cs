using DotNetEnv;
using Microsoft.AspNetCore.Hosting;
using Intro;

namespace App
{
    /// <summary>
    /// Classe principale dell'applicazione.
    /// </summary>
    public class App
    {
        /// <summary>
        /// Metodo principale di avvio dell'applicazione.
        /// </summary>
        /// <param name="args">Argomenti della riga di comando.</param>
        public static void Main(string[] args)
        {
            // Carica le variabili d'ambiente dal file .env
            Env.Load();

            // Ottiene la porta da utilizzare per il server
            var port = Environment.GetEnvironmentVariable("SERVER_PORT") ?? "8080";

            // Configura e avvia il web host
            var host = new WebHostBuilder()
                .UseKestrel()
                .UseUrls($"http://0.0.0.0:{port}")
                .UseStartup<Server>()
                .Build();

            host.Run();
        }
    }
}
