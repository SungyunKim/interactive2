var fonts = ["Arial", "Georgia", "Times New Roman","Verdana","Courier New","Lucida Console","Lobster","Diplomata","Fascinate Inline","Monoton","Bevan","Playball","Chewy","Press Start 2P","Titan One","Fredericka the Great","Black Ops One","Forum","Knewave","Limelight","Cinzel Decorative","Ceviche One","Pacifico","Great Vibes","Alex Brush","VT323","Nova Mono","Chakra Petch","Anton","Black Han Sans","Orbitron","Text Me One","Julius Sans One","Notable","Source Serif Pro","Playfair Display SC","Marcellus SC","Sancreek","Pirata One","Plaster","Joti One","Diplomata SC","Flavors","Henny Penny","UnifrakturCook","Asset","Akronim","Ewert","Snowburst One","Arbutus","Caesar Dressing","Keania One","Bungee Outline","Geostar Fill","Hanalei"];
var n = 0;



function getRandomLetters(inputWord){

  var stringCopy = inputWord.slice()
  
  while (stringCopy.length){
  
    var randomIndex = Math.floor(Math.random() * stringCopy.length)
    
    var thisLetter = stringCopy[randomIndex]
    
    stringCopy = stringCopy.slice(0, randomIndex) + stringCopy.slice(randomIndex + 1, stringCopy.length)
    console.log(thisLetter)
  }
  
}

$(document).mousemove(function(e){    
      var xPos = e.pageX;
      var yPos = e.pageY;
    
        //     $('.b1').css({
        //     'transform': 'scale(' + xPos/900 + ',' + yPos/900 + ')'               
        // }); 

        //     $('.b2').css({
        //     'transform': 'scale(' + yPos/400 + ',' + xPos/1200 + ')' + 'rotateY(' + xPos + 'deg)',               
        // });

});

// $(document).click(function(e){    
//       var numT = $(window).mousemove();
//   $('.b1').css({
//             'transform': 'scale(' + Math.min(numT/400,2) + ')'               
//         });
  

// });  

$(document).ready(function() {
   $("b1").on({
     mousemove: function() {
        $(this).css({"font-family": "Space Mono, VT323"});
     }
   });    
  
  $("body").on({
     mousemove: function() {
       n = n+1;

       $('.b1').css({"font-family": ''+fonts[n]+''});
       
       if(n == fonts.length){
         n=-1;
       }
     }
   });      
});