$(document).foundation();

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
