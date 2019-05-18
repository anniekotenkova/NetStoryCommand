$(function() {
  var error = document.getElementById("errorSound")

  $('.closeBtnInactive').click(function(e) {
    e.preventDefault()
    error.play()
  })
})
