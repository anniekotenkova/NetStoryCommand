$(window).on("load", function() {
  document.getElementsByTagName('body')[0].dataset.layer = 1

  var layer = parseInt(document.getElementsByTagName('body')[0].dataset.layer)

  $(".draggable").draggable({
    // var self = this
    // zIndex: layer,
    start: function() {
      layer = parseInt(document.getElementsByTagName('body')[0].dataset.layer) + 1
      document.getElementsByTagName('body')[0].dataset.layer = layer
      $(this).css("z-index", layer)
    },
    stop: function() {
      $(this).css("z-index", layer)
    }
  })

  $(".folderFolder").click(function(e) {
    e.preventDefault()
    $('#clickSound').get(0).play()
  })
})
