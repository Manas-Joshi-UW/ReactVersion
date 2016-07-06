var express = require('express');
var app = express();

var todos = [{
  id:1,
  desc:"go to bed",
  completed: false
},  {
  id:2,
  desc:"do amath",
  completed:false
}];

app.get('/',function(req,res){
  res.send("Soul");
});
app.get('/', function (req, res) {
  res.json(todos);
});
app.get('/:id',function(req,res){
  var givenId = req.params.id;
  var matchedToDo;
  todos.forEach(function(todo){
    if(todo.id == givenId){
      matchedToDo = todo;
    }
  });
  if(typeof matchedToDo === 'undefined'){
    res.status(404).send();
  }else{
    res.send(matchedToDo.desc);
  }
});



app.listen(3000);
