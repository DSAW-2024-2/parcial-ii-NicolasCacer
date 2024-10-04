require('dotenv').config();
const express = require('express');
const authRoutes = require('../routes/login');
const weatherRoutes = require('../routes/weather');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/login', authRoutes);
app.use('/weather', weatherRoutes);

// Manejo de rutas no definidas
app.use((req, res, next) => {
  res.status(404).json({ message: 'Endpoint no encontrado' });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
