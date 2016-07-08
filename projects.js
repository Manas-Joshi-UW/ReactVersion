$(document).ready(function(){
 var sLengthofCard = 4; // this is the length of the string "card"
 var globalBoxName;

 // hover on card function
 $(".card1, .card2, .card3").hover(function(){
    var card = $(this);
   card.css({
    "background-color": "rgba(0,0,0,0.3)"});
},function(){
   var card = $(this);
   card.css({"background-color": "white","border": "5px"});
 });

 // click on card/open box function
 $(".card1,.card2, .card3").click(function(){
    var className = $(this).attr('class');
    var boxNum = className.substring(sLengthofCard);
    globalBoxName = ".box"+boxNum;
    $(".box"+boxNum+", .dropback").css("display", "block");
    $(".dropback").css({"background-color": "rgba(0,0,0,0.3)", "display": "block"});
 });

 // close the box
 $(".close,.dropback").click(
   function(){
      var boxName = $(this).parent().attr('class');
      $(globalBoxName).css("display", "none");
      $(".dropback").css("display", "none");
   });
});
