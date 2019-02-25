$(function() {
  //show

  $("#infofolder").dblclick(function() {
    $('#info').show();
  });

  $("#computerfolder").dblclick(function() {
    $('#computer').show();
  });

  $("#folderfolder").dblclick(function() {
    $('#folder').show();
  });

  $("#trashfolder").dblclick(function() {
    $('#trash').show();
  });


  // Hidden taskbar
  $(".sbtn").click(function() {
    $('#setting').show();
  });

  $(".abtn").click(function() {
    $('#info').show();
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

  // Pop-up in an article
  $('#popup-close').on('click', function() {
    $('.popup').toggleClass('isClosed')
  });

  $(".popup").draggable();

  $("#gui").click(function() {
    $('#guiewrise').show();
    $('#firstPage').show();
  });

  $("#fastlink_erwise").dblclick(function() {
    $('#guiewrise').show();
    $('#firstPage').show();
  });

  $("#close-btn.cbfastlink_erwise").dblclick(function() {
    $('.fastlink_erwise').hide();
  });


  $("#close").click(function() {
    $('#guiewrise').hide();
  });

  $(".next").click(function() {
    if ('#firstPage') {
      $('#firstPage').hide();
      $('#secondPage').show();
    } else if ('#secondPage') {
      $('#secondPage').hide();
      $('#thirdPage').show();
    } else {
      $('#secondPage').hide();
      $('#firstPage').show();
    }
  });

  $(".prev").click(function() {
    if ('#secondPage') {
      $('#secondPage').hide();
      $('#firstPage').show();
    } else if ('#firstPage') {
      $('#firstPage').hide();
      $('#secondPage').show();
    } else {
      $('#firstPage').hide();
      $('#secondPage').show();
    }
  });

  $("#mailb").click(function() {
    $('#mailb.foldercontent').show();
  });
  $(".cbmail").click(function() {
    $('#mailb.foldercontent').hide());
  });


  $("#att").click(function() {
    $('#landing').show();
  });
  $("#fastlink_att").click(function() {
    $('#landing').show();
  });

  $(".cblanding").click(function() {
    $('#landing').hide();
  });
});
