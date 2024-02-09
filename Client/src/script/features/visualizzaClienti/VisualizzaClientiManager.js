// Import delle librerie e componenti necessari
import React, { useState, useRef, useEffect } from "react";
import { SearchOutlined } from "@ant-design/icons";
import RequestManager from "../../extra/utility/RequestManager";
import Highlighter from "react-highlight-words";
import { Button, Input, Space } from "antd";
import WindowLoader from "../../extra/utility/WindowLoader";
import { useNavigate } from "react-router-dom";
import CountUp from "react-countup";
import { toast } from "react-toastify";

/**
* Gestisce lo stato e le funzioni necessarie per la visualizzazione dei clienti e il menu di selezione delle colonne.
* @returns {Object} - Un oggetto che contiene:
*   - handleMenuClick: Funzione per gestire il click sul menu di selezione delle colonne
*   - options: Array di opzioni per il menu di selezione delle colonne
*   - checkedList: Array contenente le chiavi delle colonne selezionate
*   - menuVisible: Booleano che indica se il menu di selezione delle colonne è visibile o meno
*   - handleVisibleChange: Funzione per gestire il cambio di visibilità del menu di selezione delle colonne
*   - menuRef: Riferimento al menu di selezione delle colonne
*   - newColumns: Array di colonne con la proprietà "hidden" aggiornata in base alla selezione
*   - data: Array contenente i dati dei clienti da visualizzare nella tabella
*   - showContent: Booleano che indica se il contenuto della finestra è in fase di caricamento o meno
*   - formatter: Funzione di formattazione per i numeri con animazione di conteggio
*/
const VisualizzaClientiManager = () => {
  // Inizializzazione dello stato per la finestra di caricamento

  const searchInput = useRef(null); // Ref per la ricerca
  const menuRef = useRef(null); // Ref per il menu
  const [loaded, setLoaded] = useState(false); // stato per il caricamento della pagina
  const [data, setData] = useState([]); // Stato per memorizzare i dati dei clienti
  const [searchText, setSearchText] = useState(""); // Stato per la gestione dei filtri delle colonne
  const [searchedColumn, setSearchedColumn] = useState(""); // Stato per la gestione della ricerca
  const [menuVisible, setMenuVisible] = useState(false); // State to manage menu visibility

  const requestManager = RequestManager(); // Inizializzazione del gestore delle richieste
  const navigate = useNavigate(); // Utilizzo del hook di navigazione
  const user = localStorage.getItem("user"); // Recupero delle informazioni sull'utente dalla localStorage
  const windowLoader = WindowLoader();

  // Effetto per gestire il recupero dei dati alla monta del componente
  useEffect(() => {
    // Verifica se i dati sono già stati caricati
    if (!loaded) {
      requestManager.sendRequestGet("/visualizzaClienti");
      setLoaded(true);
    }
    // Verifica se l'utente è autenticato, altrimenti lo reindirizza alla pagina di login
    if (!user) {
      navigate("/");
    } else {
      const jsonData = requestManager.response; // Assegna i dati della risposta fatta alla richiesta
      if (jsonData) {
        const exitStatus = jsonData.status; // Assegna i dati lo status della risposta

        // Gestione i dati in base allo status della risposta
        if (exitStatus === 200) {
          setData(jsonData.data.users);
        } else {
          toast.error(`Errore: ${exitStatus}`);
        }
      }else{
        toast.error("Impossibile accedere al server");
      }
    }
  }, [requestManager.response, user, loaded]);

  // UseEffect per gestire la chiusura del menu al click al di fuori di esso
  useEffect(() => {
    // Definizione della funzione che gestisce il click al di fuori del menu
    function handleClickOutside(event) {
      // Verifica se il riferimento al menu esiste e se l'evento di click è al di fuori del menu
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuVisible(false); // Se sì, imposta la visibilità del menu su false
      }
    }
    document.addEventListener("mousedown", handleClickOutside); // Aggiunta dell'ascoltatore dell'evento di click sulla finestra del documento

    // Ritorno di una funzione di cleanup per rimuovere l'ascoltatore quando il componente viene smontato
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  /**
   * @use Funzione per gestire l'esecuzione della ricerca sulla colonna
   * @params {Array} selectedKeys - Array contenente i valori di ricerca selezionati
   * @params {Function} confirm - Funzione di conferma per applicare la ricerca
   * @params {string} dataIndex - L'indice della colonna su cui eseguire la ricerca
   */
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    // Conferma l'esecuzione della ricerca
    confirm();
    // Imposta il testo di ricerca e la colonna su cui è stata eseguita la ricerca
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  /**
   * @use Funzione per gestire il reset dei filtri della colonna
   * @params {Function} clearFilters - Funzione per rimuovere i filtri
   */
  const handleReset = (clearFilters) => {
    // Rimuove i filtri
    clearFilters();
    // Reimposta il testo di ricerca a vuoto
    setSearchText("");
  };

  /**
   * @use Funzione per ottenere le proprietà di ricerca per una colonna specifica
   * @params {string} dataIndex - L'indice della colonna per cui ottenere le proprietà di ricerca
   * @returns {Object} - Oggetto contenente le proprietà di ricerca per la colonna specifica
   */
  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
      close,
    }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        {/* Input per la ricerca nella colonna */}
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: "block",
          }}
        />
        {/* Pulsanti per eseguire la ricerca, il reset e gestire i filtri */}
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              // Conferma e applica il filtro senza chiudere il dropdown
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              // Chiude il dropdown senza confermare il filtro
              close();
            }}
          >
            Close
          </Button>
        </Space>
      </div>
    ),
    // Icona del filtro che cambia colore se il filtro è attivo
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? "#1677ff" : undefined,
        }}
      />
    ),
    // Funzione di filtro per la colonna
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    // Gestione del cambio di visibilità del dropdown del filtro
    onFilterDropdownOpenChange: (visible) => {
      // Se visibile, seleziona l'input di ricerca dopo un breve ritardo
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    // Funzione di rendering per evidenziare il testo cercato nella colonna
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: "#ffc069",
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });

  // Definizione delle colonne per la tabella
  const columns = [
    {
      title: "Codice fiscale",
      dataIndex: "codiceFiscale",
      key: "codiceFiscale",
      fixed: "left",
      width: 140,
      ...getColumnSearchProps("codiceFiscale"),
    },
    {
      title: "Ragione sociale",
      dataIndex: "ragioneSociale",
      key: "ragioneSociale",
      width: 250,
      ...getColumnSearchProps("ragioneSociale"),
    },
    {
      title: "Partita IVA",
      dataIndex: "partitaIVA",
      key: "partitaIVA",
      width: 120,
      ...getColumnSearchProps("partitaIVA"),
    },
    {
      title: "PEC",
      dataIndex: "pec",
      key: "pec",
      width: 250,
      ...getColumnSearchProps("pec"),
    },
    {
      title: "Indirizzo",
      dataIndex: "indirizzo",
      key: "indirizzo",
      width: 150,
      ...getColumnSearchProps("indirizzo"),
    },
    {
      title: "Stato",
      dataIndex: "stato",
      key: "stato",
      width: 80,
      ...getColumnSearchProps("stato"),
    },
    {
      title: "Citta",
      dataIndex: "citta",
      key: "citta",
      width: 110,
      ...getColumnSearchProps("citta"),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      width: 200,
      ...getColumnSearchProps("email"),
    },
    {
      title: "Telefono",
      dataIndex: "telefono",
      key: "telefono",
      width: 130,
      ...getColumnSearchProps("telefono"),
    },
    {
      title: "Alias",
      dataIndex: "alias",
      key: "alias",
      width: 200,
      ...getColumnSearchProps("alias"),
    },
  ];

  /**
   * @use Inizializzazione degli stati e definizione delle funzioni per gestire il menu di selezione delle colonne
   * @returns {Array} - Un array contenente le opzioni per il menu, le colonne nascoste e lo stato delle colonne selezionate
   */
  const defaultCheckedList = columns.map((item) => item.key);
  const [checkedList, setCheckedList] = useState(defaultCheckedList);

  /**
   * @use Creazione di un array di opzioni per il menu di selezione delle colonne
   * @returns {Array} - Un array di oggetti contenenti label e value delle colonne
   */
  const options = columns.map(({ key, title }) => ({
    label: title,
    value: key,
  }));

  /**
   * @use Creazione di un nuovo array di colonne con la proprietà "hidden" aggiornata in base alla selezione
   * @returns {Array} - Un array di oggetti rappresentanti le colonne con la proprietà hidden aggiornata
   */
  const newColumns = columns.map((item) => ({
    ...item,
    hidden: !checkedList.includes(item.key),
  }));

  /**
   * @use Gestione del click sul menu di selezione delle colonne
   * @params {Object} - Un oggetto contenente la chiave della colonna cliccata
   */
  const handleMenuClick = ({ key }) => {
    // Ottiene l'indice dell'elemento cliccato nell'array di colonne selezionate
    const currentIndex = checkedList.indexOf(key);
    // Creazione di un nuovo array di colonne selezionate
    const newCheckedList = [...checkedList];

    // Se l'elemento cliccato non è presente nell'array, lo aggiunge; altrimenti, lo rimuove
    if (currentIndex === -1) {
      newCheckedList.push(key);
    } else {
      newCheckedList.splice(currentIndex, 1);
    }

    // Aggiorna lo stato delle colonne selezionate
    setCheckedList(newCheckedList);
  };

  /**
   * @use Funzione di formattazione per i numeri con animazione di conteggio
   * @params {number} value - Il valore da formattare
   * @returns {ReactNode} - Un componente ReactNode con l'animazione di conteggio
   */
  const formatter = (value) => <CountUp end={value} separator="," />;

  /**
   * @use Gestione del cambio di visibilità del menu di selezione delle colonne
   * @params {boolean} visible - Indica se il menu è visibile o meno
   */
  const handleVisibleChange = (visible) => {
    // Imposta lo stato della visibilità del menu
    setMenuVisible(visible);
  };

  // Restituzione degli elementi necessari al componente chiamante
return {
  handleMenuClick: handleMenuClick,// Funzione per gestire il click sul menu di selezione delle colonne
  options: options, // Array di opzioni per il menu di selezione delle colonne
  checkedList: checkedList, // Array contenente le chiavi delle colonne selezionate
  menuVisible: menuVisible, // Booleano che indica se il menu di selezione delle colonne è visibile o meno
  handleVisibleChange: handleVisibleChange, // Funzione per gestire il cambio di visibilità del menu di selezione delle colonne
  menuRef: menuRef, // Riferimento al menu di selezione delle colonne
  newColumns: newColumns,// Array di colonne con la proprietà "hidden" aggiornata in base alla selezione
  data: data,  // Array contenente i dati dei clienti da visualizzare nella tabella
  showContent: windowLoader.showContent, // Booleano che indica se il contenuto della finestra è in fase di caricamento o meno
  formatter: formatter, // Funzione di formattazione per i numeri con animazione di conteggio
};

}
// Esportazione del componente principale
export default VisualizzaClientiManager;
