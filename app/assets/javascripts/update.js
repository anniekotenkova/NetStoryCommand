$(function() {

  $('.closeBtnInactive').click(function(e) {
    e.preventDefault()
    $('#errorSound').get(0).play()
  })

  $('.cancel').click(function(e) {
    e.preventDefault()
    $('#errorSound').get(0).play()
  })
})
