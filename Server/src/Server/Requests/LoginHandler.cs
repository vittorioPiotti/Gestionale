using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using System;
using System.Threading.Tasks;

namespace Intro { /// <summary>
    /// Classe che gestisce la richiesta di login ("/login").
    /// </summary>
    internal static class LoginHandler
    {
        /// <summary>
        /// Gestisce la richiesta di login e restituisce il codice di stato HTTP appropriato.
        /// </summary>
        /// <param name="context">Contesto della richiesta HTTP.</param>
        public static async Task Handle(HttpContext context) {
            // Implementa la logica per la route "/login"
            var loginData = await context.Request.ReadFromJsonAsync<Utente>();// legge i dati dal JSON inviato dal Client e li assegna ad una oggetto con la classe Login

            if (!string.IsNullOrEmpty(loginData?.Username) && !string.IsNullOrEmpty(loginData.HashedPassword)) {
                try  {
                    // Utilizza Entity Framework per verificare l'esistenza dell'utente e confrontare la password
                    using (var dbContext = new PCTO_Atelier()) {
                        var utente = await dbContext.Utente.FirstOrDefaultAsync(a => a.Username == loginData.Username);// controllare se l'utente esiste
                        if (utente != null) {
                            if (utente.HashedPassword == loginData.HashedPassword) { // controllare se la password è giusta
                                context.Response.StatusCode = 200; // Credenziali corrette, impostazione del codice di stato HTTP 200 (OK)
                                var selectedUserData = new  { // Creazione del JSON per la cache dei dati
                                    exitStatus = "true",
                                };
                                await context.Response.WriteAsJsonAsync(selectedUserData); //invia il JSON al Client
                            } else {
                                context.Response.StatusCode = 405; // Risposta in caso la password non è corretta
                            }
                        } else {
                            context.Response.StatusCode = 409;// Risposta in caso l'utente non esiste
                        }
                    }
                }
                catch (Exception ex) {
                    Console.Error.WriteLine($"Error during login: {ex.Message}");
                    while (ex.InnerException != null) {
                        ex = ex.InnerException;
                        Console.Error.WriteLine($"Inner Exception: {ex.Message}");
                    }
                    context.Response.StatusCode = 500;
                }
            } else {
                context.Response.StatusCode = 400;
            }
        }
    }
}
