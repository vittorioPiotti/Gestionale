# Documentazione del Frontend del Progetto Gestionale

## Indice

1. [Introduzione](#1-introduzione)
2. [Tecnologie Utilizzate](#2-tecnologie-utilizzate)
3. [Struttura del Progetto](#3-struttura-del-progetto)
4. [Componenti Principali](#4-componenti-principali)
5. [Routing](#5-routing)
6. [Gestione dello Stato](#6-gestione-dello-stato)
7. [Chiamate API](#7-chiamate-api)
8. [Gestione delle Eccezioni](#8-gestione-delle-eccezioni)
9. [Stili](#9-stili)
10. [Testing](#10-testing)
11. [Avvio e Sviluppo Locale](#11-avvio-e-sviluppo-locale)
12. [Distribuzione](#12-distribuzione)
13. [Conclusione](#13-conclusione)

## 1. Introduzione

Il frontend del progetto "Gestionale" offre un interfaccia userfriendly che consente agli utenti preregistrati di gestire la registrazione dei propri clienti e la visualizzazione della lista delle loro anagrafiche:

### Indice

1. [Accesso Utente](#accesso-utente)
2. [Registrazione Clienti](#registrazione-clienti)
3. [Visualizzazione Clienti](#visualizzazione-clienti)

---

### Accesso Utente

![Form di autenticazione dell'utente](images/autenticaUtente.png)

- L'utente effettua il login al sistema da **account unici preregistrati** 
- Degli account utente le **credenziali sono criptate con SHA3**
- Il sistema garantisce una **gestione sicura per l'apertura delle pagine sensibili** tramite la cache in cui viene memorizzato l'accesso dell'utente tenendolo in memoria in modo che se non è presente allora impedisce l'ingresso in qualsiasi form che non sia quello di autenticazione.

### Registrazione Clienti

![Form di registrazione del cliente](images/registraCliente.png)

Gli utenti possono registrare i propri clienti nel sistema che li identifica sulla base del loro codice fiscale.

### Visualizzazione Clienti

![Form di visualizzazione dei clienti](images/visualizzaClienti.png)

Gli utenti possono visualizzare in modo massivo o nel dettaglio le anagrafiche dei propri clienti con le seguenti features:

- Si possono selezionare quali campi rendere visibili e quali oscurare 
- Si possono filtrare i clienti da visualizzare con un sistema di ricerca abilitato su ogni campo

## 2. Tecnologie Utilizzate

### Lista Teconologie

[`React`](#React)&ensp;&ensp;&ensp;[`React DOM`](#ReactDOM)&ensp;&ensp;&ensp;[`React Router DOM`](#ReactRouterDOM)&ensp;&ensp;&ensp;[`Ant Design`](#AntDesign)&ensp;&ensp;&ensp;[`Axios`](#Axios)&ensp;&ensp;&ensp;[`React Tostify`](#ReactToastify)&ensp;&ensp;&ensp;[`Sha3`](#Sha3)&ensp;&ensp;&ensp;[`Bootstrap`](#Bootstrap)&ensp;&ensp;&ensp;[`Web Vitals`](#WebVitals)&ensp;&ensp;&ensp;[`Testing Library`](#TestingLibrary)&ensp;&ensp;&ensp;[`ESLint`](#ESLint)&ensp;&ensp;&ensp;[`Dotenv`](#Dotenv)


---

Il frontend del progetto utilizza una serie di tecnologie per lo sviluppo dell'interfaccia utente e la gestione delle dipendenze. Di seguito sono elencate le principali tecnologie utilizzate:

- <a id="React"></a>**[React](https://reactjs.org/)**: React è il framework JavaScript utilizzato per lo sviluppo dell'interfaccia utente rendendo più semplice la gestione dello stato e il rendering dinamico dei dati.

- <a id="ReactDOM"></a>**[React DOM](https://reactjs.org/docs/react-dom.html)**: React DOM è una libreria utilizzata per il rendering di React all'interno del DOM del browser. Questa libreria è responsabile della manipolazione del DOM e dell'aggiornamento dell'interfaccia utente in base allo stato dell'applicazione.

- <a id="ReactRouterDOM"></a>**[React Router DOM](https://reactrouter.com/en/6.22.0)**: React Router DOM è una libreria utilizzata per gestire il routing dell'applicazione React. Permette di definire rotte all'interno dell'applicazione e di associare componenti React a percorsi specifici.

- <a id="AntDesign"></a>**[Ant Design](https://ant.design/)**: Ant Design è una libreria di componenti UI per React. Offre una vasta gamma di componenti predefiniti pronti per l'uso, che facilitano la creazione di un'interfaccia utente intuitiva e ben progettata.

- <a id="Axios"></a>**[Axios](https://axios-http.com/)**: Axios è una libreria utilizzata per effettuare richieste HTTP dall'applicazione frontend al backend. Fornisce un'interfaccia semplice e intuitiva per l'invio e la gestione delle richieste e delle risposte HTTP.

- <a id="ReactToastify"></a>**[React Toastify](https://github.com/fkhadra/react-toastify)**: React Toastify è una libreria utilizzata per mostrare notifiche toast nell'applicazione React. Queste notifiche sono utili per informare gli utenti su eventi importanti o messaggi di errore senza interrompere l'esperienza utente.

- <a id="Sha3"></a>**[Sha3](https://www.npmjs.com/package/sha3)**: Sha3 è una libreria utilizzata per calcolare l'hash SHA-3 delle stringhe. Questa libreria è utile per la crittografia e la sicurezza dei dati all'interno dell'applicazione.

- <a id="Bootstrap"></a>**[Bootstrap](https://getbootstrap.com/)**: Bootstrap è un framework CSS utilizzato per la progettazione e lo stile dell'interfaccia utente. Offre una serie di componenti UI predefiniti, griglie responsive e stili CSS pronti per l'uso, che semplificano la creazione di un'interfaccia utente accattivante e moderna.

- <a id="WebVitals"></a>**[Web Vitals](https://web.dev/vitals/)**: Web Vitals è una libreria utilizzata per misurare le prestazioni web. Fornisce metriche standard per valutare la velocità di caricamento, la reattività e l'esperienza utente complessiva del sito web.

- <a id="TestingLibrary"></a>**[Testing Library](https://testing-library.com/)**: Testing Library è una libreria utilizzata per i test unitari e di integrazione nell'ambiente di sviluppo React. Fornisce un'API semplice e intuitiva per testare i componenti React e le loro interazioni con l'utente.

- <a id="ESLint"></a>**[ESLint](https://eslint.org/)**: ESLint è uno strumento utilizzato per il linting del codice JavaScript e React. Aiuta a identificare e correggere gli errori nel codice, nonché a mantenere uno stile di codifica uniforme all'interno del progetto.

- <a id="Dotenv"></a>**[Dotenv](https://www.npmjs.com/package/dotenv)**: Questa libreria è essenziale per gestire variabili d'ambiente nelle applicazioni Node.js. Consente di definire e caricare in modo sicuro le configurazioni sensibili, come indirizzi IP e porte di connessione, tramite file di configurazione separati. Ciò aumenta la sicurezza eliminando l'esposizione diretta di tali informazioni sensibili nel codice sorgente, garantendo al contempo una maggiore flessibilità nell'adattare l'ambiente di sviluppo e produzione dell'applicazione.



Queste sono tutte le tecnologie utilizzate nel frontend del progetto, che contribuiscono a creare un'interfaccia utente funzionale, intuitiva e ben progettata.

![Tecnologia](https://img.shields.io/badge/Tecnologia-React-yellow)

![Compatibilità](https://img.shields.io/badge/Compatibilit%C3%A0%20Web-Chrome%20%7C%20Firefox%20%7C%20Safari-green)

![Linguaggio](https://img.shields.io/badge/Linguaggio-JavaScript-orange)




## 3. Struttura del Progetto

### Indice

1. [Organizzazione dei Componenti Grafici](#organizzazione-dei-componenti-grafici)
2. [Vantaggi Strutturali](#vantaggi-strutturali)
3. [Struttura dei File in un Albero di Path](#struttura-dei-file-in-un-albero-di-path)

---

### Organizzazione dei Componenti Grafici

La struttura del progetto frontend segue un'un'architettura basata su **Model-View-Controller** (MVC) ed è organizzata in cartelle per garantire una chiara separazione delle responsabilità e una maggiore manutenibilità del codice.

Ogni componente grafico funzionale è organizzato in tre file distinti:

1. **View**: Questo file contiene solo la parte grafica del componente, ovvero la struttura HTML e la presentazione CSS. La View non ha alcuna logica di business o gestione dello stato.

2. **Manager**: Il file Manager contiene la logica di business del componente, inclusa l'elaborazione dei dati e la gestione dello stato. Qui vengono definiti i metodi e gli attributi necessari per il funzionamento del componente.

3. **Main**: Questo file istanzia il Manager e la View del componente, passando come parametri a View i metodi e gli attributi strettamente necessari all'interfaccia grafica definiti nel Manager.

La scelta di questa struttura organizzativa dei componenti grafici è motivata dalla separazione dei compiti e dalla chiarezza del codice. Separando la parte grafica dalla logica di business, è più semplice comprendere e mantenere ciascun componente in modo isolato. Inoltre, questa organizzazione facilita il riutilizzo dei componenti e favorisce una migliore scalabilità dell'applicazione nel tempo.

### Vantaggi Strutturali

- **Chiarezza del Codice**: La suddivisione dei componenti in View, Manager e Main e favorisce la chiarezza e la leggibilità del codice, rendendo più facile comprendere il funzionamento di ciascun componente.

- **Facilità di Manutenzione**: Grazie alla separazione delle responsabilità, individuare e risolvere problemi o bug diventa più semplice, facilitando la manutenzione continua dell'applicazione.

- **Riutilizzo dei Componenti**: La struttura organizzativa agevola il riutilizzo dei componenti in diverse parti dell'applicazione e in progetti futuri, riducendo la duplicazione del codice e migliorando l'efficienza dello sviluppo.

- **Scalabilità dell'Applicazione**: Una struttura ben organizzata prepara l'applicazione per futuri sviluppi e modifiche, consentendo di aggiungere nuovi componenti o funzionalità in modo più semplice e sicuro.

- **Implementazione Aggiuntiva di Funzionalità**: La chiara separazione delle responsabilità semplifica l'implementazione di nuove funzionalità nell'applicazione, garantendo che ogni componente abbia un ruolo ben definito e che le modifiche non influenzino il funzionamento esistente.

La struttura del progetto, con la sua organizzazione dei componenti e delle responsabilità, porta a un codice più chiaro, manutenibile e riutilizzabile. Questo migliora la qualità e la scalabilità complessiva dell'applicazione, semplificando lo sviluppo e garantendo un alto standard di qualità nel tempo.

### Struttura dei File in un Albero di Path

Di seguito la descrizione della struttura delle cartelle e dei file del frontend inclusi componenti:

- **Client**

   _Directory principale del progetto con il resto dei file generati automaticamente in fase di creazione del progetto react ._
  - <a id="App"></a>`App.js`: _Contiene il gestore dei componenti funzionali e gestisce i reindirizzamenti alle pagine con un sistema di [routing](#5-routing)._

  - **src/**
    
     _Directory principale del codice sorgente._
    - **script/**

       _Contiene tutti gli script js sviluppati._
      - **extra/**

         _Contiene gli script secondari utilizzati nei file principali._
        - **design/**

           _Contiene gli script dei componenti grafici secondari riutilizzati in più schermate._
          - <a id="FloatButtonGroup"></a>**FloatButton/**

             _Contiene gli script per il funzionamento del menu di navigazione del sito._
            - `FloatButtonMain.js`: _Script che istanzia ed usa il manager e la view unendo la parte logica e quella grafica del componente cosi da garantirne il funzionamento ed una corretta separazione dei compiti mantenendo la parte logica e quella grafica separate._
            - `FloatButtonManager.js`: _Script che gestisce la logica e l'elaborazione dei dati della view._
            - `FloatButtonView.js`: _Script che contiene la vista del componente e ne gestisce solo la grafica._
        - **utility/**

           _Contiene gli script che sono i gestori per l'elaborazione dei dati e vengono riutilizzati nei componenti principali._
          - `RequestManager.js`: _Componente per la gestione delle [chiamate API](#7-chiamate-api) con le richieste GET e POST dal frontend al server._
          - `WindowLoader.js`: _Gestisce l'animazione di caricamento delle pagine web._

      - **features/**

         _Contiene i componenti funzionali del progetto._
        - **autenticaUtente/**
          
             _Contiene gli script per il form di autenticazione dell'utente._
            - <a id="AutenticaUtenteApp"></a>`AutenticaUtenteMain.js`: _Script che istanzia ed usa il manager e la view unendo la parte logica e quella grafica del componente cosi da garantirne il funzionamento ed una corretta separazione dei compiti mantenendo la parte logica e quella grafica separate._
            - `AutenticaUtenteManager.js`: _Script che gestisce la logica e l'elaborazione dei dati della view._
            - `AutenticaUtenteView.js`: _Script che contiene la vista del componente e ne gestisce solo la grafica._
              
        - **registraCliente/**
        
             _Contiene gli script per il form di registrazione del cliente._
            - <a id="RegistraClienteApp"></a>`RegistraClienteMain.js`: _Script che istanzia ed usa il manager e la view unendo la parte logica e quella grafica del componente cosi da garantirne il funzionamento ed una corretta separazione dei compiti mantenendo la parte logica e quella grafica separate._
            - `RegistraClienteManager.js`: _Script che gestisce la logica e l'elaborazione dei dati della view._
            - `RegistraClienteView.js`: _Script che contiene la vista del componente e ne gestisce solo la grafica._
              
        - **visualizzaClienti/**
          
             _Contiene gli script per il form di visualizzazione delle anagrafiche dei clienti._
            - <a id="VisualizzaClientiApp"></a>`VisualizzaClientiMain.js`: _Script che istanzia ed usa il manager e la view unendo la parte logica e quella grafica del componente cosi da garantirne il funzionamento ed una corretta separazione dei compiti mantenendo la parte logica e quella grafica separate._
            - `VisualizzaClientiManager.js`: _Script che gestisce la logica e l'elaborazione dei dati della view._
            - <a id="VisualizzaClientiView"></a>`VisualizzaClientiView.js`: _Script che contiene la vista del componente e ne gestisce solo la grafica._
  
    - <a id="CSSPersonalizzati"></a>**style/**

       _Contiene tutti i fogli di stile css sviluppati._
       - `global.css`: _Foglio di stile con gli stili globali per tutto il progetto._
      - `autenticaUtente.css`: _Foglio di stile con gli stili relativi alla schermata di autenticazione dell'utente._
      - `registraCliente.css`: _Foglio di stile con gli stili relativi alla schermata di registrazione del cliente._
      - `visualizzaClienti.css`: _Foglio di stile con gli stili relativi alla schermata di visualizzazione dei clienti._
      - `menuLaterale.css`: _Foglio di stile con gli stili relativi al componente del menu di navigazione._



## 4. Componenti Principali
Elenco e descrizione dei componenti principali utilizzati nel frontend, con eventuali screenshot e descrizione.

| Nome Form                                | Descrizione Form                                                                                                                                                                                                                                                                                                                                                                                  | Immagine Form                                |
|------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------|
| Form di autenticazione utente            | <ul><li>L'utente effettua il login al sistema da <strong>account unici preregistrati</strong></li><li>Degli account utente le <strong>credenziali sono criptate con SHA3</strong></li><li>Il sistema garantisce una <strong>gestione sicura per l'apertura delle pagine sensibili</strong> tramite la cache in cui viene memorizzato l'accesso dell'utente tenendolo in memoria in modo che se non è presente allora impedisce l'ingresso in qualsiasi form che non sia quello di autenticazione.</li></ul> | ![Form di autenticazione utente](images/autenticaUtente.png) |
| Form di registrazione cliente           | Gli utenti possono registrare i propri clienti nel sistema che li identifica sulla base del loro codice fiscale.                                                                                                                                                                                                                                                               | ![Form di registrazione cliente](images/registraCliente.png) |
| Form di visualizzazione anagrafiche cliente | Gli utenti possono visualizzare in modo massivo o nel dettaglio le anagrafiche dei propri clienti con le seguenti features:<ul><li>Si possono selezionare quali campi rendere visibili e quali oscurare</li><li>Si possono filtrare i clienti da visualizzare con un sistema di ricerca abilitato su ogni campo</li></ul>                                                                                                                                                        | ![Form di visualizzazione anagrafiche cliente](images/visualizzaClienti.png) |

## 5. Routing

### Indice

1. [Spiegazione del sistema di routing](#spiegazione-del-sistema-di-routing)
2. [Descrizione delle rotte principali dell'applicazione](#descrizione-delle-rotte-principali-dellapplicazione)
3. [Routing Sicuro e Reindirizzamento](#routing-sicuro-e-reindirizzamento)

---

### Spiegazione del sistema di routing

Nel progetto si ha utilizzato **React Router per gestire il routing** dell'applicazione.

I **componenti importati** da React Router sono i seguenti:

```js
import { BrowserRouter, Routes, Route } from "react-router-dom";
```

- `BrowserRouter`: Questo componente fornisce il contesto del routing per i componenti figlio. È avvolto intorno all'intera struttura delle rotte.
- `Routes`: Questo componente contiene una serie di `Route` componenti che definiscono le rotte dell'applicazione.
- `Route`: Questo componente definisce una singola rotta dell'applicazione, associando un percorso URL a un componente React.

Il sistema di routing è configurato all'interno del componente  [`App.js`](#App). Le rotte principali dell'applicazione sono definite come seguenti:

### Descrizione delle rotte principali dell'applicazione


- La rotta principale (`"/"`) è associata al componente  [`autenticaUtenteMain`](#AutenticaUtenteApp). Questa rotta gestisce l'autenticazione dell'utente e viene visualizzata come pagina di accesso.
- La rotta `"/registraCliente"` è associata al componente [`registraClienteMain` ](#RegistraClienteApp). Questa rotta gestisce il processo di registrazione del cliente.
- La rotta `"/visualizzaClienti"` è associata al componente [`visualizzaClientiMain` ](#VisualizzaClientiApp). Questa rotta gestisce la visualizzazione dei clienti registrati.

### Routing Sicuro e Reindirizzamento

Il sistema implementa il routing sicuro per garantire che l'utente venga reindirizzato alle pagine appropriate solo dopo l'autenticazione. Questo viene fatto salvando nella cache i dati di accesso dell'utente. Se un utente prova ad accedere direttamente a una pagina senza essere autenticato, viene reindirizzato automaticamente alla pagina di accesso.




## 6. Gestione dello Stato

Per la gestione dello stato dell'applicazione, sono stati principalmente utilizzati gli Hooks di React, in particolare [`useState`](#useState),  [`useEffect`](#useEffect), [`useRef`](#useRef), e [`useMemo`](#useMemo), ciascuno con un preciso scopo e utilizzo all'interno dei componenti.

### Indice

1. [Utilizzo degli Hooks](#utilizzo-degli-hooks)
2. [Motivazioni di Utilizzo](#motivazioni-di-utilizzo)

---

### Utilizzo degli Hooks

- <a id="useState"></a>**useState**: Questo Hook è stato utilizzato per definire e gestire lo stato locale all'interno dei componenti funzionali. Ad esempio, è stato utilizzato `useState` per gestire lo stato di variabili dinamiche come il testo di un input, lo stato di un modale, o il conteggio di un contatore.

- <a id="useEffect"></a>**useEffect**: È stato impiegato `useEffect` per gestire gli effetti collaterali nelle componenti funzionali, come le richieste HTTP, la sottoscrizione agli eventi, o la gestione del ciclo di vita del componente. Questo Hook è utile per eseguire codice aggiuntivo dopo il rendering del componente o per ripulire le risorse quando il componente viene smontato.

- <a id="useRef"></a>**useRef**: È stato utilizzato `useRef` per mantenere riferimenti a elementi DOM o valori persistenti tra i render dei componenti. Questo Hook è stato prezioso quando è stato necessario manipolare direttamente elementi DOM o mantenere riferimenti a valori che non devono essere re-inizializzati ad ogni renderizzazione del componente.

- <a id="useMemo"></a>**useMemo**: È stato fatto uso di `useMemo` per memorizzare valori calcolati all'interno dei componenti funzionali. Questo Hook è stato utile quando è stato necessario calcolare valori derivati da altri stati o proprietà del componente, evitando il ricalcolo ad ogni renderizzazione a meno che le dipendenze non cambino.

### Motivazioni di Utilizzo

L'adozione di questi Hooks ha consentito di gestire in modo efficiente lo stato all'interno dei singoli componenti, senza dover ricorrere a librerie esterne come Redux. La scelta di utilizzare Hooks di React anziché librerie esterne è stata guidata dalla semplicità, dalla leggibilità e dalla scalabilità del codice.

Utilizzare Hooks direttamente all'interno dei componenti ha semplificato la gestione dello stato, evitando la complessità aggiuntiva introdotta da librerie esterne. Questo approccio è stato particolarmente adatto per la gestione dello stato di piccoli componenti UI o di logica di visualizzazione semplice, mantenendo allo stesso tempo un codice chiaro e facilmente manutenibile.


## 7. Chiamate API

Le chiamate API dal frontend sono state utilizzate per interagire con il backend e scambiare dati tra il client e il server in questa applicazione web tramite la libreria Axios.

### Indice

1. [Utilizzo di Axios](#utilizzo-di-axios)
2. [Principali vantaggi di Axios](#principali-vantaggi-di-axios)
3. [Interfaccia consistente](#interfaccia-consistente)
4. [API Utilizzate](#api-utilizzate)

---

### Utilizzo di Axios

Axios è una libreria JavaScript che semplifica il processo di effettuare chiamate HTTP dal frontend. È particolarmente popolare per la sua facilità d'uso, la sua flessibilità e il suo supporto per le richieste asincrone. 

### Principali vantaggi di Axios:

- **Facilità d'uso**: Axios offre un'API intuitiva e semplice da utilizzare per effettuare richieste HTTP, rendendo facile interagire con API esterne o interne al progetto.
  
- **Supporto per le richieste asincrone**: Axios supporta le richieste asincrone tramite l'utilizzo di Promises o async/await, consentendo di gestire facilmente operazioni di rete che richiedono tempo.

- **Interfaccia consistente**: Axios fornisce un'interfaccia coerente per la gestione di vari tipi di richieste HTTP GET e POST semplificando la scrittura del codice e la comprensione delle operazioni di rete.

### Benefici delle chiamate API con Axios

Effettuare chiamate API con Axios dal frontend offre diversi vantaggi:

1. **Comunicazione con il backend**: Axios consente al frontend di comunicare con il backend dell'applicazione, scambiando dati e informazioni in modo efficiente.

2. **Gestione degli errori**: Axios fornisce un'ampia gestione degli errori per le chiamate API, consentendo di gestire facilmente situazioni di errore e di fornire feedback agli utenti.

3. **Facilità di integrazione**: Grazie alla sua facilità d'uso, Axios può essere integrato facilmente all'interno di progetti React, Angular, Vue.js e altre applicazioni frontend.

4. **Flessibilità**: Axios offre una vasta gamma di opzioni di configurazione e personalizzazione per adattarsi alle esigenze specifiche dell'applicazione.

### API Utilizzate

Nel frontend sono state utilizzate le seguenti API per consentire al client di interagire con le risorse del sistema:

| API                  | Tipo    | Descrizione                                                 |
|----------------------|---------|-------------------------------------------------------------|
| **`/autenticaUtente`**       | **POST**                  | Gestisce il processo di **autenticazione dell'utente** con opportuni controlli per [gestire le eccezioni](#autenticazione-utente). |
| **`/registraCliente`**      |**POST**                       | Gestisce la **registrazione di un cliente** con opportuni controlli per [gestire le eccezioni](#registrazione-cliente). |
| **`/visualizzaClienti`**           | **GET**      | Restituisce la **visualizzazione dei clienti** memorizzati nel database con opportuni controlli per [gestire le eccezioni](#visualizzazione-clienti). |


> [!NOTE]  
> Per informazioni dettagliate sulla gestione degli errori per le singole API consultare il paragrafo di [Gestione delle Eccezioni](#8-gestione-delle-eccezioni).


>In sintesi, Axios è stata una scelta affidabile per gestire le chiamate API dal frontend dell'applicazione web, offrendo una solida base per la comunicazione tra client e server.


## 8. Gestione delle Eccezioni

### Indice 

1. [Globale](#Globale)
2. [Autenticazione Utente](#autenticazione-utente)
3. [Registrazione Cliente](#registrazione-cliente)
4. [Visualizzazione Clienti](#visualizzazione-clienti)

---

### Codici di stato HTTP 

Il [backend](../Server/README.md#8-gestione-delle-eccezioni) gestisce le eccezioni in modo appropriato, restituendo codici di stato HTTP appropriati e fornendo informazioni dettagliate sugli errori al client. Ciò aiuta a garantire una gestione sicura e robusta delle richieste, fornendo al client tutte le informazioni necessarie per comprendere e gestire correttamente gli errori durante le interazioni con il backend.

#### Globale

- **`200` (OK):** Operazione completata con successo e le modifiche sono state salvate nel database.
- **`404` (Not Found):** Impossibile accedere al server. La risorsa richiesta non è stata trovata.
- **`500` (Internal Server Error):** Si è verificato un errore interno.

#### Autenticazione Utente

- **`405` (Method Not Allowed):** Risposta in caso la password fornita non è corretta.
- **`409` (Conflict):** Risposta in caso l'utente non esista nel sistema.
  
#### Registrazione Cliente

- **`409` (Conflict):** Il codice fiscale fornito è già presente nel sistema.
- **`400` (Bad Request):** I dati forniti per la registrazione non sono validi.

#### Visualizzazione Clienti

- **`500` (Internal Server Error):** Si è verificato un errore interno durante il recupero dell'elenco dei clienti.

> [!WARNING]  
> La gestione delle eccezioni è contestualizzata all'API di riferimento quindi a stessi codici di stato HTTP in diverse API corrispondono errori diversi



## 9. Stili


Nel frontend del progetto, la gestione degli stili è stata fondamentale per garantire un'interfaccia utente coerente e accattivante. 

### Lista Stili

[`Ant Design`](#stiliAntDesign)&ensp;&ensp;&ensp;[`CSS personalizzati`](#stiliCSSPersonalizzati)&ensp;&ensp;&ensp;[`CSS Bootstrap`](#stiliCSSBootstrap)

---

Qui di seguito vengono delineati gli approcci utilizzati per gestire gli stili:

- <a id="stiliAntDesign"></a>[**Ant Design**](#AntDesign): La libreria di componenti UI per React, Ant Design, è stata ampiamente impiegata per accedere a componenti già stilizzati e pronti all'uso. Questi componenti predefiniti hanno permesso di risparmiare tempo nello sviluppo e di ottenere un'interfaccia utente coesa e professionale.

- <a id="stiliCSSPersonalizzati"></a>[**Fogli di stile CSS personalizzati** ](#CSSPersonalizzati): Per adattare ulteriormente l'aspetto dei componenti di Ant Design alle specifiche esigenze del progetto, sono stati utilizzati fogli di stile CSS personalizzati. Questi fogli di stile consentono di sovrascrivere o estendere le regole di stile predefinite per ottenere un design coerente con il tema generale dell'applicazione.

- <a id="stiliCSSBootstrap"></a>[**Integrazione di classi di stile Bootstrap**](#Bootstrap): Per ampliare le funzionalità e sfruttare componenti specifici offerti da Bootstrap, sono state integrate classi di stile Bootstrap all'interno dell'applicazione. Questo approccio ha permesso di combinare le caratteristiche di entrambe le librerie per ottenere un'interfaccia utente versatile e ben strutturata.

> [!IMPORTANT]
> Le personalizzazioni degli stili sono state apportate solo nei fogli di stile CSS sorgente, senza modificare direttamente le classi predefinite di Bootstrap o Ant Design. Questo garantisce un controllo flessibile sull'aspetto dell'applicazione, mantenendo la coerenza e semplificando la manutenzione del codice.



## 10. Testing

Breve panoramica dei test unitari e di integrazione effettuati sul frontend 

### Indice

1. [Test Effettuati](#test-effettuati)
2. [Benefici dei Test](#benefici-dei-test)
3. [Esito dei Test](#esito-dei-test)

---


### Test Effettuati

- **Test Unitari**: Sono stati sviluppati test unitari per verificare il corretto funzionamento dei singoli componenti e delle funzioni utilizzate nell'applicazione. Questi test hanno consentito di individuare eventuali bug e garantire che ogni componente si comporti come previsto in condizioni specifiche.

- **Test di Integrazione**: Sono stati eseguiti test di integrazione per verificare l'interazione tra diversi componenti e le varie parti dell'applicazione. Questi test sono stati utili per assicurare che le varie parti dell'applicazione funzionino correttamente insieme e che non vi siano problemi di compatibilità o conflitti tra di esse.

> [!NOTE]
> - La complessità del progetto non ha richiesto l'utilizzo di framework esterni per il testing come Jest.
> 
> - La [struttura del progetto](#3-struttura-del-progetto) in termini di organizzazione del codice ha facilitato la manutenibilità a livello di test, consentendo di scrivere e mantenere i test in modo efficiente.
   


### Benefici dei Test

- **Miglioramento della Qualità**: I test hanno contribuito a migliorare la qualità complessiva dell'applicazione, individuando e risolvendo bug e problemi prima che possano influenzare gli utenti finali.

- **Riduzione dei Rischi**: Effettuando test regolari, si è ridotto il rischio di errori e malfunzionamenti nell'applicazione, garantendo un'esperienza utente più fluida e priva di problemi.

- **Aumento della Fiducia**: L'utilizzo di test ha aumentato la fiducia nello sviluppo e nel rilascio dell'applicazione, fornendo una valida garanzia che ogni cambiamento o aggiornamento non provochi regressioni o problemi imprevisti.



### Esito dei Test

Tutti i test finali hanno dato esito positivo, confermando la stabilità della build.

<a id="WARNING"></a>
> [!WARNING]
> In [`FloatButtonGroup`](#FloatButtonGroup) messaggio di avvertimento per `findDOMNode` che è deprecato in StrictMode. È stato suggerito di aggiungere un ref direttamente all'elemento di riferimento anziché utilizzare `findDOMNode`

> [!WARNING]
> In [`FloatButtonGroup`](#FloatButtonGroup) `findDOMNode` è deprecato in StrictMode quindi aggiungere un ref all'elemento di riferimento anziché utilizzare `findDOMNode`

> [!WARNING]
> In [`VisualizzaClientiView`](#VisualizzaClientiView) per il componente `Dropdown` `findDOMNode` l'uso di `visible` è deprecato quindi è stato consigliato di utilizzare `open`

> [!WARNING]
> In [`VisualizzaClientiView`](#VisualizzaClientiView) l'uso di funzioni ref nei componenti funzionali è stato sconsigliato.

> [!WARNING]
> In [`VisualizzaClientiView`](#VisualizzaClientiView) è stata segnalata la mancanza di chiavi univoche per i figli nella lista.


<a id="TIP"></a>
> [!TIP]
> Tra gli sviluppi futuri un'opportuna **migrazione e aggiornamento** di questi componenti deprecati per garantire la compatibilità e le prestazioni ottimali del sistema.


![Stato del Progetto](https://img.shields.io/badge/Stato-Stabile-brightgreen)

![Versione](https://img.shields.io/badge/Versione-1.0-blue)

![Manutenzione](https://img.shields.io/badge/Manutenzione-Attiva-green)


## 11. Avvio e Sviluppo Locale

Istruzioni su come avviare il frontend in modalità di sviluppo locale, con eventuali prerequisiti e comandi necessari.

### Indice

1. [Prerequisiti](#prerequisiti)
2. [Istruzioni](#istruzioni)

---

### Prerequisiti:
1. **Node.js** installato sul sistema.
2. Gestore di pacchetti **npm** o **yarn**.


### Istruzioni:
1. **Clonare il Repository:** Assicurasi di aver clonato il repository del progetto frontend sul sistema locale.
   
   ```
   git clone <URL_del_repository>
   ```

3. **Installare le Dipendenze:** Utilizzare il gestore di pacchetti npm o yarn per installare le dipendenze del progetto. Occorre eseguire il comando seguente nella directory del progetto:
   
   ```
   npm install
   ```
   oppure

   ```
   yarn install
   ```

4. **Avviare il Server di Sviluppo:** Dopo aver installato le dipendenze, avviare il server di sviluppo locale eseguendo il comando:
   
   ```
   npm start
   ```
   oppure

   ```
   yarn start
   ```

6. **Accesso all'Applicazione:** Una volta avviato il server di sviluppo, l'applicazione sarà disponibile all'indirizzo *http://localhost:3000* nel browser. Accedere all'applicazione visitando questo URL.
   
![Compatibilità Web](https://img.shields.io/badge/Compatibilit%C3%A0%20Web-Chrome%20%7C%20Firefox%20%7C%20Safari-green)

![Compatibilità Client](https://img.shields.io/badge/Compatibilit%C3%A0%20Client-Windows%20%7C%20MacOS%20%7C%20Linux-orange)



## 12. Distribuzione
Breve guida su come distribuire il frontend in un ambiente di produzione.

### Indice

1. [Prerequisiti per la Distribuzione](#prerequisiti-per-la-distribuzione)
2. [Istruzioni per la Distribuzione](#istruzioni-per-la-distribuzione)

---

Le configurazioni necessarie per la distribuzione sono sviluppate nei seguenti passaggi:

### Prerequisiti per la Distribuzione:
1. Necessita di avere **accesso a un server Web** per ospitare l'applicazione frontend.
2. **Disporre delle credenziali di accesso al server** per caricare i file del frontend.

### Istruzioni per la Distribuzione:
1. **Build dell'Applicazione:** Prima di distribuire il frontend, è necessario generare una build ottimizzata dell'applicazione. Esegui il comando seguente nella directory del progetto per eseguire la build:
   
   ```
   npm run build
   ```
   oppure

   ```
   yarn build
   ```

4. **Configurazione del Server:** Una volta completata la build, carica i file generati nella directory "build" su un server Web. Assicurasi di configurare correttamente il server per servire i file statici dell'applicazione.
5. **Verifica:** Dopo aver caricato i file del frontend sul server, verifica che l'applicazione sia accessibile e funzionante. Puoi farlo visitando l'URL del tuo dominio o indirizzo IP nel browser.
6. **Aggiornamenti e Manutenzione:** Una volta distribuita l'applicazione, assicurarsi di monitorare regolarmente le prestazioni e il funzionamento del frontend. Effettua aggiornamenti e manutenzione quando necessario per garantire la continuità del servizio e la sicurezza del sistema.


![Compatibilità Web](https://img.shields.io/badge/Compatibilit%C3%A0%20Web-Chrome%20%7C%20Firefox%20%7C%20Safari-green)

![Compatibilità Client](https://img.shields.io/badge/Compatibilit%C3%A0%20Client-Windows%20%7C%20MacOS%20%7C%20Linux-orange)




## 13. Conclusione

Il frontend del progetto "Gestionale" offre un'esperienza utente intuitiva e funzionale grazie all'impiego di tecnologie moderne come React, Axios e Ant Design. La struttura organizzativa del progetto e l'efficace gestione dello stato mantengono il codice pulito e manutenibile. L'integrazione di test unitari assicura una buona qualità del codice. In sintesi, il frontend è ben progettato, reattivo e pronto per offrire un'esperienza utente di alta qualità.


### Indice

1. [Ringraziamenti](#ringraziamenti)
2. [Riferimenti aggiuntivi](#riferimenti-aggiuntivi)
3. [Supporto e collaborazione futura](#supporto-e-collaborazione-futura)

---

### Ringraziamenti

Desideriamo ringraziare il team di sviluppo per il loro impegno e dedizione nel portare avanti questo progetto. 

| Ruolo          | Nome            | Email                        | GitHub                                           |
|----------------|-----------------|------------------------------|-----------------------------------------------|
| Gestore Backend| Reda Karimi     | redakarimi76@gmail.com      | [redakarimi](https://github.com/redakarimi)  |
| Gestore Frontend| Vittorio Piotti| vittoriopiotti.vp@gmail.com | [vittoriopiotti](https://github.com/vittoriopiotti) |


### Riferimenti aggiuntivi

Per contribuire al progetto, ricevere informazioni o segnalare bug fare riferimento ai seguenti link:


| Issues Repository GitHub                        | Email Aziendale                  | Email Privata                  |
|------------------------------------------|---------------------------------|--------------------------------|
| [Repository](https://github.com/pub) | gestionale.dev@gmail.com                | redakarimi76@gmail.com                        |
|  |                |                           vittoriopiotti.vp@gmail.com     |

![Contatto](https://img.shields.io/badge/Contatto-Email%20%7C%20GitHub-blue)


### Supporto e collaborazione futura

Siamo aperti a nuove collaborazioni e siamo disponibili a offrire supporto per l'implementazione del progetto in altri contesti o per eventuali miglioramenti futuri. Non esitate a contattarci per ulteriori dettagli o proposte di collaborazione.

Grazie ancora a tutti coloro che hanno reso possibile il successo di questo progetto!

![Supporto](https://img.shields.io/badge/Supporto-Community%20%7C%20Aziendale-green)

> [!NOTE]
> Consultare il [readme](../) per ulteriori informazioni.

![Download](https://img.shields.io/badge/Download-0%2B-blue)

![Popolarità](https://img.shields.io/badge/Popolarit%C3%A0-Bassa-yellow)

![Ultima modifica](https://img.shields.io/badge/Ultima%20Modifica-Febbraio%202024-blue)

