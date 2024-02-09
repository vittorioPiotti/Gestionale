// Import delle librerie e componenti necessari
import React from "react";
import AutenticaUtenteView from "./AutenticaUtenteView"; // Import della vista del form di autenticazione utente
import AutenticaUtenteManager from "./AutenticaUtenteManager"; // Import del gestore dell'autenticazione utente

/**
 * Definizione del componente AutenticaUtenteMain.
 * Rappresenta il componente principale per l'autenticazione utente.
 * @returns {JSX.Element} - Elemento React che rappresenta il componente principale per l'autenticazione utente.
 */
const AutenticaUtenteMain = () => {
  // Inizializzazione del gestore dell'autenticazione
  const autenticaUtenteManager = AutenticaUtenteManager();

  // Creazione della vista dell'autenticazione passando le proprietà necessarie
  const autenticaUtenteView = (
    <AutenticaUtenteView
      data={autenticaUtenteManager.data} // Dati gestiti dal gestore delle richieste
      setData={autenticaUtenteManager.setData} // Funzione per impostare i dati gestiti dal gestore delle richieste
      onFinish={autenticaUtenteManager.onFinish} // Funzione chiamata quando il form di autenticazione è inviato
      hashMethod={autenticaUtenteManager.hashMethod} // Funzione per hashare la password
      showContent={autenticaUtenteManager.showContent} // Stato di visualizzazione della finestra di caricamento
    />
  );

  // Restituzione della vista dell'autenticazione
  return autenticaUtenteView;
};

// Esportazione del componente AutenticaUtenteMain
export default AutenticaUtenteMain;
