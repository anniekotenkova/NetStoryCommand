$(window).on("load", function() {
  document.getElementsByTagName('body')[0].dataset.layer = 1
  $(".draggable").draggable()

  $(".folderFolder").click(function(e) {
      e.preventDefault()
      $('#clickSound').get(0).play()
    })
})
