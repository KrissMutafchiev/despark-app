/**
 * Created by krisd3v on 29.4.2017 г..
 */

$(document).ready(function() {

  $(".box-hidden").slice(0 ,4).show();

  $("#load-more").on('click', function (e) {
    e.preventDefault();
    $(".box-hidden:hidden").slice(0, 1).slideDown();
    if($(".box-hidden:hidden").length == 0){
      $("#load").fadeOut('slow');
    }

  })});
