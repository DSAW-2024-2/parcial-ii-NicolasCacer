const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

const email = "admin@admin.com";
const password = "admin";

router.post('/', (req, res) => {
  const { email: inputEmail, password: inputPassword } = req.body;

  if (inputEmail === email && inputPassword === password) {
    const token = jwt.sign({ email: inputEmail }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Credenciales incorrectas' });
  }
});

module.exports = router;
