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

  // close
  $(".welalert").click(function() {
    $('.welcome').hide();
  });

  $("#close-btn").click(function() {
    $('#fastlink_erwise').hide();
  });

  $(".infobtn").click(function() {
    $('#info').hide();
  });

  $(".prizebtn").click(function() {
    $('#alert7').hide();
  });

  $(".dietbtn").click(function() {
    $('#alert6').hide();
  });

  $(".gooddaybtn").click(function() {
    $('#alert4').hide();
  });

  $(".contbtn").click(function() {
    $('#alert2').hide();
  });

  $(".internetbtn").click(function() {
    $('#alert1').hide();
  });

  $("#infofolder").dblclick(function() {
    $('#info').css('display', 'block');
  });

  // $("#computerfolder").dblclick(function() {
    // $('#computer').css('display', 'block');
  // });

  // $("#folderfolder").dblclick(function() {
  //   $('#folder').css('display', 'block');
  // });

  $("#trashfolder").dblclick(function() {
    $('#trash').css('display', 'block');
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

  function toggleDropDown() {
    var dropDown = document.querySelector('.setting__dropdown');

    if (dropDown.className.indexOf('hidden') >= 0) {
      dropDown.classList.remove('hidden');
    } else {
      dropDown.classList.add('hidden');
    }
  }

  function getFilter(e) {
    e.preventDefault();

    var dropDown = document.querySelector('.setting__dropdown'),
      dropDownButton = document.querySelector('.setting__dropdown-button');

    dropDown.classList.add('hidden');
    dropDownButton.textContent = e.target.textContent;

    document.querySelector('body').className = 'body-overflow-h' + ' ' + e.target.id;
  }

  document.querySelector('.setting__dropdown-button').addEventListener('click', toggleDropDown);
  document.querySelector('.setting__dropdown').addEventListener('click', getFilter);


  for (i = 0; i < appleSliders.length; i++) {
    appleSliders[i].addEventListener('click', switchOnOff);
  }
});
