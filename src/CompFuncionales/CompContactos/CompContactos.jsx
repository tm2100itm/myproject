import React, { useState } from 'react';
import './CompContactos.css';


function CompContactos({ contacto, setContacto }) {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [telefono, setTelefono] = useState('');
  const [datosBuscar, setDatosBuscar] = useState('');

  const agregarContacto = (evento) => {
  evento.preventDefault();
  if (!nombre || !correo || !telefono ) return;
  const nuevoContacto = { id: Date.now(), nombre, correo, telefono };
  setContacto([...contacto, nuevoContacto]);
  setNombre('');
  setCorreo('');
  setTelefono('');
};

  const eliminarContacto = (id) => {
    setContacto(contacto.filter(c => c.id !== id));
  };

 const filtered = contacto.filter(c =>
  c.nombre.toLowerCase().includes(datosBuscar.toLowerCase())
);

  return (
    <div>
      <h2>📇 Contactos</h2>

      <form onSubmit={agregarContacto} >
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(evento) => setNombre(evento.target.value)}
        />
         <input
          type="text"
          placeholder="Correo"
          value={correo}
          onChange={(evento) => setCorreo(evento.target.value)}
        />
        <input
          type="text"
          placeholder="Teléfono"
          value={telefono}
          onChange={(evento) => setTelefono(evento.target.value)}
        />
        <button className="btn" type="submit">Agregar</button>
      </form>

      <input
        type="text"
        placeholder="Buscar"
        value={datosBuscar}
        onChange={(evento) => setDatosBuscar(evento.target.value)}

      />

      {/* Tabla de contactos */}
      <table className="tabla-contactos">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Teléfono</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          
    {filtered.length === 0 ? (
            <tr>
              <td colSpan="4" style={{ textAlign: 'center', padding: '1rem' }}>
                No hay contactos registrados o no hay coincidencias.
              </td>
            </tr>
          ) : (
            filtered.map(c => (
              <tr key={c.id}>
                <td>{c.nombre}</td>
                <td>{c.correo}</td>
                <td>{c.telefono}</td>
                <td>
                  <button className="btn" onClick={() => eliminarContacto(c.id)}>Eliminar</button>
                </td>
              </tr>
            ))
          )}
</tbody>

      </table>
    </div>
  );
}

export default CompContactos;
