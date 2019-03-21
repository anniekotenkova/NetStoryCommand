
$(function() {
  var dropDown = document.querySelector('.setting__dropdown'),
  dropDownButton = document.querySelector('.setting__dropdown-button');

  startTime()
  $('#setting').hide()
  $('#start').click(function() {
    $('#setting').toggle()
    $(this).toggleClass('startClick')
  })


  var dropDown = document.querySelector('.setting__dropdown'),
  dropDownButton = document.querySelector('.setting__dropdown-button');

  $('.setting__dropdown-button').click(function() {
    if(dropDown.className.indexOf('hidden')  >= 0){
        dropDown.classList.remove('hidden');
    } else {
        dropDown.classList.add('hidden');
    }
  })

  $('.setting__dropdown__option').click(function(e) {
    e.preventDefault();

    var dropDown = document.querySelector('.setting__dropdown'),
        dropDownButton = document.querySelector('.setting__dropdown-button');

    dropDown.classList.add('hidden');
    dropDownButton.textContent = e.target.textContent;
    console.log(e.target.textContent);
    document.querySelector('body').className =' ' + e.target.id;
  });

});
