// var spamLinks = document.querySelectorAll('[href="#spam"]'),
//     spamWindows = document.querySelectorAll('.spam-window'),
//     spamContainer = document.querySelector('.spam');
// var i;
// var delay = 300,
//   called = false;
//
// $('.searchbutton').on('click', function() {
//   for (i = 0; i < spamWindows.length; i++) {
//     var time = delay * i;
//     delayWindowOpen(spamWindows[i], time);
//   }
//   console.log('hi');
//   $('.spam').removeClass('hidden');
//   console.log('oh, no');
// })
//
//   function delayWindowOpen(el, time) {
//     console.log(i);
//     setTimeout(function() {
//       el.classList.remove('hidden');
//     }, time)
//   }
//
// spamContainer.addEventListener('click', function() {
//   if (spamContainer.querySelector('.hidden')) {
//     called = false;
//     for (i = 0; i < spamWindows.length; i++) {
//       spamWindows[i].classList.remove('.hidden');
//     }
//   }
// })
