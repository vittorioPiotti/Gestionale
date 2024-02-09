import React from 'react';
import { Button, Table, Skeleton, Dropdown, Menu, Typography, Checkbox, Divider, Col, Row, Statistic } from 'antd';

/**
 * Componente React per la visualizzazione dei clienti.
 *
 * @param {Function} handleMenuClick - Funzione per gestire il click sul menu di selezione delle colonne.
 * @param {Array} options - Array di opzioni per il menu di selezione delle colonne.
 * @param {Array} checkedList - Array contenente le chiavi delle colonne selezionate.
 * @param {boolean} menuVisible - Booleano che indica se il menu di selezione delle colonne è visibile o meno.
 * @param {Function} handleVisibleChange - Funzione per gestire il cambio di visibilità del menu di selezione delle colonne.
 * @param {Object} menuRef - Riferimento al menu di selezione delle colonne.
 * @param {Array} newColumns - Array di colonne con la proprietà "hidden" aggiornata in base alla selezione.
 * @param {Array} data - Array contenente i dati dei clienti da visualizzare nella tabella.
 * @param {boolean} showContent - Booleano che indica se il contenuto della finestra è in fase di caricamento o meno.
 * @param {Function} formatter - Funzione di formattazione per i numeri con animazione di conteggio.
 * @returns {JSX.Element} - Elemento React che rappresenta il componente per la visualizzazione dei clienti.
 */
const VisualizzaClientiView = ({ handleMenuClick, options, checkedList, menuVisible, handleVisibleChange, menuRef, newColumns, data, showContent, formatter }) => {

  // Menù di selezione delle colonne
  const menu = (
    <Menu onClick={({ key }) => handleMenuClick({ key })} multiple>
      {options.map(({ value, label }) => (
        <Menu.Item key={value}>
          <Checkbox checked={checkedList.includes(value)}>{label}</Checkbox>
        </Menu.Item>
      ))}
    </Menu>
  );

  // Contenuto del form
  const form = (
    <>
      <Typography.Title level={1} className="fw-lighter">
        Visualizza Clienti
      </Typography.Title>
      <Divider />
      <Row>
        <Col className="me-5">
          <Statistic title="Clienti registrati" value={data.length} formatter={formatter} />
        </Col>
        <Col className="d-flex" style={{ alignItems: 'center' }}>
          <Dropdown
            overlay={menu}
            trigger={['hover']}
            visible={menuVisible}
            onVisibleChange={handleVisibleChange}
            overlayStyle={{ minWidth: '200px' }}
            ref={menuRef}
          >
            <Button type="dashed">Seleziona colonne</Button>
          </Dropdown>
        </Col>
      </Row>

      <Table
        columns={newColumns}
        dataSource={data}
        style={{
          marginTop: 24,
        }}
        scroll={{
          x: 1500,
        }}
        pagination={{ pageSize: 8 }}
      />
    </>
  );

  // Skeleton per la visualizzazione durante il caricamento
  const skeleton = (
    <>
      <Skeleton active />
      <Skeleton active />
      <Skeleton active />
      <Skeleton active />
      <Skeleton active />
    </>
  );

  // Restituzione del componente VisualizzaClientiView
  return (
    <div className="bg-form form-visualizza-clienti centered border rounded shadow">
      {showContent ? form : skeleton}
    </div>
  );
};

export default VisualizzaClientiView;
