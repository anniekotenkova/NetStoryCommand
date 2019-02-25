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


  //filters
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
