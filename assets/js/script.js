$(document).ready(function(){
    var target = "#DanCh"
    //수량조정
      for (var i = 1; i < 2; i++) {
    //수량조정 end
        var n = '.groups'+i

        test = document.createElement("div")
        document.body.appendChild(test);
        test.setAttribute('class', 'groups'+i);

        
        $(target).clone().removeAttr('id').appendTo(n);

        $(n).css({
          "position": "absolute",
          "z-index": 10-i,
          // "left": 10*i+"px",
          "top": 208+208*i+"px",
          "left":0*i+"px",
          // "opacity":0.8/i,

        })
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