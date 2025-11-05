
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

// middlewate static di express
app.use(express.static('public'));

app.get('/api', (req, res) => {
  res.send('Homepage del server');
});


app.use((req, res, next) => {
  req.imagePath = "http://localhost:3000/images/";
  next();
});


// routes
app.use('/api/movies', moviesRouter);


// middlw per errore 404 di rotta non inesistente
app.use(notFound);

//middlw per per gestione errori interni
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server in ascolto su http://localhost:${port}`);
});
