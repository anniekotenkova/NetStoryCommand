//move to trash
$(function() {
$( "#containerFolder_9" ).droppable({
      drop: function( event, ui ) {

        // $( this )
        // alert( "dropped" )
        //   $('#containerFolder_2').hide()
        $('.screenBack').removeClass('hidden')
      }
    })
})
