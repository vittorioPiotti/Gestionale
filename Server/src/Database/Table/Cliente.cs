using System.ComponentModel.DataAnnotations;

namespace Intro {
    /// <summary>
    /// Classe rappresentante un cliente nel DB.
    /// </summary>
    public class Cliente {
        
        // 'Key' indica che il campo è la chiave primaria
        [Key]
        public required string codiceFiscale { get; set; }
        public required string alias { get; set; }
        public required string ragioneSociale { get; set; }
        public required string partitaIVA { get; set; }
        public required string pec { get; set; }
        public required string indirizzo { get; set; }
        public required string citta { get; set; }
        public required string stato { get; set; }
        public required string email { get; set; }
        public required string telefono { get; set; }
    }
}
