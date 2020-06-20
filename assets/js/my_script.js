//$("document").ready(function() {
$("#nest-outer").click(function () {
  $("#nest-inner").toggle("medium");
});

$(".name").click(function () {
  $(".title").toggle("medium");
});

$("#side-section-heading").click(function () {
  $("#side-menu").toggle("medium");
});


/* not working but non-essential, just for fun, if I get working consider switching colors at the same time to get the back and forth between green and brown, call 1 primary and 1 seconday when 1 goes they switch 
$("#cawntact-heading").click(function () {
  $("caw-textbox").toggle("medium");
});
*/