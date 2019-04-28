$(function() {
  var dropDown = document.querySelector('.settingDropdown'),
  dropDownButton = document.querySelector('.settingDropdownButton')

  startTime()

  $('#start').click(function(e) {
    e.preventDefault()
    e.stopPropagation()
    $('#setting').toggle()
    $(this).toggleClass('startClick')
  })

  $('#setting').click( function(e) {
    e.stopPropagation()
  })

  $('#Desktop').click( function(е) {
    $('#setting').hide()
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

  $('.colorsbtn').click(function(e) {
    $('.colorsChange').removeClass('hidden')
  })

  $('.closeCardColor').click(function(e) {
    e.stopPropagation()
    $('.colorsChange').addClass('hidden')
  })

  $('.filtersbtn').click(function(e) {
    $('.filtersChange').removeClass('hidden')
  })

  $('.closeCardFilter').click(function(e) {
    e.stopPropagation()
    $('.filtersChange').addClass('hidden')
  })


  //turning off

  $('.shutDown').on('click', function(e) {
    $('.screenBack').removeClass('hidden')
    $('.screen').delay('4s').show()
    $('.screen').toggleClass('shutdown')
  })
  $('.pressRestart').on('click', function() {
    location.reload(true)
  })
})
