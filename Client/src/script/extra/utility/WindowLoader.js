import { useState, useEffect } from "react";

/**
 * Componente per gestire il caricamento e la visualizzazione graduale del contenuto in una finestra.
 * @returns {Object} - Un oggetto contenente:
 *   - showContent: Stato che indica se il contenuto deve essere visualizzato o nascosto
 */
const WindowLoader = () => {
  // Definizione dello stato per mostrare/nascondere il contenuto
  const [showContent, setShowContent] = useState(false);

  // Effetto per impostare lo stato dopo un ritardo
  useEffect(() => {
    // Utilizzo di setTimeout per ritardare l'impostazione dello stato
    const timer = setTimeout(() => {
      setShowContent(true); // Imposta lo stato a true dopo 700 millisecondi (1 secondo)
    }, 700);

    // Cleanup della funzione di setTimeout quando il componente viene smontato o quando l'effetto viene rieseguito
    return () => clearTimeout(timer);
  }, []); // Esegui solo una volta all'avvio del componente

  // Restituzione dello stato di visualizzazione del contenuto
  return {
    showContent,
  };
};

export default WindowLoader;
