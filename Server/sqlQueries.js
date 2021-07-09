const db = require('./sqlConnection.js');

module.exports = {
  createProfile (petName, ownerName, birthday, age, petGender,petWeight, family, petType, breed, callback) {
    db.con.query(`INSERT INTO pet_profiles VALUES (null, '${petName}', '${ownerName}', '${birthday}', '${age}', '${petGender}', '${petWeight}', null, null, '${family}', '${petType}', '${breed}')`, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        db.con.query(`SELECT id FROM pet_profiles WHERE pet_name='${petName}' AND owner_name='${ownerName}';`, (err, petID) => {
          console.log(petID);
          if (err) {
            console.log(err);
          } else {
            db.con.query(`INSERT INTO pet_weight_tracking (pet_id, pet_weight) VALUES (${petID[0].id}, '${petWeight}')`, (err, success) => {
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
  },
  getPets (ownerName, callback) {
    db.con.query(`SELECT pet_name, age, pet_weight FROM pet_profiles WHERE owner_name='${ownerName}'`, (err, data) => {
      if (err) {
        callback(err);
      } else {
        callback(null, data);
      }
    })
  },
  getPetInfo (ownerName, petName, callback) {
    db.con.query(`SELECT * FROM pet_profiles WHERE owner_name='${ownerName}' AND pet_name='${petName}';`, (err, data) => {
      if (err) {
        callback(err);
      } else {
        callback(null, data);
      }
    })
  }
}