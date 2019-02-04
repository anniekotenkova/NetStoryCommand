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
  $('.draggable').draggable();
  $('.draggable').mousedown(function() //associate mousedown event with developments
    {
      var maxZindex = 0; // keep traking max z-index
      $(this).siblings('.draggable').each(function() //find all the siblings of that development
        {
          var currentZindex = Number($(this).css('z-index')); //retrieve z-index of each development we are looping through
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


  $("#infofolder").dblclick(function() {
    $('#info').css('display', 'block');
  });

  $("#computerfolder").dblclick(function() {
    $('#computer').css('display', 'block');
  });

  $("#folderfolder").dblclick(function() {
    $('#folder').css('display', 'block');
  });

  $("#trashfolder").dblclick(function() {
    $('#trash').css('display', 'block');
  });


  $(".closebtn").click(function() {
    $('#info').css('display', 'none');
  });

  $(".closebtn").click(function() {
    $('#computer').css('display', 'none');
  });

  $(".closebtn").click(function() {
    $('#folder').css('display', 'none');
  });

  $(".closebtn").click(function() {
    $('#trash').css('display', 'none');
  });

  $("#er").click(function() {
    $('#err').css('display', 'block');
  });

  $(".closebtn").click(function() {
    $('#err').css('display', 'none');
  });

  // Pop-up in an article
  $('#popup-close').on('click', function() {
    $('.popup').toggleClass('isClosed')
  });

  $(".popup").draggable();

  $("#gui").click(function() {
    $('#guiewrise').css('display', 'block');
    $('#firstPage').css('display', 'block');
  });

  $("#fastlink_erwise").dblclick(function() {
    $('#guiewrise').css('display', 'block');
    $('#firstPage').css('display', 'block');
  });

  $("#close-btn.cbfastlink_erwise").dblclick(function() {
    $('.fastlink_erwise').css('display', 'none');
  });


  $("#close").click(function() {
    $('#guiewrise').css('display', 'none');
  });

  $(".next").click(function() {
    if ('#firstPage') {
      $('#firstPage').css('display', 'none');
      $('#secondPage').css('display', 'block');
    } else if ('#secondPage') {
      $('#secondPage').css('display', 'none');
      $('#thirdPage').css('display', 'block');
    } else {
      $('#secondPage').css('display', 'none');
      $('#firstPage').css('display', 'none');
    }
  });

  $(".prev").click(function() {
    if ('#secondPage') {
      $('#secondPage').css('display', 'none');
      $('#firstPage').css('display', 'block');
    } else if ('#firstPage') {
      $('#firstPage').css('display', 'none');
      $('#secondPage').css('display', 'block');
    } else {
      $('#firstPage').css('display', 'none');
      $('#secondPage').css('display', 'none');
    }
  });

  $("#mailb").click(function() {
    $('#mailb.foldercontent').css('display', 'block');
  });
  $(".cbmail").click(function() {
    $('#mailb.foldercontent').css('display', 'none');
  });


  $("#att").click(function() {
    $('#landing').css('display', 'block');
  });
  $("#fastlink_att").click(function() {
    $('#landing').css('display', 'block');
  });

  $(".cblanding").click(function() {
    $('#landing').css('display', 'none');
  });

  // background color change
  $("#pink").click(function() {
    $('body').css('background', '#FF85A6');
  });

  $("#blue").click(function() {
    $('body').css('background', '#2196F3');
  });

  $("#yellow").click(function() {
    $('body').css('background', '#FEC006');
  });

  $("#black").click(function() {
    $('body').css('background', '#1B1725');
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
