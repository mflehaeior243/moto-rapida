<<<<<<< HEAD
// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [citas, setCitas] = useState([]);
  const [nuevaCita, setNuevaCita] = useState({
    nombre: '',
    modelo: '',
    servicio: '',
    fecha: ''
  });

  // Cargar las citas al iniciar
  useEffect(() => {
    const fetchCitas = async () => {
      const response = await axios.get('http://localhost:5000/citas');
      setCitas(response.data);
    };
    fetchCitas();
  }, []);

  // Agregar nueva cita
  const agregarCita = async () => {
    if (!nuevaCita.nombre || !nuevaCita.modelo || !nuevaCita.servicio || !nuevaCita.fecha) {
      alert("Por favor completa todos los campos");
      return;
    }

    const response = await axios.post('http://localhost:5000/citas', nuevaCita);
    setCitas([...citas, response.data]);
    setNuevaCita({ nombre: '', modelo: '', servicio: '', fecha: '' });
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>📅 Sistema de Citas - Moto Rápida</h1>

      <input
        placeholder="Nombre del cliente"
        value={nuevaCita.nombre}
        onChange={(e) => setNuevaCita({ ...nuevaCita, nombre: e.target.value })}
      /><br />
      <input
        placeholder="Modelo de moto"
        value={nuevaCita.modelo}
        onChange={(e) => setNuevaCita({ ...nuevaCita, modelo: e.target.value })}
      /><br />
      <input
        placeholder="Servicio solicitado"
        value={nuevaCita.servicio}
        onChange={(e) => setNuevaCita({ ...nuevaCita, servicio: e.target.value })}
      /><br />
      <input
        type="date"
        value={nuevaCita.fecha}
        onChange={(e) => setNuevaCita({ ...nuevaCita, fecha: e.target.value })}
      /><br /><br />

      <button onClick={agregarCita}>Registrar Cita</button>

      <h2>📋 Citas Programadas</h2>
      <ul>
        {citas.map((cita, index) => (
          <li key={index}>
            <b>{cita.nombre}</b> - {cita.modelo} - {cita.servicio} - {cita.fecha}
          </li>
        ))}
      </ul>
=======
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
>>>>>>> 3d6968403888ae1ff406dd688448805fa01ae7ab
    </div>
  );
}

export default App;
<<<<<<< HEAD


=======
>>>>>>> 3d6968403888ae1ff406dd688448805fa01ae7ab
