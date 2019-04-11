$(function() {
  $('.cbFastLinkErwise').click(function() {
    console.log('Click')
    $('#fastLinkErwise').remove()
  })

  $('.closeFastLinkAtt').click(function() {
    console.log('Click')
    $('#fastLinkAtt').remove()
  })

  $('.closeCard').click(function() {
    console.log('Click')
    $('.card').remove()
  })
})
