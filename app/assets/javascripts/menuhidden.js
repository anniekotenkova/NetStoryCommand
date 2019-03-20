$(function() {

  $("#pink").click(function() {
    $('body').css('background', '#FF85A6');
    console.log(pink);
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

  startTime();
  $('#setting').hide();
  $('#start').click(function() {
    $('#setting').toggle();
    $(this).toggleClass('startClick');
  });

  $('.setting__dropdown-button').click(function() {
    var dropDown = document.querySelector('.setting__dropdown');
    if (dropDown.className.indexOf('hidden') >= 0) {
      dropDown.classList.remove('hidden');
    } else {
      dropDown.classList.add('hidden');
    }
  });

  $('.setting__dropdown__option').click(function(e) {
    console.log('Filter');
    e.preventDefault();

    var dropDown = document.querySelector('.setting__dropdown'),
      dropDownButton = document.querySelector('.setting__dropdown-button');

    dropDown.classList.add('hidden');
    dropDownButton.textContent = e.target.textContent;

    document.querySelector('body').className = 'body-overflow-h' + ' ' + e.target.id;
  });

  var dropDown = document.querySelector('.setting__dropdown'),
  dropDownButton = document.querySelector('.setting__dropdown-button');


  for (i = 0; i < appleSliders.length; i++) {
    appleSliders[i].addEventListener('click', switchOnOff);
  }

});
