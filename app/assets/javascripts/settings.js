$(function() {
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

  $('.setting__dropdown-button').click(function() {
    console.log('Click');
    var dropDown = document.querySelector('.setting__dropdown');

    if (dropDown.className.indexOf('hidden') >= 0) {
      dropDown.classList.remove('hidden');
    } else {
      dropDown.classList.add('hidden');
    }
  }
  
});
