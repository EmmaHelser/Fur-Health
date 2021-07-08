var mysql = require('mysql2');

module.exports = {
  con: mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'furHealth'
  })
};

module.exports.con.getConnection((err) => {
  if (!err) {
    console.log('Server and database connected!');
  } else {
    console.log(err);
  }
});
