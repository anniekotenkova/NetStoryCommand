$(function() {
  var dropDown = document.querySelector('.settingDropdown'),
  dropDownButton = document.querySelector('.settingDropdownButton')

  startTime()

  $('#start').click(function(e) {
    e.preventDefault();
    e.stopPropagation();
    $('#setting').toggle()
    $(this).toggleClass('startClick')
  })

  $('#setting').click( function(e) {
    e.stopPropagation();
  })
  
  $('#Desktop').click( function() {
    $('#setting').hide();
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

  $('.closeCardColor').click(function() {
    $('.colorsChange').addClass('hidden')
  })

  $('.filtersbtn').click(function() {
    $('.filtersChange').removeClass('hidden')
  })

  $('.closeCardFilter').click(function() {
    $('.filtersChange').addClass('hidden')
  })

})
