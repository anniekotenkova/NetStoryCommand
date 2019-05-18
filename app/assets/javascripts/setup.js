$(window).on("load", function() {
  document.getElementsByTagName('body')[0].dataset.layer = 1
  $(".draggable").draggable()
  $("#containerFolder_9").droppable({
    accept: "#containerFolder_2",
    drop: function(event, ui) {
      $('.screenBack').removeClass('hidden')
    }
  })
})
