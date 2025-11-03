
const connection = require('../data/db');

// mostra tutti i libri 
const indexPost = (req, res) => {

    const sql = 'SELECT * FROM movies';
    connection.query(sql, (err, results) => {
      if (err) return res.status(500).json({ error: 'Errore nel recupero dei post'});
      res.json(results);
    });

  };


// SHOW mostra un singolo post
const showPost = (req, res) => {
  
  const id = req.params.id;
  const sql = 'SELECT * FROM movies WHERE id = ?';

  connection.query(sql, [id], (err, results) => {
    if (err) {
      console.error('Errore nella query:', err);
      return res.status(500).json({ error: 'Errore del server' });
    }

    if (results.length === 0) {
      return res.status(404).json({ message: 'Post non trovato' });
    }

    res.json(results[0]);
  });

}


module.exports = {indexPost, showPost};