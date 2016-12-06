
$(document).ready(function(){
    $('a[href^="#"]').on('click',function (e) {
      e.preventDefault();

      var target = this.hash;
      var $target = $(target);

      $('html, body').stop().animate({
        'scrollTop': $target.offset().top
      }, 900, 'swing', function () {
        window.location.hash = target;
      });
    });

});
$(document).ready(function(){
    $("#contactCreator").click(function(){
      $("#contactCreator").css('top','0px')
      $("#contactCreatorText").fadeIn(1000);
      $("body").css('overflow', 'hidden');

    });
    $("a.close").click(function(){
      $("#contactCreatorText").fadeOut(1000);
      $("body").css('overflow', 'auto')
    });
    $("#hotCold").click(function(){
      $("#hotColdText").fadeIn(1000);
      $("body").css('overflow', 'hidden');
    });
    $("a.close").click(function(){
      $("#hotColdText").fadeOut(1000);
      $("body").css('overflow', 'auto')
    });
    $("#yogaQuiz").click(function(){
      $("#yogaQuizText").fadeIn(1000);
      $("body").css('overflow', 'hidden');
    });
    $("a.close").click(function(){
      $("#yogaQuizText").fadeOut(1000);
      $("body").css('overflow', 'auto')
    });
    $("#etsyButton").click(function(){
      $("#etsyText").fadeIn(1000);
      $("body").css('overflow', 'hidden');
    });
    $("a.close").click(function(){
      $("#etsyText").fadeOut(1000);
      $("body").css('overflow', 'auto')
    });
    //sp home
    $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#sp').fadeIn();
    } else {
      $('#sp').fadeOut();
    }
    });
  //scroll back to top on click
  $("#sp2").click(function (e) {
    e.preventDefault();
    $("html, body").animate({scrollTop: 0}, 500);
  });
});
 