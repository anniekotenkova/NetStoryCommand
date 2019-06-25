$(window).on("load", function() {
  $("#containerFolder_9").droppable({
    accept: "#containerFolder_2",
    classes: {
      "ui-droppable-hover": "ui-state-hover"
    },
    drop: function(event, ui) {
      $('.screenBack').removeClass('hidden')
      $('.screen').delay('4s').show()
      $('.screen').toggleClass('shutdown')
    }
  })
})
