function changeLayer(element, layer) {
  if ($(element).children(".folderFolder").length == 0) {
    $(element).css("z-index", layer)
  }
}

$(window).on("load", function() {
  document.getElementsByTagName('body')[0].dataset.layer = 1

  var layer = parseInt(document.getElementsByTagName('body')[0].dataset.layer)

  $(".draggable").draggable({
    // var self = this
    // zIndex: layer,
    start: function() {
      layer = parseInt(document.getElementsByTagName('body')[0].dataset.layer) + 1
      document.getElementsByTagName('body')[0].dataset.layer = layer
      changeLayer(this, layer)
    },
    stop: function() {
      changeLayer(this, layer)
    }
  })

  $(".folderFolder").click(function(e) {
    e.preventDefault()
    $('#clickSound').get(0).play()
  })
})
