
const express = require('express')
const app = express();
const cors = require('cors');
const port = 3000;
const moviesRouter = require('./routing/movies')
const notFound = require('./middleware/notFound404');
const errorHandler = require('./middleware/errorHandler');

app.use(cors());

// parser
app.use(express.json());

app.get('/api', (req, res) => {
  res.send('Homepage del server');
});

// routes
app.use('/api/movies', moviesRouter);


// middlewate static di express
app.use(express.static('public'));

// middlw per errore 404 di rotta non inesistente
app.use(notFound);

//middlw per per gestione errori interni
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server in ascolto su http://localhost:${port}`);
});
