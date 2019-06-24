$(window).on("load", function() {
  $("#containerFolder_9").droppable({
    accept: "#containerFolder_2",
    drop: function(event, ui) {
      $('.screenBack').removeClass('hidden')
      $('.screen').delay('4s').show()
      $('.screen').toggleClass('shutdown')
    }
  })
})
