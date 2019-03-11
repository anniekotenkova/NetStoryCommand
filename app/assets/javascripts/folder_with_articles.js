$(function(){
  $("#folderfolder").dblclick(function() {
    $.ajax({
      url: "folderWithArticles",
      dataType: "script"
    })
  })
})
