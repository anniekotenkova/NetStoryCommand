$(function() {

  // background color change
  $("#pink").click(function() {
    $('#Desktop').css('background', '#FF85A6')
    $('.folderfolder a').removeClass('black')
  })

  $("#blue").click(function() {
    $('#Desktop').css('background', '#2196F3')
    $('.folderfolder a').removeClass('black')
  })

  $("#yellow").click(function() {
    $('#Desktop').css('background', '#FEC006')
    $('.folderfolder a').removeClass('black')
  })

  $("#black").click(function() {
    $('#Desktop').css('background', '#1B1725')
    $('.folderfolder a').addClass('black')
  })
})
