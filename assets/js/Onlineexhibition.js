



$(function() {
    $( ".circle1,.pic1pic2" ).draggable();
    $( ".square1" ).draggable();
  });

$(document).ready(function(){
    $('.pic1pic').click(function() {
		$('.pic1d1').toggleClass('show');
		document.getElementById("descrit2").innerHTML = "";
	});
});

$(document).ready(function(){
    $('.pic1pic1').click(function() {
		$('.pic1d2').toggleClass('show');
		document.getElementById("descrit3").innerHTML = "";
	});
});

$(document).ready(function(){
    $('.pic1pic2').click(function() {
		$('.pic1d3').toggleClass('show');
		document.getElementById("descrit4").innerHTML = "";
	});
});

$(document).ready(function(){
    $('.pic1pic3').click(function() {
		$('.pic1d4').toggleClass('show');
		document.getElementById("descrit5").innerHTML = "";
	});
});

$(document).ready(function(){
    $('.pic1pic4').click(function() {
		$('.pic1d5').toggleClass('show');
		document.getElementById("descrit5").innerHTML = "";
	});
});



// class App {

//   static init() {

//     App.box = document.getElementsByClassName('box')[0]

//     App.box.addEventListener("dragstart", App.dragstart)
//     App.box.addEventListener("dragend", App.dragend)
