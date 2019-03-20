$(function() {

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
