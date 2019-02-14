/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
$(function() {

  var spamLinks = document.querySelectorAll('[href="#spam"]'),
    spamWindows = document.querySelectorAll('.spam-window'),
    spamContainer = document.querySelector('.spam');

  var i;

  var delay = 900,
    called = false;

  $("#spamfolder").dblclick(function() {
    for (i = 1; i < spamWindows.length; i++) {
      var time = delay * i;
      delayWindowOpen(spamWindows[i], time);
    }
    $('.spam').removeClass('hidden');
  });

  function delayWindowOpen(el, time) {
    setTimeout(function() {
      el.classList.remove('hidden');
    }, time)
  }

  for (i = 0; i < spamLinks.length; i++) {
    spamLinks[i].addEventListener('click', function() {
      setTimeout(function() {
        if (called == false) {
          document.querySelector('#alert1').classList.remove('hidden');
          called = true;
          animatespamWindows();
        }
      }, 2000);
    });
  }

  spamContainer.addEventListener('click', function() {
    if (spamContainer.querySelector('.hidden')) {
      called = false;
      for (i = 1; i < spamWindows.length; i++) {
        spamWindows[i].classList.remove('.hidden');
      }
    }
  });
});
