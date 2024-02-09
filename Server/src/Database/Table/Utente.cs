using System.ComponentModel.DataAnnotations;

namespace Intro {
    /// <summary>
    /// Classe rappresentante un Utente nel DB.
    /// </summary>
    public class Utente {
        public int? UtenteId { get; set; }
        // 'required' è un attributo di validazione per indicare che il campo non può essere nullo
        public required string Username { get; set; }
        public required string HashedPassword { get; set; }
    }
}
