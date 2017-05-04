/**
 * Created by krisd3v on 29.4.2017 г..
 */
$(document).ready(function() {
  var counter = 1 ;

  // LOAD NEXT ARTICLE
  $(".box-hidden").slice(0 ,4).show();

  $("#load-more").on('click', function (e) {
    e.preventDefault();
    $(".box-hidden:hidden").slice(0, 1).slideDown();
    if($(".box-hidden:hidden").length == 0){
      $("#load").fadeOut('slow');
    }
  });

  // TOGGLE COMMENT
  $('.primary-comment').on('click',function () {
    $(this).text(function(i, v){
      return v === 'hide replies' ? 'replies' : 'hide replies';
    });

    var getCommentID = $(this).parents("div.panel-success").find(".panel-body").attr("id");
    $('#'+getCommentID).toggle('slow');
  });

  $(' .child-comment').on('click',function () {
    $(this).text(function(i, v){
      return v === 'hide replies' ? 'replies' : 'hide replies';
    });

    var getCommentID = $(this).parents("div.panel-info").find(".panel-body").attr("id");
    $('#'+getCommentID).toggle('slow');
  });

  $('.second-child-comment').on('click',function () {
    $(this).text(function(i, v){
      return v === 'hide replies' ? 'replies' : 'hide replies';
    });
    var getCommentID = $(this).parents("div.panel-warning").find(".panel-body").attr("id");
    $('#'+getCommentID).toggle('slow');
  });


  //COMMENTS REPLY

  //NEW COMMENT
  $('#addComment').keydown(function() {
    if (event.keyCode == 45) {
      var getCommentText = $('#addComment').val();
      $('#primary-comment-container').append(
        '<div class="panel panel-success">'+
          '<div class="panel-heading">'+
              '<p>Author : Anonymous'+
                '<span class="pull-right">'+
                    '<button class="badge new-comment" > replies</button>'+
                    '<button class="badge new-reply" >reply</button>'+
                '</span>'+
               '</p>'+
          '</div>'+
          '<div id="new-comment-'+(counter)+'" class="panel-body new-comment-text">'+
                '<p>'+(getCommentText)+'</p>'+
          '</div>'+
        '</div>'
      );
      $('.new-comment').on('click',function () {
        $(this).text(function(i, v){
          return v === 'replies' ? 'hide replies' : 'replies';
        });
        var getCommentID = $(this).parents("div.panel-warning").find(".panel-body").attr("id");
        $('#'+getCommentID).toggle('slow');
      });
      counter++
    }

    $('.new-reply').click(function() {
      if ($(this).parent().find('textarea').length < 1) {
        $(this).parents("div .panel-success").append($('<div class="inside-text-area-block"><textarea class="inside-text-area"  id="inside-text-area"></textarea></div>'));
      } else {
        // alert('Sending: ' + $(this).parent().find('textarea').val());
      }

      $('.inside-text-area').keydown(function () {
        if (event.keyCode == 45) {
          var getCommentText = $('.inside-text-area').val();
          var subCommenParrent = $('.inside-text-area').parents('div .panel-success').children('div .panel-body').attr('id');
          $('#' + subCommenParrent).append(
            '<div class="panel panel-info">' +
            '<div class="panel-heading">' +
            '<p>Author : Anonymous' +
            '<span class="pull-right">' +
            '<button class="badge new-comment" > replies</button>' +
            '<button class="badge new-reply-inside" >reply</button>' +
            '</span>' +
            '</p>' +
            '</div>' +
            '<div id="new-comment-' + (counter) + '" class="panel-body new-comment-text">' +
            '<p>' + (getCommentText) + '</p>' +
            '</div>' +
            '</div>'
          );
        }
        $('.new-reply-inside').click(function() {
          if ($(this).parent().find('textarea').length < 1) {
            $(this).parents("div .panel-info").append($('<div class="inside-text-area-block"><textarea class="inside-text-area-inside"  id="inside-text-area-inside"></textarea></div>'));
          } else {
            // alert('Sending: ' + $(this).parent().find('textarea').val());
          }
          $('.inside-text-area-inside').keydown(function () {
            if (event.keyCode == 45) {
              var getCommentText = $('.inside-text-area').val();
              var subCommenParrent = $('.inside-text-area-inside').parents('div .panel-success').find('div .panel-body').attr('id');
              $('#' + subCommenParrent).append(
                '<div class="panel panel-warning">' +
                '<div class="panel-heading">' +
                '<p>Author : Anonymous' +
                '<span class="pull-right">' +
                '<button class="badge new-comment" > replies</button>' +
                '<button class="badge new-reply-inside" >reply</button>' +
                '</span>' +
                '</p>' +
                '</div>' +
                '<div id="new-comment-' + (counter) + '" class="panel-body new-comment-text">' +
                '<p>' + (getCommentText) + '</p>' +
                '</div>' +
                '</div>'
              );
            }
          });
        });
      });
    });
  });
  // END NEW COMMENT

  // COMMENT REPLY
  $('.reply').click(function(){
    if($(this).parent().find('textarea').length < 1) {
      $(this).parents("div .panel-success").append($('<div class="inside-text-area-block"><textarea class="inside-text-area"  id="inside-text-area"></textarea></div>'));
    } else {
      // alert('Sending: ' + $(this).parent().find('textarea').val());
    }

    $('.inside-text-area').keydown(function() {
      if (event.keyCode == 45) {
        var getCommentText = $('.inside-text-area').val();
        var subCommenParrent = $('.inside-text-area').parents('div .panel-success').find('div .panel-body').attr('id');
        console.log(subCommenParrent);
        $('#'+subCommenParrent).append(
          '<div class="panel panel-info">'+
          '<div class="panel-heading">'+
          '<p>Author : Anonymous'+
          '<span class="pull-right">'+
          '<button class="badge new-comment" > replies</button>'+
          '<button class="badge new-reply" >reply</button>'+
          '</span>'+
          '</p>'+
          '</div>'+
          '<div id="new-comment-'+(counter)+'" class="panel-body new-comment-text">'+
          '<p>'+(getCommentText)+'</p>'+
          '</div>'+
          '</div>'
        );
      }
    });
  });
  $('.reply-inside-comment').click(function(){
    if($(this).parent().find('textarea').length < 1) {
      $(this).parents("div .panel-info").append($('<div class="inside-text-area-block"><textarea class="inside-text-area"  id="inside-text-area"></textarea></div>'));
    } else {
      // alert('Sending: ' + $(this).parent().find('textarea').val());
    }
    $('.inside-text-area').keydown(function() {
      if (event.keyCode == 45) {
        var getCommentText = $('.inside-text-area').val();
        var subCommenParrent = $('.inside-text-area').parents('div .panel-info').find('div .panel-body').attr('id');
        console.log(subCommenParrent);
        $('#'+subCommenParrent).append(
          '<div class="panel panel-warning">'+
          '<div class="panel-heading">'+
          '<p>Author : Anonymous'+
          '<span class="pull-right">'+
          '<button class="badge new-comment" > replies</button>'+
          '<button class="badge new-reply" >reply</button>'+
          '</span>'+
          '</p>'+
          '</div>'+
          '<div id="new-comment-'+(counter)+'" class="panel-body new-comment-text">'+
          '<p>'+(getCommentText)+'</p>'+
          '</div>'+
          '</div>'
        );
      }
    });
  });
});

