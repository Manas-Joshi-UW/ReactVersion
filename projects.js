$(document).ready(function(){
 var sLengthofCard = 4; // this is the length of the string "card"
 // hover on card function
 $(".card1, .card2").hover(function(){
    var card = $(this);
   card.animate()
   card.css({
    "background-color": "rgba(0,0,0,0.3)",
    "border": "3px",
    "border-style": "solid",
    "border-color":"rgba(2,175,176,0.6)"});

},function(){
   var card = $(this);
   card.css({"background-color": "white","border": "5px"});
 });

 // click on card/open box function
 $(".card1,.card2").click(function(){
    var className = $(this).attr('class');
    var boxNum = className.substring(sLengthofCard);
    console.log(className);
    $(".box"+boxNum).css("display", "block");
    $(".dropback").css({"background-color": "rgba(0,0,0,0.3)", "display": "block"});
 });

 // close the box
 $(".close").click(
   function(){
      var boxName = $(this).parent().attr('class');
      console.log(typeof boxName);
      $("."+boxName).css("display", "none");
      $(".dropback").css("display", "none");
   });
});
