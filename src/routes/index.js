/**
 * Arquivo: ./routes/index.js
 * Descrição: arquivo responsável pela chamada da Api da aplicação.
 * Data: 03/01/2021
 * Author Roberto Butzke Junior
 */

const express = require('express');

const router = express.Router();

router.get('/api', (req, res) => {
  res.status(200).send({
    success: 'true',
    message: 'API Node.js + PostgreSQL + Azure!',
    version: '1.0.0',
  });
});

module.exports = router;