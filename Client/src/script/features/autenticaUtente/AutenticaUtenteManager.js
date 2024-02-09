// Import delle librerie e componenti necessari
import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import SHA3 from "sha3";
import RequestManager from "../../extra/utility/RequestManager";
import WindowLoader from "../../extra/utility/WindowLoader";

/**
 * Definizione del componente AutenticaUtenteManager
 * @returns {Object} - Un oggetto che contiene:
 *   - data:        Proprietà contenente i dati gestiti dal gestore delle richieste
 *   - setData:     Funzione per impostare i dati gestiti dal gestore delle richieste
 *   - onFinish:    Funzione chiamata quando l'autenticazione è completata con successo
 *   - hashMethod:  Funzione per hashare la password utilizzando l'algoritmo SHA3 a 512 bit
 *   - showContent: Funzione per ottenere lo stato di visualizzazione della finestra di caricamento
 */
const AutenticaUtenteManager = () => {
  // Inizializzazione del gestore delle richieste e del loader per la finestra
  const requestManager = RequestManager(); // Inizializzazione del gestore delle richieste
  const windowLoader = WindowLoader();
  const toastId = useRef(null);
  const navigate = useNavigate(); // Utilizzo del hook di navigazione
  const user = localStorage.getItem("user"); // Recupero delle informazioni sull'utente dalla localStorage

  /**
   * @use Funzione chiamata quando l'autenticazione è completata con successo
   * @returns {void}
   */
  const onFinish = () => {
    toastId.current = toast.loading("Please wait...");
    requestManager.sendRequest("/autenticaUtente");
  };

  /**
   * @use Funzione per hashare la password utilizzando l'algoritmo SHA3 a 512 bit
   * @params {string} password - La password da hashare
   * @returns {string|null} - La password hashata o null in caso di errore
   */
  const hashMethod = (password) => {
    try {
      const hash = new SHA3(512);
      hash.update(password);
      return hash.digest("hex");
    } catch (error) {
      console.error("Error: Unable to hash password.");
      return null;
    }
  };

  /**
   * Metodo per gestire l'emissione di notifiche Toast in base al codice di stato ricevuto.
   *
   * @param code Il codice di stato da utilizzare per determinare il tipo di notifica Toast da visualizzare.
   *             I valori comuni includono:
   *             - 200 per rappresentare un'autenticazione riuscita.
   *             - 409 per indicare un account inesistente.
   *             - 405 per segnalare una password non valida.
   *             - 0 per indicare l'impossibilità di accedere al server.
   */
  const runToast = (code) => {
    switch (code) {
      case 200:
        toast.update(toastId.current, {
          render: "Autenticazione riuscita",
          autoClose: 2000,
          type: "success",
          isLoading: false,
        });
        break;
      case 409:
        toast.update(toastId.current, {
          render: "Account inesistente",
          autoClose: 2000,
          type: "error",
          isLoading: false,
        });
        break;
      case 405:
        toast.update(toastId.current, {
          render: "Password non valida",
          autoClose: 2000,
          type: "error",
          isLoading: false,
        });
        break;
      case 0:
        toast.update(toastId.current, {
          render: "Impossibile accedere al server",
          autoClose: 2000,
          type: "error",
          isLoading: false,
        });
        break;
      default:
        break;
    }
  };

  /**
   * @use Funzione per memorizzare le informazioni sull'utente nella localStorage
   * @params {Object} user - L'oggetto contenente le informazioni sull'utente
   * @returns {void}
   */
  const cacheUserLogin = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
  };

  // Effetto per gestire il reindirizzamento in base allo stato dell'utente
  useEffect(() => {
    // Se l'utente è autenticato, reindirizza alla pagina di registrazione cliente
    if (user) {
      navigate("/registraCliente");
    } else {
      const jsonData = requestManager.response;
      if (jsonData) {
        const exitStatus = jsonData.data.exitStatus;
        if (jsonData.status === 200) {
          // Se la risposta è un oggetto con status 200, gestisci l'autenticazione
          runToast(200);
          cacheUserLogin(exitStatus);
          navigate("/registraCliente");
        } // Gestione degli errori in base allo status della risposta
        else if (jsonData.status === 409) {
          runToast(409);
        } else if (jsonData.status === 405) {
          runToast(405);
        } else if (jsonData.status === undefined) {
          runToast(0);
        }
      }
    }
  }, [requestManager.response, navigate]);

  // Restituzione degli elementi necessari al componente chiamante
  return {
    data: requestManager.data, // Proprietà contenente i dati gestiti dal gestore delle richieste
    setData: requestManager.setData, // Funzione per impostare i dati gestiti dal gestore delle richieste
    onFinish: onFinish, // Funzione chiamata quando l'autenticazione è completata con successo
    hashMethod: hashMethod, // Funzione per hashare la password utilizzando l'algoritmo SHA3 a 512 bit
    showContent: windowLoader.showContent, // Funzione per ottenere lo stato di visualizzazione della finestra di caricamento
  };
};

// Esportazione del componente AutenticaUtenteManager
export default AutenticaUtenteManager;
