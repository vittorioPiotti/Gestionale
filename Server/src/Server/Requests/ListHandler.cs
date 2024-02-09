using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using System;
using System.Threading.Tasks;

namespace Intro
{
    /// <summary>
    /// Classe che gestisce la richiesta di elenco clienti ("/list").
    /// </summary>
    internal static class ListHandler
    {
        /// <summary>
        /// Gestisce la richiesta di elenco clienti e restituisce i dati in formato JSON.
        /// </summary>
        /// <param name="context">Contesto della richiesta HTTP.</param>
        public static async Task Handle(HttpContext context)
        {
            try
            {
                // Utilizza Entity Framework per ottenere la lista di clienti dal database
                using (var db = new PCTO_Atelier())
                {
                    var users = db.Cliente.Select(Cliente => new // La riga seguente esegue una query di selezione sulla tabella Cliente del database
                    {
                        Cliente.ragioneSociale,
                        Cliente.alias,
                        Cliente.codiceFiscale,
                        Cliente.partitaIVA,
                        Cliente.pec,
                        Cliente.indirizzo,
                        Cliente.citta,
                        Cliente.stato,
                        Cliente.email,
                        Cliente.telefono,
                    }).ToList(); // E il risultato della query viene inizializzato come una List

                    // Crea un oggetto JSON con l'array di clienti
                    var responseObject = new
                    {
                        Users = users
                    };

                    // Invia la risposta JSON al client
                    await context.Response.WriteAsJsonAsync(responseObject);
                }
            }
            catch (Exception ex)
            {
                // Gestione degli errori e impostazione del codice di stato HTTP 500 in caso di errore interno
                Console.Error.WriteLine($"Error inserting into the database: {ex.Message}");
                while (ex.InnerException != null)
                {
                    ex = ex.InnerException;
                    Console.Error.WriteLine($"Inner Exception: {ex.Message}");
                }
                context.Response.StatusCode = 500;
            }
        }
    }
}
