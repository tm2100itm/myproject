
import React, { useState } from 'react';
import './App.css';
import CompInicial from './CompFuncionales/CompInicial/CompInicial';
import CompDatosPersonales from './CompFuncionales/CompDatosPersonales/CompDatosPersonales';
import CompContactos from './CompFuncionales/CompContactos/CompContactos';

function App() {
  const [opcion, setOpcion] = useState("perfil");
  const [contacto, setContacto] = useState([]);
  const cambiarOpcion = () => {
    setOpcion((prev) => (prev === "perfil" ? "contactos" : "perfil"));
  };
  return (
   <div className="App">
      <header className="App-header">
        <div className="columnas">
          <div className="columna">
            <CompInicial opcion={opcion} cambiarOpcion={cambiarOpcion} />
            {opcion==="perfil" ? <div className="columna">
            <CompDatosPersonales /> 
          </div> : <div >
            <CompContactos contacto={contacto} setContacto={setContacto} />
          </div>}
          </div>
          
          
        </div>
      </header>
    </div>
  );
}

export default App;
