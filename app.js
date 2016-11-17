
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
        });
