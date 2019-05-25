$(window).on("load", function() {
  document.getElementsByTagName('body')[0].dataset.layer = 1
  $(".draggable").draggable()
  $("#containerFolder_9").droppable({
    accept: "#containerFolder_2",
    drop: function(event, ui) {
      $('.screenBack').removeClass('hidden')
      $('.screen').delay('4s').show()
      $('.screen').toggleClass('shutdown')
    }
    // $("#containerFolder_9").bind('dragover', function(event, ui) {
    //   event.preventDefault()
    //   $(this).addClass('hover')
    // })
  })

})
