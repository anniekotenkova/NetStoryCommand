//= require jquery
//= require jquery_ujs
//= require jquery-ui/widgets/mouse
//= require jquery-ui/widgets/draggable
//= require jquery-ui/widgets/droppable
//= require jquery-ui/widgets/resizable
//= require jquery-ui/widgets/selectable
//= require jquery-ui/widgets/sortable
//= require rails_sortable


$(function() {
  $('.draggable').draggable();
  $('.ui-resizable-handle').resizable();
});
