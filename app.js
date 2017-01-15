var express = require('express');
var routes = require('./routes/routes');


var app = express();
app.set('port', process.env.PORT || 3000);
app.disable('x-powered-by');
app.use(function(req, res, next){
  console.log('request was made : ' + req.url);
  next();
});
app.use('/', express.static('public'));
routes(app);


app.listen(app.get('port'), function(){
  console.log('server is listening to port : ' + app.get('port'));
});
