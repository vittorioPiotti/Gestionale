/**
 * Definizione del componente RegistraClienteView.
 * Rappresenta la vista del form di registrazione cliente.
 * @param {Object} data - Dati gestiti dal gestore delle richieste.
 * @param {Function} onFinish - Funzione chiamata quando il form di registrazione è inviato.
 * @param {Function} handleFieldChange - Funzione per gestire il cambio di valore di un campo del form di registrazione.
 * @param {number} filledFields - Numero di campi compilati nel form di registrazione.
 * @param {boolean} showContent - Stato di visualizzazione della finestra di caricamento.
 * @returns {JSX.Element} - Elemento React rappresentante la vista del form di registrazione cliente.
 */
import { Form, Input, Button, Typography, Progress, Skeleton } from "antd";

const RegistraClienteView = ({ data, onFinish, handleFieldChange, filledFields, showContent }) => {
  // Elemento React che rappresenta un loader in stile scheletro durante il caricamento
  const skeleton = (
    <>
      <Skeleton active />
      <Skeleton active />
      <Skeleton active />
      <Skeleton active />
      <Skeleton active />
    </>
  );
  // Elemento React che rappresenta il form di registrazione cliente
  const form = (
    <Form onFinish={() => {onFinish();}}>
      <Typography.Title level={1} className="title-registra-cliente fw-lighter">
        Registra Cliente
      </Typography.Title>

      <Progress
        percent={filledFields * 10}
        showInfo={false} // Nasconde la percentuale
        status="active"
      />

      <div className=" pe-5 m-0">
        <Form.Item
          label="Ragione Sociale"
          name="ragioneSociale"
          labelCol={{ className: "label-style p-0" }}
          rules={[
            {
              required: true,
              data: "Inserisci la Ragione Sociale",
            },
          ]}
          className="form-item-custom"
        >
          <Input
            value={data.ragioneSociale}
            onChange={(e) =>
              handleFieldChange("ragioneSociale", e.target.value)
            }
          />
        </Form.Item>

        <Form.Item
          label="Codice Fiscale"
          name="codiceFiscale"
          
          labelCol={{ className: "label-style p-0" }}
          rules={[
            
            {
              min:11,
              max:11,
              required: true,
              data: "Inserisci il Codice Fiscale",
            },
          ]}
          className="form-item-custom"
        >
          <Input
            value={data.codiceFiscale}
            onChange={(e) => handleFieldChange("codiceFiscale", e.target.value)}
            style={{ width: "120px" }}
          />
        </Form.Item>

        <Form.Item
          label="Partita IVA"
          name="partitaIVA"
          labelCol={{ className: "label-style p-0" }}
          rules={[
            {
              required: true,
              data: "Inserisci la Partita IVA",
            },
          ]}
          className="form-item-custom"
        >
          <Input
            value={data.partitaIVA}
            onChange={(e) => handleFieldChange("partitaIVA", e.target.value)}
            style={{ width: "120px" }}
          />
        </Form.Item>

        <Form.Item
          label="PEC"
          name="pec"
          labelCol={{ className: "label-style p-0" }}
          rules={[
            {
              required: true,
              data: "Inserisci la PEC",
            },
          ]}
          className="form-item-custom"
        >
          <Input
            value={data.pec}
            onChange={(e) => handleFieldChange("pec", e.target.value)}
            style={{ width: "280px" }}
          />
        </Form.Item>

        <Form.Item
          label="Indirizzo"
          name="indirizzo"
          labelCol={{ className: "label-style p-0" }}
          rules={[
            {
              required: true,
              data: "Inserisci l'Indirizzo",
            },
          ]}
          className="form-item-custom"
        >
          <Input
            value={data.indirizzo}
            onChange={(e) => handleFieldChange("indirizzo", e.target.value)}
            style={{ width: "200px" }}
          />
        </Form.Item>

        <Form.Item
          label="Città"
          name="citta"
          labelCol={{ className: "label-style p-0" }}
          rules={[
            {
              required: true,
              data: "Inserisci la Città",
            },
          ]}
          className="form-item-custom"
        >
          <Input
            value={data.citta}
            onChange={(e) => handleFieldChange("citta", e.target.value)}
            style={{ width: "150px" }}
          />
        </Form.Item>

        <Form.Item
          label="Stato"
          name="stato"
          labelCol={{ className: "label-style p-0" }}
          rules={[
            {
              required: true,
              data: "Inserisci lo Stato",
            },
          ]}
          className="form-item-custom"
        >
          <Input
            value={data.stato}
            onChange={(e) => handleFieldChange("stato", e.target.value)}
            style={{ width: "100px" }}
          />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          labelCol={{ className: "label-style p-0" }}
          rules={[
            {
              required: true,
              data: "Inserisci l'Email",
            },
          ]}
          className="form-item-custom"
        >
          <Input
            type="email"
            value={data.email}
            onChange={(e) => handleFieldChange("email", e.target.value)}
            style={{ width: "280px" }}
          />
        </Form.Item>

        <Form.Item
          label="Telefono"
          name="telefono"
          labelCol={{ className: "label-style p-0" }}
          rules={[
            {
              required: true,
              data: "Inserisci il Telefono",
            },
          ]}
          className="form-item-custom"
        >
          <Input
            value={data.telefono}
            onChange={(e) => handleFieldChange("telefono", e.target.value)}
            style={{ width: "110px" }}
          />
        </Form.Item>

        <Form.Item
          label="Alias"
          name="alias"
          labelCol={{ className: "label-style p-0" }}
          rules={[
            {
              required: true,
              data: "Inserisci l'Alias",
            },
          ]}
          className="form-item-custom"
        >
          <Input
            value={data.alias}
            onChange={(e) => handleFieldChange("alias", e.target.value)}
            style={{ width: "280px" }}
          />
        </Form.Item>
      </div>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="bg-success mt-3">
          Registra Cliente
        </Button>
      </Form.Item>
    </Form>
  );
  // Restituisce un div che contiene il form o lo scheletro a seconda dello stato di visualizzazione
  return (
    <div className="bg-form form-registra-cliente centered border rounded shadow">
      {showContent ? form : skeleton}
    </div>
  );
};

export default RegistraClienteView;
