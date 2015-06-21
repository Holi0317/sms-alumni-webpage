$(function() {
  // auto active item in navbar
  var url = this.location.pathname;
  $("ul.nav a[href='" + url + "']").parent().addClass('active');
  $("ul.nav a[href='" + url.substring(1) + "']").parent().addClass('active');
  $('ul.nav a').filter(function() {return this.href == url;}).parent().addClass('active');

  // ADD SLIDEDOWN ANIMATION TO DROPDOWN //
  $('.dropdown').on('show.bs.dropdown', function(e){
    $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
  });

  // ADD SLIDEUP ANIMATION TO DROPDOWN //
  $('.dropdown').on('hide.bs.dropdown', function(e){
    $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
  });
});

// View switch
$(function() {
  // As saving of settings requires webstorage api,
  // if browser does not support them, nothing will show on the screen

  var screenWidth = $(window).width();

  if ( typeof(Storage) !== "undefined") {
    // Vertify support of Storage
    if ( screenWidth <= 992 && screenWidth > 768 ) {
      console.log('viewport can be swtiched');
      if ( localStorage.forceDesktop === undefined ) {
        // Init variable on startup
        localStorage.forceDesktop = false;
      }

      console.log('forceDesktop: ' + localStorage.forceDesktop);

      // switch viewport and show toggle button
      var viewport = $("head meta[name='viewport']");
      var viewSwitch = $('#view-switch').removeClass('hidden');
      if ( localStorage.forceDesktop === "true" ) {
        viewport.attr('content', 'width=1024, initial-scale=1');
        viewSwitch.children("[data-target='mobile']").removeClass('hidden').children('button').on('click', function() {
          localStorage.forceDesktop = false;
          location.reload(true);
        });
      } else {
        viewSwitch.children("[data-target='desktop']").removeClass('hidden').children('button').on('click', function() {
          localStorage.forceDesktop = true;
          location.reload(true);
        });
      }

    } else {
      // Remove localStorage.forceDesktop if it is viewing on desktop or mobile
      // This only happens in development
      if ( localStorage.forceDesktop !== undefined ) {
        localStorage.forceDesktop = undefined;
      }
    }
  }
});
