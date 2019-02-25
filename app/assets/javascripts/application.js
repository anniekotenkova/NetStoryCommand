//= require jquery
//= require jquery_ujs
//= require jquery-ui/widgets/mouse
//= require jquery-ui/widgets/draggable
//= require jquery-ui/widgets/droppable
//= require jquery-ui/widgets/resizable
//= require jquery-ui/widgets/selectable
//= require jquery-ui/widgets/sortable
//= require rails_sortable
//= require_tree .

$(function() {
  var maxZindex = 0;
  $('.draggable').draggable();

  $('.draggable').mousedown(function() {
    $(this).siblings('.draggable').each(function() {
      var currentZindex = Number($(this).css('z-index'));
      maxZindex = currentZindex > maxZindex ? currentZindex : maxZindex;
    });
    $(this).css('z-index', maxZindex + 1);
  });

  $('.resizable').resizable();

  $("#Desktop span").click(function(e) {
    e.stopPropagation();
    if (e.shiftKey) {
      //Shift-Click
      $(this).addClass("focus");
    } else {
      $(".focus").removeClass("focus");
      $(this).addClass("focus");
    }
  });

  $("body:not(#Desktop span)").click(function() {
    $("#Desktop span").removeClass("focus");
  });

  //share button
  $('.share-button').on('click', function() {
    $(this).addClass('open');
  })
  $(".share-items").draggable({
    axis: "x",
    containment: ".share-items-wrapper"
  });
  $(".share-item").on('click', function() {
    $('.share-button').addClass('shared');
    setTimeout(function() {
      $('.share-button').addClass('thankyou');
    }, 800);
    setTimeout(function() {
      $('.share-button').removeClass('open');
      $('.share-button').removeClass('shared');
      $('.share-button').removeClass('thankyou');
    }, 2500);
  });

});
