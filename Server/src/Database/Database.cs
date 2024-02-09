using Microsoft.EntityFrameworkCore;

namespace Intro {
    /// <summary>
    /// Classe principale per il contesto del database, estende DbContext.
    /// </summary>
    public class PCTO_Atelier : DbContext  {
        // DbSet rappresenta una tabella nel database
        public DbSet<Utente> Utente { get; set; }
        public DbSet<Cliente> Cliente { get; set; }

        /// <summary>
        /// Configurazione del contesto del database.
        /// </summary>
        /// <param name="optionsBuilder">Opzioni per la configurazione del contesto del database.</param>
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder) {
            // Recupera le informazioni di connessione dal sistema
            var username = Environment.GetEnvironmentVariable("USERNAME");
            var password = Environment.GetEnvironmentVariable("PASSWORD");
            var server_ip = Environment.GetEnvironmentVariable("DB_IP");
            var database = Environment.GetEnvironmentVariable("DB_NAME"); 
            // Specifica la connessione al database SQL Server
            optionsBuilder.UseSqlServer($"Data Source={server_ip};Initial Catalog={database};User ID={username};Password={password};TrustServerCertificate=true");
        }
    }
}
