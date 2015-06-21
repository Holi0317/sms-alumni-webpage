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

  // When close button is clicked, hide its parent container
  $('button.close').on('click', function ( event ) {
    event.preventDefault();
    $(this).parents('.container').first().addClass('hidden');
  });
});

// View switch
$(function() {
  // As saving of settings requires webstorage api,
  // if browser does not support them, nothing will show on the screen

  var screenWidth = $(window).width();
  var allViewSwitch;
  var viewSwitch;

  if ( typeof(Storage) !== "undefined") {
    // Vertify support of Storage
    if ( screenWidth <= 992 && screenWidth >= 768 ) {
      console.log('viewport can be swtiched');
      // localStorage convert all values to string. This prevent 'undefined' during development
      if ( localStorage.forceDesktop === undefined || localStorage.forceDesktop === "undefined" ) {
        // Init variable on startup
        localStorage.forceDesktop = false;
      }

      console.log('forceDesktop: ' + localStorage.forceDesktop);

      allViewSwitch = $('#view-switch').removeClass('hidden');
      if ( localStorage.forceDesktop === "true" ) {
        $("meta[name='viewport']").attr('content', 'width=1024, initial-scale=1');
        // Show toggle box
        viewSwitch = allViewSwitch.children("[data-target='mobile']").removeClass('hidden');
        
        // register event
        viewSwitch.children('.toggle-button').on('click', function() {
          localStorage.forceDesktop = false;
          location.reload(true);
        });
      } else {
        // Show toggle box
        viewSwitch = allViewSwitch.children("[data-target='desktop']").removeClass('hidden');
        
        // register event
        viewSwitch.children('.toggle-button').on('click', function() {
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
