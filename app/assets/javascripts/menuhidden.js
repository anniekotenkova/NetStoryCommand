$(function() {
  var dropDown = document.querySelector('.settingDropdown'),
  dropDownButton = document.querySelector('.settingDropdownButton')

  startTime()

  $('#start').click(function() {
    $('#setting').toggle()
    $(this).toggleClass('startClick')
  })

  $('.settingDropdownButton').click(function() {
    var dropDown = document.querySelector('.settingDropdown')
    if (dropDown.className.indexOf('hidden') >= 0) {
      dropDown.classList.remove('hidden')
    } else {
      dropDown.classList.add('hidden')
    }
  })

  $('.settingDropdownOption').click(function(e) {
    console.log('Filter')
    e.preventDefault()

    dropDown.classList.add('hidden')
    dropDownButton.textContent = e.target.textContent;

    document.querySelector('body').className = e.target.id;
  })

  $('.colorsbtn').click(function() {
    $('.colorsChange').removeClass('hidden')
  })
  
  $('.filtersbtn').click(function() {
    $('.filtersChange').removeClass('hidden')
  })

})
