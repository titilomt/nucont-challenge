const express = require('express');
const bodyParser  = require("body-parser");
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3003;
app.use(cors());

const config = require('./config/config');
const mongoose = require('mongoose');
const mongoDB = config.host;

mongoose.connect(mongoDB, { useNewUrlParser: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require('./api/routes')(app);
app.listen(port, _ => console.log(`Alive @ ${port}`));  

app.use((req, res) => {
  res.status(404).send({url: req.originalUrl + ' not found'});
});
