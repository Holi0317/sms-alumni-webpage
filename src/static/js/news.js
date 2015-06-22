$(function() {
  // Slide in summery on clicking item box
  $('#news-list td').each(function() {
    $(this).on('click', function() {
      var summary = $(this).children('.summary');
      var shown = $('#news-list .shown');

      if ( shown.length === 1 ) {
        // Hide already shown summary
        shown.slideUp().removeClass('shown');
      }
      // Show summary
      if ( ! shown.is(summary) ) {
        summary.slideDown().addClass('shown');
      }
    });
  });

});
