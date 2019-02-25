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
});
