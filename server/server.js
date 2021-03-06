var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongooseConnection = require('./modules/mongoose-connection');

var products = require('./routes/products');

var port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('server/public'));
mongooseConnection.connect();

app.use('/products', products);


app.listen(port, function(){
    console.log('listening on port', port);  
});