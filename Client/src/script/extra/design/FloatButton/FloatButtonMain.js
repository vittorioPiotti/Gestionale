import React from "react";
import FloatButtonView from "./FloatButtonView";
import FloatButtonManager from "./FloatButtonManager";

/**
 * Componente principale per gestire la logica e la vista del pulsante fluttuante nella UI
 * @returns {ReactNode} - Componente React che rappresenta la vista del pulsante fluttuante
 */
const FloatButtonMain = () => {
  const floatButtonManager = FloatButtonManager(); // Inizializza il gestore del pulsante fluttuante
  const floatButtonView = (
    <FloatButtonView
      position={floatButtonManager.position} // Passa la posizione corrente del pulsante fluttuante
      location={floatButtonManager.location} // Passa l'oggetto che rappresenta la posizione corrente nella navigazione
      setPosition={floatButtonManager.setPosition} // Passa la funzione per impostare la posizione del pulsante fluttuante
      navigate={floatButtonManager.navigate} // Passa la funzione di navigazione per reindirizzare l'utente
      mergedArrow={floatButtonManager.mergedArrow} // Passa l'oggetto che determina la configurazione della freccia del Tooltip
      disconnetti={floatButtonManager.disconnetti} // Passa la funzione per disconnettere l'utente
    />
  );

  return floatButtonView; // Restituisce il componente della vista del pulsante fluttuante
};

export default FloatButtonMain;
