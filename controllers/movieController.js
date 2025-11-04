
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

  const movieSql = "SELECT * FROM movies WHERE id = ?";
  const reviewSql = "SELECT * FROM reviews WHERE movie_id = ?";

  connection.query(movieSql, [id], (err, movieResults) => {
  
    if (err) return res.status(500).json({ error: "Errore query movie" });

    if (movieResults.length === 0)
      
      return res.status(404).json({ error: "Film non trovato" });

         // Estraggo il primo e unico risultato del film e aggiungo il percorso completo delimmagine
      const movie = { 
      ...movieResults[0], 
  
      image: req.imagePath + movieResults[0].image 
    };
   
    // seconda query per recuperare le recensioni
    connection.query(reviewSql, [id], (err, reviewResults) => {

      if (err) return res.status(500).json({ error: "Errore query recensioni" });
       
      // debug
      console.log( reviewResults); 
      
      // aggiungo le recensioni come array all'oggetto movie
      movie.reviews = reviewResults;

      res.json(movie);
    });
  });
};

module.exports = {indexPost, showPost};


