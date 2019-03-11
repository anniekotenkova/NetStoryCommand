//= require jquery
//= require jquery_ujs
//= require jquery-ui/widgets/mouse
//= require jquery-ui/widgets/resizable
//= require jquery-ui/widgets/selectable
//= require jquery-ui/widgets/sortable
//= require rails_sortable
//= require netstory_draggable
//= require_tree .

//# require interact/interact
//# require rails-ujs
//= require jquery-ui/widgets/draggable
//= require jquery-ui/widgets/droppable

$(function() {

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


  // Hidden taskbar
  $(".sbtn").click(function() {
    $('#setting').css('display', 'block');
  });

  $(".abtn").click(function() {
    $('#info').css('display', 'block');
  });


  // Pop-up in an article
  $('#popup-close').on('click', function() {
    $('.popup').toggleClass('isClosed')
  });

  $(".next").click(function() {
    if ('.firstpage') {
      $('.firstpage').css('display', 'none');
      $('.secondpage').css('display', 'block');
    } else if ('.secondpage') {
      $('.secondpage').css('display', 'none');
      $('.thirdpage').css('display', 'block');
    } else {
      $('.secondpage').css('display', 'none');
      $('.firstpage').css('display', 'none');
    }
  });

  $(".prev").click(function() {
    if ('.secondpage') {
      $('.secondpage').css('display', 'none');
      $('.firstpage').css('display', 'block');
    } else if ('.firstpage') {
      $('.firstpage').css('display', 'none');
      $('.secondpage').css('display', 'block');
    } else {
      $('.firstpage').css('display', 'none');
      $('.secondpage').css('display', 'none');
    }
  });

});
