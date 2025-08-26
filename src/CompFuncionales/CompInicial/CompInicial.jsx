import React, {useState} from "react";
import './CompInicial.css';

function CompInicial({opcion,cambiarOpcion}) {
  const [mostrarPerfil, setMostrarPerfil] = useState(false);
  

  const cambiarTexto = () => {
    setMostrarPerfil((opcion) => !opcion);
  };

  return (
    <div>
      <h1 className="h1">Elija lo que desea visualizar</h1>
      <button className="btn-inicial" onClick={cambiarOpcion}>
        {opcion === "perfil" ? "Contactos" : "Perfil"}
      </button>
     
      
    </div>
  );
}

export default CompInicial;