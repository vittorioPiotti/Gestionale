// Import delle librerie e componenti necessari
import React from "react";
import RegistraClienteView from "./RegistraClienteView"; // Import della vista per la registrazione cliente
import RegistraClienteManager from "./RegistraClienteManager"; // Import del gestore per la registrazione cliente

/**
 * Componente principale per la registrazione di un cliente.
 *
 * @component
 * @returns {JSX.Element} - Elemento React che rappresenta la vista principale per la registrazione di un cliente.
 */
const RegistraClienteMain = () => {
  // Inizializzazione dei manager e view necessari
  const registraClienteManager = RegistraClienteManager(); // Inizializzazione del gestore per la registrazione cliente
  const registraClienteView = (
    <RegistraClienteView
      data={registraClienteManager.data} // Passaggio dei dati gestiti dal gestore alla vista
      onFinish={registraClienteManager.onFinish} // Passaggio della funzione di completamento registrazione alla vista
      handleFieldChange={registraClienteManager.handleFieldChange} // Passaggio della funzione di gestione cambio valore campo alla vista
      filledFields={registraClienteManager.filledFields} // Passaggio del numero di campi compilati alla vista
      showContent={registraClienteManager.showContent} // Passaggio dello stato di visualizzazione finestra di caricamento alla vista
    />
  );

  // Restituzione della view principale del componente RegistraClienteMain
  return registraClienteView;
};

// Esportazione del componente principale
export default RegistraClienteMain;
