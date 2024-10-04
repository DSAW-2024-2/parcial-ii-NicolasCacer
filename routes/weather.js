const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/', async (req, res) => {
  const { latitude, longitude } = req.query;

  if (!latitude || !longitude) {
    return res.status(400).json({ message: 'Latitude and longitude are required' });
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
    return res.status(200).json({ temperature });
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener datos del clima',errorType:error.message});
  }
});

module.exports = router;
