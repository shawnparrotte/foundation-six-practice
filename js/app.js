$(document).foundation();

$(document).ready(function(){

  if($(window).width() < 400){

    x = $(window).width();
    y = x * .375;

    $("#image-1").css({"height": y,"width": x });
    $("#image-2").css({"height": y,"width": x });
    $("#image-3").css({"height": y,"width": x });
    $("#image-4").css({"height": y,"width": x });
    $("#image-5").css({"height": y,"width": x });
    $("#image-6").css({"height": y,"width": x });

    $(".fleeex-vertical").css("height", y);

    $("#ready").css("width", (x - 40));

    

  }
})


//link border effect

$(".links a").mouseenter(function(){
  $(this).css("border-bottom", "2px solid #0091CC");
}).mouseleave(function(){
  $(this).css("border-bottom", "0 solid #0091CC")
});

//jQuery Slider

$('#slider-1').bxSlider({
    maxSlides: 1,
    speed: 2000,
    auto: true
  });

//side panel menu

var jPM = $.jPanelMenu({
    menu: '#jmenu',
    trigger: '#hamburger',
    direction: "right",
});

jPM.on();

$(window).resize(function(){
    if($(window).width() < 400){

      x = $(window).width();
      y = x * .375;

      $("#image-1").css({"height": y,"width": x });
      $("#image-2").css({"height": y,"width": x });
      $("#image-3").css({"height": y,"width": x });
      $("#image-4").css({"height": y,"width": x });
      $("#image-5").css({"height": y,"width": x });
      $("#image-6").css({"height": y,"width": x });

      $(".fleeex-vertical").css("height", y);

      $(".fleeex-vertical").css("height", y);

      $("#ready").css("width", (x - 40));
    }

});
