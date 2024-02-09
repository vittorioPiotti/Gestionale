import { useEffect, useState, useRef } from "react";
import RequestManager from "../../extra/utility/RequestManager";
import WindowLoader from "../../extra/utility/WindowLoader";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Form } from "antd";

/**
 * Gestisce lo stato e le funzioni necessarie per la registrazione di un cliente
 * @returns {Object} - Un oggetto che contiene:
 *   - data:              Dati del form di registrazione
 *   - setData:           Funzione per impostare i dati del form di registrazione
 *   - onFinish:          Funzione chiamata quando il form di registrazione è completato
 *   - filledFields:      Numero di campi compilati nel form di registrazione
 *   - handleFieldChange: Funzione per gestire il cambio di valore di un campo del form di registrazione
 *   - showContent:       Stato che indica se il contenuto della finestra è in fase di caricamento o meno
 */
const RegistraClienteManager = () => {
  // Inizializzazione dei gestori di richiesta e di caricamento della finestra
  const [filledFields, setFilledFields] = useState(0); // Stato per contare i campi compilati del form di registrazione
  const requestManager = RequestManager(); // Inizializzazione del gestore delle richieste
  const windowLoader = WindowLoader();
  const toastId = useRef(null);
  const navigate = useNavigate(); // Utilizzo del hook di navigazione
  const user = localStorage.getItem("user"); // Controlla se l'utente è autenticato, altrimenti lo reindirizza alla pagina di login

  /**
   * @use Gestisce il cambio di valore di un campo del form di registrazione
   * @params {string} fieldName - Il nome del campo del form
   * @params {string} value - Il valore del campo del form
   * @returns {void}
   */
  const handleFieldChange = (fieldName, value) => {
    requestManager.setData((prevData) => {
      const newData = { ...prevData, [fieldName]: value };
      const filledCount = Object.values(newData).filter(
        (val) => val !== ""
      ).length;
      setFilledFields(filledCount);
      return newData;
    });
  };

  /**
   * @use Invia la richiesta di registrazione al server quando il form è completato
   * @returns {void}
   */
  const onFinish = () => {
    toastId.current = toast.loading("Please wait...");
    requestManager.sendRequest("/registraCliente");
  };

  /**
   * Metodo per gestire l'emissione di notifiche Toast in base al codice di stato ricevuto.
   *
   * @param code Il codice di stato da utilizzare per determinare il tipo di notifica Toast da visualizzare.
   *             I valori comuni includono:
   *             - 200 per indicare che il cliente è stato registrato correttamente.
   *             - 404 per indicare l'impossibilità di accedere al server.
   *             - 409 per indicare che il codice fiscale è già in uso.
   *             - 500 per indicare un errore nel server.
   *             - 0 per indicare un tentativo di registrazione fallito.
   */
  const runToast = (code) => {
    switch (code) {
      case 200:
        toast.update(toastId.current, {
          render: "Cliente registrato correttamente",
          autoClose: 1000,
          type: "success",
          isLoading: false,
        });
        break;
      case 404:
        toast.update(toastId.current, {
          render: "Impossibile accedere al server",
          autoClose: 1000,
          type: "error",
          isLoading: false,
        });
        break;
      case 409:
        toast.update(toastId.current, {
          render: "Codice Fiscale già in uso",
          autoClose: 1000,
          type: "error",
          isLoading: false,
        });
        break;
      case 500:
        toast.update(toastId.current, {
          render: "Errore nel Server",
          autoClose: 1000,
          type: "error",
          isLoading: false,
        });
        break;
      case 0:
        toast.update(toastId.current, {
          render: "Tentativo di registrazione fallito",
          autoClose: 1000,
          type: "error",
          isLoading: false,
        });
        break;
      default:
        break;
    }
  };

  // Effetto collaterale che gestisce la risposta alla richiesta di registrazione di un cliente
  useEffect(() => {
    // Verifica se l'utente è autenticato
    if (!user) {
      navigate("/"); //altrimenti lo reindirizza alla pagina di login
    } else {
      const jsonData = requestManager.response; // Ottiene la risposta dalla richiesta di registrazione

      if (jsonData && typeof jsonData === "object") {
        // Controlla se la risposta è un oggetto
        const exitStatus = jsonData.status; // Estrae lo stato di uscita dalla risposta
        // Gestisce le diverse casistiche dello stato di uscita
        if (exitStatus === 200) {
          runToast(200); // Notifica di successo se lo stato è 200
          window.location.reload();
        }
        if (jsonData.status === 404) {
          runToast(404) // Notifica di errore se lo stato è 404
        } else if (jsonData.status === 409) {
          runToast(409) // Notifica di errore se lo stato è 409
        } else if (jsonData.status === 500) {
          runToast(500) // Notifica di errore se lo stato è 500
        } else if (jsonData.status === undefined) {
          runToast(0)// Notifica di errore se lo stato è undefined
        }
      }
    }
  }, [requestManager.response, user]);

  // Restituisce un oggetto contenente gli elementi necessari al componente chiamante
  return {
    data: requestManager.data, //  Dati del form di registrazione
    setData: requestManager.setData, //  Funzione per impostare i dati del form di registrazione
    onFinish: onFinish, //  Funzione chiamata quando il form di registrazione è completato
    filledFields: filledFields, //  Numero di campi compilati nel form di registrazione
    handleFieldChange: handleFieldChange, //  Funzione per gestire il cambio di valore di un campo del form di registrazione
    showContent: windowLoader.showContent, // Stato che indica se il contenuto della finestra è in fase di caricamento o meno
  };
};

export default RegistraClienteManager;
