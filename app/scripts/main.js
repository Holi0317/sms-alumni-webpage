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
  if ( typeof(Storage) === "undefined" || typeof InstallTrigger !== 'undefined' ) {
    // Browser does not support storage, hide switch options
    // Firefox (tested in 38.0.5-1 linux) does not respect to meta change. Disable if browser is firefox
    $("#view-switch-mobile").hide();
    $("#view-switch-desktop").hide();
    return;
  }

  var mobileViewSwitch = $("#view-switch-mobile").hide();

  // switch <meta viewport width> to given width
  function switchView ( width ) {
    $("meta[name='viewport']").attr('content', 'width='+width+', initial-scale=1');
  }
  function switchToDesktop() {
    localStorage.forceDesktop = true;
    switchView(1024);
    mobileViewSwitch.show();
  }
  function switchToMobile() {
    localStorage.forceDesktop = false;
    switchView(300);
    mobileViewSwitch.hide();
  }

  // Initialize localStorage variables
  if ( typeof(localStorage.forceDesktop) === "undefined" ) {
    localStorage.forceDesktop = false;
  }

  // Register button click action
  $("#view-switch-mobile .toggle-button").on('click', switchToMobile);
  $("#view-switch-desktop").on('click', switchToDesktop);

  // Auto switch view if forceDesktop
  if ( localStorage.forceDesktop === "true" ) {
    switchToDesktop();
  }

});
