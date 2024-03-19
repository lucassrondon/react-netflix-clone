// requires
const express = require('express');
var   cors    = require('cors');

// express setup
const app = express();
app.use(cors());

// movie routes
app.use('', require('./routes/movies'));

// auth routes
app.use('/auth', require('./routes/auth'));

app.listen(8080, () => {
    console.log('Now listening on 8080');
});