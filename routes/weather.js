const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/', async (req, res) => {
  const { latitude, longitude } = req.query;

  if (!latitude || !longitude) {
    return res.status(400).json({ message: 'Latitud y longitud son requeridos' });
  }

  try {
    const response = await axios.get(`https://api.open-meteo.com/v1/forecast`, {
      params: {
        latitude,
        longitude,
        current_weather: true
      }
    });
    
    const { temperature } = response.data.current_weather;
    res.json({ temperature });
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener datos del clima' });
  }
});

module.exports = router;
