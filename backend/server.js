// server.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

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

