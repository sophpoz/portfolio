
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
    $("#etsyButton").click(function(){
      $("#etsyText").fadeIn(1000);
    });
    $("a.close").click(function(){
      $("#etsyText").fadeOut(1000);
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
 