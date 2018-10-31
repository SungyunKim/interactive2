$(document).ready(function(){
	
	$('#button-3').click(function() {
		$(this).animate({
			opacity: 0.4,
			marginLeft: '125px',
			fontSize: '24px',
			borderWidth: '10px'
		}, 200 );
	});

	$('#button-4').click(function() {
		$(this).toggleClass('gradient-background');
	});

	$('#button-5').click(function() {
		$(this).next('.item').toggleClass('circle');
	});


/* b8 */

  
    $('#button-8').click(function(){
        $('#button-8').css('font-size', 100*Math.random() + 'px');
    });

    /* 9 */

 	var button26= true;
	$('#button-9').click(function() {
		if (button26==true) {
    	 	$("#button-9").css("transform", "skewX(180deg)");
    	 	button26=false;
    	}
		else {
            $("#button-9").css("transform", "skewX(0deg)");
            button26=true;
        }
	});  


$('#button-13').click(function() {
		$(this).toggleClass('gradient-background');
	});


	$('#button-17').click(function() {
		$(this).next('.item').toggleClass('circle');
	});

	$('#button-24').click(function() {
		$(this).toggleClass('gradient-background');
	});
	// check when the mouse moves
	// $('#button-6').mousemove(function(e){
		
	// 	// update mouse x and y position
	// 	var xPos = e.pageX-125;
	// 	var yPos = e.pageY-125;

	// 	$(this).css({
	// 		'position' : 'absolute',
	// 		'top' :  yPos+'px',
	// 		'left' :  xPos+'px',
	// 	});
	// });

});