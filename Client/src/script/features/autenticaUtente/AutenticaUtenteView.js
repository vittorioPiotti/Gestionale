// Import delle librerie e componenti necessari
import { Form, Input, Button, Typography, Skeleton } from "antd";

/**
 * Definizione del componente AutenticaUtenteView.
 * Rappresenta la vista del form di autenticazione utente.
 * @param {Object} data - Dati gestiti dal gestore delle richieste.
 * @param {Function} setData - Funzione per impostare i dati gestiti dal gestore delle richieste.
 * @param {Function} onFinish - Funzione chiamata quando il form di autenticazione è inviato.
 * @param {boolean} showContent - Stato di visualizzazione della finestra di caricamento.
 * @param {Function} hashMethod - Funzione per hashare la password utilizzando SHA3 a 512 bit.
 * @returns {JSX.Element} - Elemento React rappresentante la vista del form di autenticazione utente.
 */
const AutenticaUtenteView = ({ data, setData, onFinish, showContent, hashMethod }) => {

  // Form di accesso utente
  const form = (
    <Form onFinish={() => onFinish()}>
      <Typography.Title level={1} className="fw-lighter">
        Accesso Utente
      </Typography.Title>

      {/* Campo di input per lo username */}
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: "Inserisci lo username",
          },
        ]}
        labelCol={{ span: 24 }} // Imposta la larghezza dell'etichetta su 100%
        wrapperCol={{ span: 24 }} // Imposta la larghezza dell'input su 100%
      >
        <Input
          value={data.username}
          onChange={(e) => setData({ ...data, Username: e.target.value })}
        />
      </Form.Item>

      {/* Campo di input per la password */}
      <Form.Item
        label="Password"
        name="password"
        className="mb-0"
        rules={[
          {
            required: true,
            message: "Inserisci la password",
          },
        ]}
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
      >
        <Input.Password
          value={data.password}
          onChange={(e) =>
            setData({
              ...data,
              Password: e.target.value,
              HashedPassword: hashMethod(e.target.value),
            })
          }
        />
      </Form.Item>

      {/* Pulsante di submit per l'accesso */}
      <Form.Item wrapperCol={{ xs: { span: 24, offset: 0 }, sm: { span: 24, offset: 0 } }}>
        <Button type="primary" htmlType="submit" className="bg-primary mt-4">
          Accedi
        </Button>
      </Form.Item>
    </Form>
  );

  // Skeleton per la visualizzazione del caricamento
  const skeleton = (
    <>
      <Skeleton active />
      <Skeleton active />
    </>
  );

  // Restituisce l'elemento React che rappresenta la vista del form di autenticazione utente
  return (
    <div className="bg-form form-autentica-utente centered border rounded shadow">
      {showContent ? form : skeleton}
    </div>
  );
};

// Esportazione del componente AutenticaUtenteView
export default AutenticaUtenteView;
