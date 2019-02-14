$(document).ready(function){
  $(".ajaxFolders").dblclick(function(){
    $.ajax({
      url: '/folders/'
      type: 'INDEX'
    })
  })
}
