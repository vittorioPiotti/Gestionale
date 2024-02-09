import React from "react";
import VisualizzaClientiView from "./VisualizzaClientiView";
import VisualizzaClientiManager from "./VisualizzaClientiManager";

/**
 * Componente React che funge da punto principale di integrazione per la visualizzazione dei clienti.
 * Inizializza il VisualizzaClientiManager e passa il suo stato e le sue funzioni come props
 * al componente VisualizzaClientiView.
 *
 * @returns {JSX.Element} - Elemento React che rappresenta il componente principale per la visualizzazione dei clienti.
 */
const VisualizzaClientiMain = () => {
  // Inizializzazione del manager
  const visualizzaClientiManager = VisualizzaClientiManager();

  // Creazione della View con i props passati dal Manager
  const visualizzaClientiView = (
    <VisualizzaClientiView
      handleMenuClick={visualizzaClientiManager.handleMenuClick}
      options={visualizzaClientiManager.options}
      checkedList={visualizzaClientiManager.checkedList}
      menuVisible={visualizzaClientiManager.menuVisible}
      handleVisibleChange={visualizzaClientiManager.handleVisibleChange}
      menuRef={visualizzaClientiManager.menuRef}
      newColumns={visualizzaClientiManager.newColumns}
      data={visualizzaClientiManager.data}
      showContent={visualizzaClientiManager.showContent}
      formatter={visualizzaClientiManager.formatter}
    />
  );

  // Restituzione della View
  return visualizzaClientiView;
};

export default VisualizzaClientiMain;
