using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using System;
using System.Threading.Tasks;

namespace Intro
{
    /// <summary>
    /// Classe che gestisce la richiesta di registrazione cliente ("/register").
    /// </summary>
    internal static class RegisterHandler
    {
        /// <summary>
        /// Gestisce la richiesta di registrazione cliente e restituisce il codice di stato HTTP appropriato.
        /// </summary>
        /// <param name="context">Contesto della richiesta HTTP.</param>
        public static async Task Handle(HttpContext context)
        {
            // Legge i dati di registrazione dal corpo della richiesta JSON
            var registrationData = await context.Request.ReadFromJsonAsync<Cliente>();

            if (registrationData != null)
            {
                try
                {
                    // Utilizza Entity Framework per verificare se l'alias del cliente esiste già
                    using (var db = new PCTO_Atelier()){
                        if (await db.Cliente.AnyAsync(a => a.codiceFiscale == registrationData.codiceFiscale)){
                            context.Response.StatusCode = 409; // codiceFiscale già esistente
                        } else{    // Crea un nuovo oggetto Cliente e lo aggiunge al database
                            var newCliente = new Cliente
                            {
                                ragioneSociale = registrationData.ragioneSociale,
                                codiceFiscale = registrationData.codiceFiscale,
                                partitaIVA = registrationData.partitaIVA,
                                pec = registrationData.pec,
                                email = registrationData.email,
                                indirizzo = registrationData.indirizzo,
                                citta = registrationData.citta,
                                stato = registrationData.stato,
                                telefono = registrationData.telefono,
                                alias = registrationData.alias,
                            };

                            // Imposta il codice di stato HTTP 200 (OK) e salva le modifiche al database
                            context.Response.StatusCode = 200;
                            db.Cliente.Add(newCliente);// Aggiunge l'oggetto NewClient alla tabella Cliente
                            await db.SaveChangesAsync();
                        }
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
            else
            {
                // Dati di registrazione non validi, impostazione del codice di stato HTTP 400 (Bad Request)
                context.Response.StatusCode = 400;
            }
        }
    }
}
