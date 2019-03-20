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

  $('#desktop').click(function() {
    $('#setting').hide();
    $('#start').removeClass('startClick').addClass('startRest');
  })

  $('.desktopIcon').dblclick(function() {
    alert($(this).text());
  });

  $('.setting__dropdown-button').click(function() {
    var dropDown = document.querySelector('.setting__dropdown');
    if (dropDown.className.indexOf('hidden') >= 0) {
      dropDown.classList.remove('hidden');
    } else {
      dropDown.classList.add('hidden');
    }
  });

  $('.setting__dropdown__option').click(function() {
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


function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  // add a zero in front of numbers<10
  m = checkTime(m);
  s = checkTime(s);
  var hd = h;
  $('#clock').html((hd = 0 ? "12" : hd > 12 ? hd - 12 : hd) + ":" + m + " " + (h < 12 ? "AM" : "PM"));
  t = setTimeout(function() {
    startTime()
  }, 500);
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
