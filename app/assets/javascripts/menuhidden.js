$(function() {
  var dropDown = document.querySelector('.settingDropdown'),
  dropDownButton = document.querySelector('.settingDropdownButton')

  startTime()

  $('#start').click(function(e) {
    e.preventDefault()
    e.stopPropagation()
    $('#setting').toggle()
    $(this).toggleClass('startClick')
    $('#clickSound').get(0).play()
  })

  $('#setting').click( function(e) {
    e.stopPropagation()
  })

  $('#Desktop').click( function(е) {
    $('#setting').hide()
  })

  $('.settingDropdownButton').click(function(e) {
    e.preventDefault()
    $('#clickSound').get(0).play()
    var dropDown = document.querySelector('.settingDropdown')
    if (dropDown.className.indexOf('hidden') >= 0) {
      dropDown.classList.remove('hidden')
    } else {
      dropDown.classList.add('hidden')
    }
  })

  $('.settingDropdownOption').click(function(e) {
    e.preventDefault()
    $('#clickSound').get(0).play()
    dropDown.classList.add('hidden')
    dropDownButton.textContent = e.target.textContent;

    document.querySelector('body').className = e.target.id;
  })

  $('.update').click(function(e) {
    $('.updateOS').removeClass('hidden')
    e.preventDefault()
    $('#clickSound').get(0).play()
  })

  $('.colorsbtn').click(function(e) {
    $('.colorsChange').removeClass('hidden')
    e.preventDefault()
    $('#clickSound').get(0).play()
  })

  $('.closeCardColor').click(function(e) {
    e.stopPropagation()
    $('.colorsChange').addClass('hidden')
    e.preventDefault()
    $('#clickSound').get(0).play()
  })

  $('.filtersbtn').click(function(e) {
    $('.filtersChange').removeClass('hidden')
    e.preventDefault()
    $('#clickSound').get(0).play()
  })

  $('.closeCardFilter').click(function(e) {
    e.stopPropagation()
    $('.filtersChange').addClass('hidden')
    e.preventDefault()
    $('#clickSound').get(0).play()
  })


  //turning off

  $('.shutDown').on('click', function(e) {
    e.preventDefault()
    $('#shutDownSound').get(0).play()
    $('.screenBack').removeClass('hidden')
    $('.screen').delay('4s').show()
    $('.screen').toggleClass('shutdown')
    $('#clickSound').get(0).play()
  })

  //sleep mode
  $('.logOut').on('click', function(e) {
    $('.sleepMode').removeClass('hidden')
    e.preventDefault()
    $('#clickSound').get(0).play()
  })
  $('.user').on('click', function(e) {
    location.reload(true)
    e.preventDefault()
    $('#clickSound').get(0).play()
  })
})
