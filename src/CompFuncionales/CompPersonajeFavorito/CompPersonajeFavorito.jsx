// PersonajeFavorito.js
import React from "react";
import "./CompPersonajeFavorito.css"; // si querés estilos aparte
import '../CompDatosPersonales/CompDatosPersonales.css';


function CompPersonajeFavorito() {
  return (
    <div className="perfil-container">
      <h2>Mi Personaje Favorito</h2>
      <p>Me recuerda mi infancia</p>
      <div className="card">
        <img 
          src="./Candy.jpg" 
          alt="Candy Candy" 
          className="personaje-img"
        />
        <h3>Candy Candy</h3>
        <p>
          Candy Candy es una heroína del animé se caracteriza por su resiliencia. 
          A pesar de las dificultades, siempre mantiene su sonrisa y su bondad. 
          Ve la vida con mucho optimismo.
        </p>
      </div>
    </div>
  );
}

export default CompPersonajeFavorito;
