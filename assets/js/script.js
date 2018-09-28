$(document).ready(function(){
    for (i = 0; i <3; i++) { 
        $(".copy").clone().prependTo( ".copy")
    }
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