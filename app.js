const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.status(200).json({
    status: 'OK',
    message: '¡Servidor Node.js desplegado exitosamente desde Azure Pipelines!',
    version: '1.0.0'
  });
});

module.exports = app;