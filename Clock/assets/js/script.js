$(document).ready(function(){

    // add a zero to times below 10
    function addZero(i) {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    }

    // set up time getting function
    function getTime(){
        // get the date
        var d = new Date();
        
        // get hours, minutes, and seconds
        var h = addZero(d.getHours());
        var m = addZero(d.getMinutes());
        var s = addZero(d.getSeconds());
        var ms = addZero(d.getMilliseconds());        
        // update the clock's text
        $('#flatclock').html(h + ":" + m + ":" + s + ":"+ms);

        // rotate clock based on the minute
        // $('#clock').css('transform', 'rotate('+ s * 6 +'deg');

        // detect a specific time
        // if(m == 00){
        //  $('body').addClass('noon');
        // } else {
        //  $('body').removeClass('noon');
        // }
    }

    // call getTime every 1 second
    setInterval(function() {
      getTime();
    }, 50);


});
$( "#bttn" ).click(function() {
  $( '.r1' ).toggleClass( "r2" );
});


// function myFunction() {
//     $(".perspective").toggleClass(p2);
//     // document.getElementBy("flatclock").style.WebkitPerspective = "100px"; // Chrome, Safari and Opera
//     // document.getElementById("flatclock").style.perspective = "100px";
// }

$(document).ready(function(){

    // add a zero to times below 10
    function addZero(i) {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    }

    // set up time getting function
    function getTime(){
        // get the date
        var d = new Date();
        
        // get hours, minutes, and seconds
        var h = addZero(d.getHours()+2);
        var m = addZero(d.getMinutes());
        var s = addZero(d.getSeconds());
        
        // update the clock's text
        $('#clock2').html(h + ":" + m + ":" + s);

        // rotate clock based on the minute
        // $('#clock').css('transform', 'rotate('+ s * 6 +'deg');

        // detect a specific time
        // if(m == 00){
        //  $('body').addClass('noon');
        // } else {
        //  $('body').removeClass('noon');
        // }
    }

    // call getTime every 1 second
    setInterval(function() {
      getTime();
    }, 1000);


});

$(document).ready(function(){

    // add a zero to times below 10
    function addZero(i) {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    }

    // set up time getting function
    function getTime(){
        // get the date
        var d = new Date();
        
        // get hours, minutes, and seconds
        var h = addZero(d.getHours()+4);
        var m = addZero(d.getMinutes());
        var s = addZero(d.getSeconds());
        
        // update the clock's text
        $('#clock3').html(h + ":" + m + ":" + s);

        // rotate clock based on the minute
        // $('#clock').css('transform', 'rotate('+ s * 6 +'deg');

        // detect a specific time
        // if(m == 00){
        //  $('body').addClass('noon');
        // } else {
        //  $('body').removeClass('noon');
        // }
    }

    // call getTime every 1 second
    setInterval(function() {
      getTime();
    }, 1000);


});

$(document).ready(function(){

    // add a zero to times below 10
    function addZero(i) {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    }

    // set up time getting function
    function getTime(){
        // get the date
        var d = new Date();
        
        // get hours, minutes, and seconds
        var h = addZero(d.getHours()-8);
        var m = addZero(d.getMinutes());
        var s = addZero(d.getSeconds());
        
        // update the clock's text
        $('#clock4').html(h + ":" + m + ":" + s);

        // rotate clock based on the minute
        // $('#clock').css('transform', 'rotate('+ s * 6 +'deg');

        // detect a specific time
        // if(m == 00){
        //  $('body').addClass('noon');
        // } else {
        //  $('body').removeClass('noon');
        // }
    }

    // call getTime every 1 second
    setInterval(function() {
      getTime();
    }, 1000);


});

$(document).ready(function(){

    // add a zero to times below 10
    function addZero(i) {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    }

    // set up time getting function
    function getTime(){
        // get the date
        var d = new Date();
        
        // get hours, minutes, and seconds
        var h = addZero(d.getHours()-5);
        var m = addZero(d.getMinutes());
        var s = addZero(d.getSeconds());
        
        // update the clock's text
        $('#clock5').html(h + ":" + m + ":" + s);

        // rotate clock based on the minute
        // $('#clock').css('transform', 'rotate('+ s * 6 +'deg');

        // detect a specific time
        // if(m == 00){
        //  $('body').addClass('noon');
        // } else {
        //  $('body').removeClass('noon');
        // }
    }

    // call getTime every 1 second
    setInterval(function() {
      getTime();
    }, 1000);


});




