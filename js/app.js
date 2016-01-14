$(document).foundation();

$(".links a").mouseenter(function(){
  $(this).css("border-bottom", "2px solid #0091CC");
}).mouseleave(function(){
  $(this).css("border-bottom", "0 solid #0091CC")
})
