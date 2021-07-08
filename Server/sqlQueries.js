const db = require('./sqlConnection.js');

module.exports = {
  createProfile (petName, ownerName, birthday, age, petWeight, family, petType, breed, callback) {
    db.con.query(`INSERT INTO pet_profiles VALUES (null, '${petName}', '${ownerName}', '${birthday}', '${age}', '${petWeight}', '${family}', '${petType}', '${breed}')`, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        db.con.query('SELECT id FROM pet_profiles ORDER BY id DESC LIMIT 1;', (err, petID) => {
          console.log(petID[0].id);
          if (err) {
            console.log(err);
          } else {
            db.con.query(`INSERT INTO pet_weight_tracking (pet_id, pet_weight) VALUES (${petID[0].id}, ${petWeight})`, (err, success) => {
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