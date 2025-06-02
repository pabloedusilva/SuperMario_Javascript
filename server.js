// Servidor Node.js para servir o Super Mario Runner
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Servir arquivos estáticos das pastas css, js e mario-runner-images
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/js', express.static(path.join(__dirname, 'js')));
app.use('/mario-runner-images', express.static(path.join(__dirname, 'mario-runner-images')));

// Servir o index.html na raiz
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Servir README.md como texto (opcional)
app.get('/README.md', (req, res) => {
  res.sendFile(path.join(__dirname, 'README.md'));
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
