
        $( function() {
            $( ".draggable" ).draggable();
        } );
        $( function() {
            $( ".resizable" ).resizable();
        } );
    

$(document).mousemove(function(e){  
	  var bodyWidth = 100
	  var bodyHeight = 100
	  var randPosX1 = Math.floor((Math.random()*bodyWidth));
	  var randPosY1 = Math.floor((Math.random()*bodyHeight));

	  // var randdeg1 = Math.floor((Math.random()*360));
	  var randsc1 = Math.floor((Math.random()*3));

	  var randPosX2 = Math.floor((Math.random()*bodyWidth));
	  var randPosY2 = Math.floor((Math.random()*bodyHeight));
      var xPos = e.pageX;
      var yPos = e.pageY;


	$('.randommove1').css({
 		"transform": 'translate('+ randPosX1 + 'px' + ','+ randPosY1 + 'px)' + ' scale('+ randsc1 + ')',
 		
 	});
 	$('.randommove2').css({
 		"transform": 'translate('+ randPosX2 + 'px' + ','+ randPosY2 + 'px)',
 		
 	});
      console.log(xPos)
   }); 

// setTimeout(function(){
//    window.location.reload(1);
// }, 3000);

// $( function() {
// 	$( ".draggable" ).draggable();
// } );
// $( function() {
// 	$( ".resizable" ).resizable();
// } );
// getRandomLetters("Dave")
// getRandomLetters(" ")
// getRandomLetters("has")
// getRandomLetters(" ")
// getRandomLetters("a")
// getRandomLetters(" ")
// getRandomLetters("hats.")









// function getRandomLetters(inputWord){

//   	var stringCopy = inputWord.slice()		
// 	while (stringCopy.length){
  
//     var randomIndex = Math.floor(Math.random() * stringCopy.length)
    
//     var thisLetter = stringCopy[randomIndex]
    
//     stringCopy = stringCopy.slice(0, randomIndex) + stringCopy.slice(randomIndex + 1, stringCopy.length)
  
//     container = document.createElement('div');
//     container.setAttribute('class', 'note draggable');
//     container.innerHTML = thisLetter;
//     document.body.appendChild(container);


//     // console.log(thisLetter)


//   }
  
// }


// $(document).mousemove(function(e){    
//       var xPos = e.pageX;
//       var yPos = e.pageY;
//       $(document).ready(function() {
// 	  $("b1").on({
// 	     mousemove: function() {
// 	        $(this).css({"font-family": "Space Mono, VT323"});
// 	     }
// 	   });    
	  
// 	  $("body").on({
// 	     mousemove: function() {
// 	       n = n+1;

// 	       $('.b1').css({"font-family": ''+fonts[n]+''});
	       
// 	       if(n == fonts.length){
// 	         n=-1;
// 	       }
// 	     }
//    });      