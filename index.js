require('dotenv').config();
const express = require('express');
const loginRouter = require('./routes/login');
const weatherRouter = require('./routes/weather');
const { authMiddleware } = require('./middleware/authMiddleware.js');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

// Rutas
app.use('/login', loginRouter);
app.use('/weather', authMiddleware, weatherRouter);

// Manejo de errores para rutas no definidas
app.use((req, res) => {
  res.status(404).json({ message: 'Ruta no encontrada' });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
