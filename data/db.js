
const mySQL = require('mysql2');

const connection = mySQL.createConnection(
  {
    host: 'localhost',
    user: 'root',  
    password: process.env.DB_PASSWORD,
    database: 'movie_db' 
  }
)

connection.connect( err => {
  if(err) throw err;
  console.log('Connessione al database riuscita');
  
})

module.exports = connection;