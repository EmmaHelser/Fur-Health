const express = require('express');
const app = express();
const port = 3000;
const controller = require('./controller.js')

app.use(express.json());
app.listen(port, '192.168.0.5',(req, res) => {
  console.log('Listening on 3000!');
})

app.post('/addPet', (req, res) => {
  console.log(req.body);
  //controller.addProfile(req.body, res);
})
