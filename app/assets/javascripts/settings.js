$(function() {

  // background color change
  $("#pink").click(function() {
    $('#Desktop').css('background', '#FF85A6')
    $('.folderFolder a').removeClass('black')
  })

  $("#blue").click(function() {
    $('#Desktop').css('background', '#2196F3')
    $('.folderFolder a').removeClass('black')
  })

  $("#yellow").click(function() {
    $('#Desktop').css('background', '#FEC006')
    $('.folderFolder a').removeClass('black')
  })

  $("#black").click(function() {
    $('#Desktop').css('background', '#1B1725')
    $('.folderFolder a').addClass('black')
  })
})
