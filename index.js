const express = require("express");
const path = require("path");
const morgan = require("morgan");

const app = express();
const PORT = 3000;

app.use(express.static("public"));
app.use(morgan("common"));

// Ruta principal
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "about.html"));
});

app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "contact.html"));
});

app.get("/404", (req, res) => {
  res.sendFile(path.join(__dirname, "404.html"));
});

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "/404.html"));
});

app.listen(PORT, () => {
  console.log(`Servidor ejecutandose en http://localhost:${PORT}`);
});
