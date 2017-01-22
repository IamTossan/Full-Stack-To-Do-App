var express = require('express');
var routes = require('./routes/routes');


var app = express();
app.set('port', process.env.PORT || 3000);
app.disable('x-powered-by');
app.use(function(req, res, next){
  console.log('request was made : ' + req.url);
  next();
});
app.use('/assets', express.static('public/assets'));
app.use('/views', express.static('public/views'));
routes(app);

app.all('/*', function(req, res){
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(app.get('port'), function(){
  console.log('server is listening to port : ' + app.get('port'));
});
