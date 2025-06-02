// Servidor Node.js para servir o Super Mario Runner
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para JSON
app.use(express.json());

// Importa as rotas de highscore
const highscoreRoutes = require('./js/highscoreRoutes');
app.use('/api', highscoreRoutes);

// Servir arquivos estáticos das pastas css, js e mario-runner-images
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/js', express.static(path.join(__dirname, 'js')));
app.use('/mario-runner-images', express.static(path.join(__dirname, 'mario-runner-images')));

// Redirecionar / para /home
app.get('/', (req, res) => {
  res.redirect('/home');
});

// Servir README.md como texto (opcional)
app.get('/README.md', (req, res) => {
  res.sendFile(path.join(__dirname, 'README.md'));
});

// Servir a página inicial
app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, 'home.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
