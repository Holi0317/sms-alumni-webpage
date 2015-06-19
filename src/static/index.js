// Javasctipt file for index.html

// sub-nav toggle
// Toggle contents by clicking #sub-nav

$(function (){
  var subMenuChild = $('#sub-nav').children();
  for (i = 0; i < subMenuChild.length; i++) {
    var item = $(subMenuChild[i]);
    item.on('click', function( event ) {
      event.preventDefault();
      if ( $(this).hasClass('active') ) {
        // already actived
        return;
      }
      // Remove old context
      var selected = $('#sub-nav').children('.active');
      selected.toggleClass('active');
      $(selected.data().boundTo).collapse('toggle');

      // Show selected context
      var boundContext = $(this).toggleClass('active').data().boundTo;
      $(boundContext).collapse('toggle');
    });
  }
})
