$ ->
  $.material.init()

  url = window.location
  $("ul.nav a[href='#{url}']").parent().addClass('active')
  $('ul.nav a').filter( ->
    return this.href == url
  ).parent().addClass('active')
