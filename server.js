const express = require("express");
const path = require("path");
const fs = require("fs");
const PORT = process.env.PORT || 3001;
const app = express();

const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes');


app.use(express.static('public'));
// parse incoming string or array data
app.use(express.urlencoded({extended: true}));
// parse incoming JSON data
app.use(express.json());


// Use apiRoutes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}. Welcome!`);
  });