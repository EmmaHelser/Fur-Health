const express = require('express');
const app = express();
const port = 3000;
const controller = require('./controller.js')

app.use(express.json());
app.listen(port, (req, res) => {
  console.log('Listening on 3000!');
})

app.post('/addPet', (req, res) => {
  controller.addProfile(req.body, res);
})

app.get('/getPets/:ownerName', (req, res) => {
  console.log('got request');
  controller.retrievePets(req.params.ownerName, res);
})
