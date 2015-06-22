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

  // No-op helper for links and buttons
  $('.noop').on('click', function ( event ) {
    event.preventDefault();
  });
});

// View switch
$(function() {
  if ( typeof(Storage) === "undefined") {
    // Browser does not support storage, no-op
    return;
  }

  var screenWidth = $(window).width();
  var mobileViewSwitch = $("#view-switch [data-target='mobile']");
  var desktopViewSwitch = $("#view-switch [data-target='desktop']");

  // switch <meta viewport width> to given width
  function switchView ( width ) {
    $("meta[name='viewport']").attr('content', 'width='+width+', initial-scale=1');
  }
  // Show message for switching view
  // Accept target: mobile, desktop
  function showToggleBus ( target ) {
    switch (target) {
      case "mobile":
        mobileViewSwitch.removeClass('hidden');
        desktopViewSwitch.addClass('hidden');
        break;
      case "desktop":
        desktopViewSwitch.removeClass('hidden');
        mobileViewSwitch.addClass('hidden');
        break;
      default:
        console.warn('Invalid toggle bus: '+target);
        throw 'Invalid argument for showToggleBus';
    }
  }

  // Initialize localStorage variables
  if ( localStorage.forceDesktop === undefined ) {
    localStorage.forceDesktop = false;
  }

  // Register button click action
  $("#view-switch [data-target='mobile'] .toggle-button").on('click', function() {
    // Switch to mobile
    localStorage.forceDesktop = false;
    switchView(300);
    showToggleBus( 'desktop' );
  });
  $("#view-switch [data-target='desktop'] .toggle-button").on('click', function() {
    // Switch to desktop
    localStorage.forceDesktop = true;
    switchView(1024);
    showToggleBus( 'mobile' );
  });

  // Auto switch view if forceDesktop
  if ( localStorage.forceDesktop === "true" ) {
    switchView(1024);
    showToggleBus( 'mobile' );
  }

});
