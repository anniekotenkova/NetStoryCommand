$(window).on("load", function() {
  $("#containerFolder_9").droppable({
      accept: "#containerFolder_2",
      drop: function(event, ui) {
        $('.screenBack').removeClass('hidden')
        $('.screen').delay('4s').show()
        $('.screen').toggleClass('shutdown')
      }
  })
  // document.addEventListener('dragover', function(event, ui) {
  //   console.log('hi')
  //   event.this.addClass("hover")
  //   event.preventDefault()
  // }, false)
})
