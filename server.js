const express = require('express');
const bodyParser = require('body-parser');



const app = express();


app.use(express.static(__dirname + '/dist'));


app.listen(3002, ()=> console.log(`running on PORT 3002`))