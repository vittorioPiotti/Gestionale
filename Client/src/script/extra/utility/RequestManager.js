import { useState } from "react";
import axios from "axios";

/**
 * Definizione del gestore delle richieste
 * @returns {Object} - Un oggetto che contiene:
 *   - data:           Dati della richiesta, utilizzati come corpo della richiesta
 *   - setData:        Funzione per impostare i dati della richiesta
 *   - sendRequest:    Funzione per inviare una richiesta POST al server
 *   - sendRequestGet: Funzione per inviare una richiesta GET al server
 *   - response:       Risposta della richiesta inviata al server
 */
const RequestManager = () => {
  const [data, setData] = useState("");
  const [response, setResponse] = useState("");

  // Prende i valori env che si trovano Client2\client\.env e li assegna alle costanti
  const serverHost = process.env.REACT_APP_SERVER_HOST || "localhost";
  const serverPort = process.env.REACT_APP_SERVER_PORT || 8080;

  /**
   * Funzione per inviare una richiesta POST al server
   * @use Chiamare questa funzione per inviare una richiesta POST al server
   * @params {string} apiPath - Il percorso API a cui inviare la richiesta
   * @returns {void}
   */
  const sendRequest = async (apiPath) => {
    try {
      const serverResponse = await axios.post(
        `http://192.168.250.86:${serverPort}${apiPath}`,
        data
      );
      setResponse(serverResponse);
    } catch (error) {
      setResponse(error.response);
    }
  };

  /**
   * Funzione per inviare una richiesta GET al server
   * @use Chiamare questa funzione per inviare una richiesta GET al server
   * @params {string} apiPath - Il percorso API a cui inviare la richiesta
   * @returns {void}
   */
  const sendRequestGet = async (apiPath) => {
    try {
      const serverResponse = await axios.get(
        `${serverHost}:${serverPort}${apiPath}`,
        data
      );
      setResponse(serverResponse);
    } catch (error) {
      setResponse(error.response);
    }
  };

  return {
    data,
    setData,
    sendRequest,
    sendRequestGet,
    response,
  };
};

export default RequestManager;
