
import React, {useState} from "react";
import  "./CompDatosPersonales.css";


function CompDatosPersonales() {


  
  return (
    <table border="1">
      <tbody>
        <tr>
          <td>
            <img src="foto1.jpeg" className="Foto" alt="Mi foto" width="200"/>
            
          </td>
          <td>
            <div><td><strong>Nombre:</strong> </td><td>Mónica Muñoz</td></div>
            <div><td><strong>Profesión:</strong> </td><td>Docente</td></div>
            <div><td><strong>Lugar de trabajo:</strong> </td><td>UCR, Sede del Pacífico</td></div>
            <div><td><strong>Dirección:</strong> </td><td>Puntarenas</td></div>
            
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default CompDatosPersonales;