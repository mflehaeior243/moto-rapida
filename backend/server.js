const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

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
