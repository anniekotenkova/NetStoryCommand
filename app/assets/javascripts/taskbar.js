$(function() {
  // Hidden taskbar
  $(".sbtn").click(function() {
    $('#setting').css('display', 'block');
  });

  $(".abtn").click(function() {
    $('#info').css('display', 'block');
  });

  $("#about-icon").click(function() {
    $(this).css('background-color', 'rgba(255, 255, 255, 0.4)');
    $('#info').css('display', 'block');
  });

  $("#computer-icon").click(function() {
    $(this).css('background-color', 'rgba(255, 255, 255, 0.4)');
    $('.computer').css('display', 'block');
  });

  $("#folder-icon").click(function() {
    $(this).css('background-color', 'rgba(255, 255, 255, 0.4)');
    $('#folder').css('display', 'block');
  });

  $("#trash-icon").click(function() {
    $(this).css('background-color', 'rgba(255, 255, 255, 0.4)');
    $('#trash').css('display', 'block');
  });

  $(".cbinfo").click(function() {
    $('#about-icon').css('background-color', 'transparent');
  });

  $(".cbcomputer").click(function() {
    $('#computer-icon').css('background-color', 'transparent');
  });

  $(".cbfolder").click(function() {
    $('#folder-icon').css('background-color', 'transparent');
  });

  $(".cbtrash").click(function() {
    $('#trash-icon').css('background-color', 'transparent');
  });

  $(".closebtn").click(function() {
    $('#setting').hide();
  });
});
