const express = require("express");
const app = express();
const router = express.Router();
const PORT = 3000;

const loginRoute = require("./routes/login");
const weatherRoute = require("./routes/weather");
const authCookie = require("./middleware/jwtAuthToken");

app.use("/login", loginRoute);
app.use("/weather",authCookie, weatherRoute);

app.use((req, res) => {
    res.status(404).json({ message: "Ruta no encontrada" });
  });

app.listen(PORT,()=>{console.log(`Server running on http://localhost:${PORT}`)});
module.exports = app;