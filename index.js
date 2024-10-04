require('dotenv').config();
const cors = require('cors');
const express = require('express');
const loginRouter = require('./routes/login');
const weatherRouter = require('./routes/weather');
const { authMiddleware } = require('./middleware/authMiddleware.js');
const app = express();
app.use(cors());

const PORT = process.env.PORT || 3000;

app.use(express.json());


app.use('/login', loginRouter);
app.use('/weather', authMiddleware, weatherRouter);

app.use((req, res) => {
  res.status(404).json({ message: 'Ruta no encontrada' });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
