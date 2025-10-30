<<<<<<< HEAD
// server.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;
=======
const express = require('express');
const cors = require('cors');
const app = express();
>>>>>>> 3d6968403888ae1ff406dd688448805fa01ae7ab

app.use(cors());
app.use(express.json());

<<<<<<< HEAD
// Lista de citas (guardadas temporalmente en memoria)
let citas = [];

// Obtener todas las citas
app.get('/citas', (req, res) => {
  res.json(citas);
});

// Registrar nueva cita
app.post('/citas', (req, res) => {
  const nuevaCita = req.body;
  citas.push(nuevaCita);
  res.status(201).json(nuevaCita);
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

=======
let citas = []; // Aquí guardaremos las citas temporalmente (como si fuera una base de datos)

// Ruta para obtener todas las citas
app.get('/api/citas', (req, res) => {
  res.json(citas);
});

// Ruta para agregar una nueva cita
app.post('/api/citas', (req, res) => {
  const nuevaCita = req.body;
  citas.push(nuevaCita);
  res.json({ mensaje: 'Cita registrada correctamente', cita: nuevaCita });
});

// Iniciar el servidor
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
>>>>>>> 3d6968403888ae1ff406dd688448805fa01ae7ab
