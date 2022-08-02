const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const urlEncodedParser = bodyParser.urlencoded({extended: false});

app.set('views' , 'views');
app.set('view engine' , 'hbs');
app.use(express.static('public'));

app.get('/', function(req, res){
  res.render('home' , {name : 'John Doe'});
});


app.listen(port);
console.log(`server listening on port ${port}`);