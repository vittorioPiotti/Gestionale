import { useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

/**
 * Gestisce lo stato e le funzioni associate al pulsante fluttuante nella UI
 * @returns {Object} - Un oggetto che contiene:
 *   - position:    Posizione corrente del pulsante fluttuante (coordinata x, y)
 *   - location:    Oggetto che rappresenta la posizione corrente nella navigazione
 *   - setPosition: Funzione per impostare la posizione del pulsante fluttuante
 *   - navigate:    Funzione di navigazione utilizzata per reindirizzare l'utente
 *   - mergedArrow: Oggetto che determina la configurazione della freccia del Tooltip
 *   - disconnetti: Funzione per disconnettere l'utente, rimuovendo le informazioni dalla localStorage
 */
const FloatButtonManager = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 }); // Stato per la posizione corrente del pulsante fluttuante
  const [tooltipVisible, setTooltipVisible] = useState(false); // Stato per controllare la visibilità del Tooltip
  const location = useLocation(); // Oggetto che rappresenta la posizione corrente nella navigazione
  const navigate = useNavigate(); // Funzione di navigazione utilizzata per reindirizzare l'utente

  /**
   * Un oggetto che determina la configurazione della freccia del Tooltip
   * @type {Object|undefined} - Oggetto con la proprietà "pointAtCenter" impostata su true se il Tooltip è visibile; altrimenti, undefined
   */
  const mergedArrow = useMemo(() => {
    return tooltipVisible ? { pointAtCenter: true } : undefined;
  }, [tooltipVisible]);

  /**
   * Funzione per disconnettere l'utente, rimuovendo le informazioni dalla localStorage e reindirizzando all'inizio dell'applicazione
   */
  const disconnetti = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return {
    position, //Posizione corrente del pulsante fluttuante (coordinata x, y)
    location, //Oggetto che rappresenta la posizione corrente nella navigazione
    setPosition, //Funzione per impostare la posizione del pulsante fluttuante
    navigate, //Funzione di navigazione utilizzata per reindirizzare l'utente
    mergedArrow, //Oggetto che determina la configurazione della freccia del Tooltip
    disconnetti, //Funzione per disconnettere l'utente, rimuovendo le informazioni dalla localStorage
  };
};

export default FloatButtonManager;
