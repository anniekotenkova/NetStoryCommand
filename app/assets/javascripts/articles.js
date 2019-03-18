
$(function() {
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
