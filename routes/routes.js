var mongoose = require('mongoose');
var bodyParser = require('body-parser');


mongoose.connect('mongodb://tossan:tossan@ds019996.mlab.com:19996/iamtossandb');

var Schema = mongoose.Schema({
  name: String,
  message: String
});

var Post = mongoose.model('todo', Schema);

module.exports = function(app){
  app.use(bodyParser.json());

  app.get('/api', function(req, res){
    Post.find({}, function(err, data){
      if(err) throw err;
      res.json(data);
    });
  });

  app.post('/api', function(req, res){
    console.log(req.body);
    Post.create(req.body, function(err){
      if(err)throw err;
      Post.find({}, function(err, data){
        if(err)throw err;
        res.json(data);
      });
    });
  });

  app.delete('/api/:_id', function(req, res){
    Post.remove({_id: req.params._id}, function(err){
      if(err)throw err;
      Post.find({}, function(err, data){
        if(err)throw err;
        res.json(data);
      });
    });
  });

  app.put('/api', function(req, res){
    Post.update({_id: req.body._id}, req.body, function(err){
      if(err)throw err;
      Post.find({}, function(err, data){
        if(err)throw err;
        res.json(data);
      });
    });
  });



};
