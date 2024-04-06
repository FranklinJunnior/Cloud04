const express = require('express');
const app = express();


app.get('/', (req, res) => {
  res.send('¡Semana 04 Franklin Junnior!');
});


app.get('/clientes', (req, res) => {
  const clientes = ['Arturo', 'Jose', 'Janeli', 'Yomira'];
  res.json(clientes);
});

// Ruta para mostrar productos
app.get('/productos', (req, res) => {
  const productos = ['Collar de Perlas', 'Rolex', 'Toypta Hilux 2024', 'Targeta de Video 4090'];
  res.json(productos);
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Servidor Express corriendo en el puerto ${PORT}`);
});
