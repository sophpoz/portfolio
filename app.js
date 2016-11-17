
$(document).ready(function(){ 

            var scrollPix = 0;
             
            $(document).scroll(function() { 
            	console.log(window.scrollY)  
                scrollPix = $(this).scrollTop();
                if(scrollPix > 700 && scrollPix < 1530) {
                   $('.nAbout').css('color','#333745');
                   $('.nWork').css('color','#333745');
                   $('.nContact').css('color','#333745');
                }
                else {
                    $('.nAbout').css('color','#FE5F55');
                    $('.nWork').css('color','#FE5F55');
                    $('.nContact').css('color','#FE5F55');
                }
            });
            //  $("#contactCreator").click(function(){
            // $("#contactCreatorText").fadeIn(1000);
            // });
});
$(document).ready(function(){
    $("#contactCreator").click(function(){
      $("#contactCreatorText").fadeIn(1000);
    });
    $("a.close").click(function(){
      $("#contactCreatorText").fadeOut(1000);
    });
    $("#hotCold").click(function(){
      $("#hotColdText").fadeIn(1000);
    });
    $("a.close").click(function(){
      $("#hotColdText").fadeOut(1000);
    });
    $("#yogaQuiz").click(function(){
      $("#yogaQuizText").fadeIn(1000);
    });
    $("a.close").click(function(){
      $("#yogaQuizText").fadeOut(1000);
    });
});
