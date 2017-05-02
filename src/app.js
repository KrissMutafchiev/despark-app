/**
 * Created by krisd3v on 29.4.2017 г..
 */
$(function () {

  $(".box-hidden").slice(0 ,4).show();

  $("#load-more").on('click', function (e) {
    console.log('xxx');
    e.preventDefault();
    $(".box-hidden:hidden").slice(0, 2).slideDown();
    if($(".box-hidden:hidden").length == 0){
      $("#load").fadeOut('slow');
    }

/*    $("html,body").animate({
      scrollTop:$(this).offset().top
    },1500);*/
  })

});
