var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

var arrComments = [];


var commArrSchema = mongoose.Schema({
  commentsarray: [String]
});
//
var comms = mongoose.model('comms', commArrSchema);
var comments = new comms;

var port = Number(process.env.PORT || 3000);
app.listen(port);
// set up the mongodb stuff

mongoose.connect('mongodb://localhost/data/db');
//

// we need to check if the connection is successful or not.
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:')); // unsuccessful
db.once('open', function() { // connection is successful
});



app.get('/api/comment', function(req,res){
  var results = comms.find({},function(err,com){
    if(err){
      res.send(err);
    }else{
      res.json(com);
    }
  });
});

app.post('/api/comment', function(req,res){
  var new_comment = req.body.comment;
    comments.commentsarray.push(new_comment);
    comments.save();
});
