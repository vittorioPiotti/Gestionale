import {  Tooltip } from "antd";
import {  DatabaseOutlined, MenuOutlined,UserOutlined,LogoutOutlined} from '@ant-design/icons';
import { FloatButton } from 'antd';
import Draggable from 'react-draggable';

/**
 * Componente che rappresenta la vista del pulsante fluttuante nella UI
 * @param {Object} position - Posizione corrente del pulsante fluttuante (coordinata x, y)
 * @param {Object} location - Oggetto che rappresenta la posizione corrente nella navigazione
 * @param {Function} setPosition - Funzione per impostare la posizione del pulsante fluttuante
 * @param {Function} navigate - Funzione di navigazione utilizzata per reindirizzare l'utente
 * @param {Object} mergedArrow - Oggetto che determina la configurazione della freccia del Tooltip
 * @param {Function} disconnetti - Funzione per disconnettere l'utente, rimuovendo le informazioni dalla localStorage
 * @returns {JSX.Element} - Elemento JSX che rappresenta la vista del pulsante fluttuante
 */
const FloatButtonView = ({ position, location, setPosition,navigate, mergedArrow,disconnetti}) => {

  return (
    <>
      {location.pathname !== '/' && (
        <Draggable
          defaultPosition={{ x: 0, y: 0 }}
          position={position}
          onStop={(e, data) => setPosition({ x: data.x, y: data.y })}
          handle=".handle"
        >
          <FloatButton.Group
            trigger="hover"
            type="primary"
            icon={<MenuOutlined />}
            className="handle"
          >

              <Tooltip
                
                title="Registra cliente"
                placement="left"
                arrow={mergedArrow}
              >
            <FloatButton icon={<UserOutlined />} onClick={() => navigate("/registraCliente")} />
            </Tooltip>
            <Tooltip
       
                title="Visualizza clienti"
                placement="left"
                arrow={mergedArrow}
              >
            <FloatButton icon={<DatabaseOutlined />} onClick={() => navigate("/visualizzaClienti")} />
            </Tooltip>

           
              <Tooltip
    
                title="Disconnessione"
                placement="left"
                arrow={mergedArrow}
                color="red" 
              >
                <FloatButton icon={<LogoutOutlined />}onClick={() =>disconnetti() } />
              </Tooltip>

          </FloatButton.Group>
        </Draggable>
      )}
    </>
  );
};

export default FloatButtonView;

