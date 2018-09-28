$(document).ready(function(){
    $(".container").clone().prependTo( ".copyA, .copyB, .copyC, .copyD");    
    // for (i = 0; i <2; i++) { 
        
    // }

    $('#A').click(function(){
    	$('body').removeClass();
        $('body').addClass('stripe');
    });
    $('#B').click(function(){
    	$('body').removeClass();
        $('body').addClass('multiply');
    });

    $('#alt-a').click(function(){
    	$('body').removeClass();
    });
});