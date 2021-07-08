const db = require('./sqlConnection.js');

module.exports = {
  createProfile (petName, ownerName, birthday, age, petWeight, family, petType, breed, callback) {
    db.con.query(`INSERT INTO petProfiles (petName, ownerName, birthday, age, petWeight, family, petType, breed) VALUES (${petName}, ${ownerName}, ${birthday}, ${age}, ${petWeight}, ${family}, ${petType}, ${breed})`, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        db.con.query('SELECT id FROM petProfiles ORDER BY id DESC LIMIT 1;', (err, petID) => {
          if (err) {
            console.log(err);
          } else {
            db.con.query(`INSERT INTO petWeightTracking (petID, petWeight) VALUES (${petID}, ${petWeight})`, (err, success) => {
              if (err) {
                callback(err);
              } else {
                callback(null, success);
              }
            })
          }
        })
      }
    })
  }
}