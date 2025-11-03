
const mySQL = require('mysql2');

const connection = mySQL.createConnection(
  {
    host: 'localhost',
    user: 'root',  
    password: '1102Giuseppe11S',
    database: 'movie_db' 
  }
)

connection.connect( err => {
  if(err) throw err;
  console.log('Connessione al database riuscita');
  
})

module.exports = connection;