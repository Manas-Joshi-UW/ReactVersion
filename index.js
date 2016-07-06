var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
//

// we need to check if the connection is successful or not.
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:')); // unsuccessful
db.once('open', function() { // connection is successful
      // we're connected!
});

// defining the Schema for the array of comments
var commArrSchema = mongoose.Schema({
comments: []
});
//
var arrComments_db = mongoose.model('arrComments_db', commArrSchema);
var arrComments = new arrComments_db ({
comments: []
});
var counter = 0;
var comment;

//  CommentList component //
var CommentList = React.createClass({
getInitialState: function()
{return {arrComments:{}}
},
render: function(){


// set the arrComments equal to the array in the database
arrComments_db.find(function (err, arrcomm) {
if (err){
  return console.error(err);
} else{
  arrComments = arrcomm;
}})


var comments = this.props.arrComments.comments.map(function(text){
  return <Comment comment_arg = {text}></Comment>
});

  return (
    <div>
    {comments}
    </div>
  );
}
});

var Comment = React.createClass({
render: function(){
return(
  <div>
  <p>Your Comment: {this.props.comment_arg}</p>
  </div>
);
}});



var CommentForm = React.createClass({
getInitialState: function(){
  return{comment: ''}
},
inputChange: function(e){
  this.setState({comment: e.target.value});
},
addComment: function(e){
  e.preventDefault();
  arrComments.comments.push(this.state.comment);

  // save into the database
  arrComments.save(function (err, arrComments) {
    if (err) return console.error(err);
      console.log("Comment saved successfully");
  });
  //

  this.setState({
    arrComments:this.state.arrComments,
    comment: ''
  });
},
render:function(){
  return (
    <form onSubmit={this.addComment}>
    <input type="text" onChange={this.inputChange}></input>
    </form>
  );
}
});




var CommentBox = React.createClass({
updateArray: function(){
    this.setState({arrComments: arrComments});
},
getInitialState: function(){
  return {
    arrComments: arrComments
  };
},
componentDidMount: function(){
  setInterval(this.updateArray,2000);
},
render: function(){
  return (
    <div>
    <p>{"hsdjh"}</p>
    <CommentList arrComments = {arrComments}/>
    <p>this is after the comment list</p>
    <CommentForm />
    </div>
  );
}
});

ReactDOM.render(<CommentBox />,document.getElementById('footer')
);
