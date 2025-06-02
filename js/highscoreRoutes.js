// Rotas relacionadas ao high score
const express = require('express');
const router = express.Router();
const db = require('./db');

// Buscar high score
router.get('/highscore', (req, res) => {
  db.query('SELECT MAX(score) AS highscore FROM scores', (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Erro ao buscar high score' });
    }
    res.json({ highscore: results[0].highscore || 0 });
  });
});

// Salvar novo score
router.post('/highscore', (req, res) => {
  const { score } = req.body;
  if (typeof score !== 'number') {
    return res.status(400).json({ error: 'Score inválido' });
  }
  db.query('INSERT INTO scores (score) VALUES (?)', [score], (err) => {
    if (err) {
      return res.status(500).json({ error: 'Erro ao salvar score' });
    }
    res.json({ success: true });
  });
});

module.exports = router;
