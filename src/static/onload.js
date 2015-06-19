(function() {
  $(function() {
    var url;
    $.material.init();
    url = window.location;
    $("ul.nav a[href='" + url + "']").parent().addClass('active');
    $('ul.nav a').filter(function() {
      return this.href === url;
    }).parent().addClass('active');
    $('.dropdown').on('show.bs.dropdown', function() {
      return $(this).find('.dropdown-menu').addClass('animated fadeInDown');
    });
    return $('.dropdown').on('hide.bs.dropdown', function() {
      return $(this).find('.dropdown-menu').removeClass('animated fadeInDown');
    });
  });

}).call(this);
