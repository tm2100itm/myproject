import React from 'react';
import './CompDatosPersonales.css';

const lugares = [
    { nombre: 'Playa', imagen: 'playa.jpeg', descripcion: 'La playa representa un lugar lleno de tranquilidad' },
    { nombre: 'Playa con atardecer', imagen: 'atardecer.jpeg', descripcion: 'Contemplar un bello atardecer' },
    { nombre: 'Mar Caribe', imagen: 'playa1.jpeg', descripcion: 'Un mar tranquilo y de aguas cristalinas' }
];

export default function CompDatosPersonales() {
    return (
        <div className="perfil-container">
            <section className="seccion">
        <h2>🌟Datos personales 🌟</h2>
      <img src="foto1.jpeg" className="foto-perfil" alt="Mi foto" width="200"/>
        <p></p>
      <table className="tabla-perfil">
         <tbody>
            
        <tr>
          <td><strong>Nombre:</strong></td>
          <td>Mónica Muñoz</td>
        </tr>
        <tr>
          <td><strong>Profesión:</strong></td>
          <td>Docente</td>
        </tr>
        <tr>
          <td><strong>Lugar de trabajo:</strong></td>
          <td>UCR, Sede del Pacífico</td>
        </tr>
        <tr>
          <td><strong>Dirección:</strong></td>
          <td>Puntarenas</td>
        </tr>
         </tbody>
      </table>
      </section>
            <section className="seccion">
                <h2>🌍 Mis lugares favoritos</h2>
                <div className="galeria">
                    {lugares.map((lugar, index) => (
                        <div key={index} className="card">
                            <img src={lugar.imagen} alt={lugar.nombre} />
                            <h3>{lugar.nombre}</h3>
                            <p>{lugar.descripcion}</p>
                        </div>
                    ))}
                </div>
            </section >
            <div className="perfil-container">
                <h2>🍽️ Mi comida favorita</h2>
                <section className="card">
                    <h2>Mariscos</h2>
                    <img src="mariscos.jpeg" alt="Comida favorita" className="imagen-grande" />
                    <p>Mariscos al ajillo, ceviche acompañados de patacones</p>

                </section>
            </div>

        </div>
    );
}
