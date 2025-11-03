
// funzione che gestisce gli errori interni 
function errorHandler(err, req, res, next) {

  console.log(err);
  res.status(500);
  
  res.json({
      error: 'Errore interno del server',
      message: err.message,
  });

};

module.exports = errorHandler;