/**
 * File principale dell'applicazione React.
 *
 * @file
 * @summary Definisce la struttura principale dell'applicazione utilizzando React Router e altri componenti.
 */

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FloatButtonMain from "./script/extra/design/FloatButton/FloatButtonMain";
import VisualizzaClientiMain from "./script/features/visualizzaClienti/VisualizzaClientiMain";
import RegistraClienteMain from "./script/features/registraCliente/RegistraClienteMain";
import AutenticaUtenteMain from "./script/features/autenticaUtente/AutenticaUtenteMain";

/**
 * Componente principale dell'applicazione.
 *
 * @component
 * @returns {JSX.Element} - Elemento React che rappresenta l'intera applicazione.
 */
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rotte dell'applicazione */}
        <Route exact path="/" element={<AutenticaUtenteMain />} />
        <Route path="/registraCliente" element={<RegistraClienteMain />} />
        <Route path="/visualizzaClienti" element={<VisualizzaClientiMain />} />
      </Routes>

      {/* Componente per la visualizzazione dei messaggi Toast */}
      <ToastContainer />

      {/* Componente per il pulsante di azioni fluttuante */}
      <FloatButtonMain />
    </BrowserRouter>
  );
};

export default App;
