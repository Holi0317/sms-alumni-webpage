$ ->
  $.material.init()

  url = window.location
  $("ul.nav a[href='#{url}']").parent().addClass('active')
  $('ul.nav a').filter( ->
    return @href == url
  ).parent().addClass('active')

  $('.dropdown').on('show.bs.dropdown', ->
    $(@).find('.dropdown-menu').addClass('animated fadeInDown')
  )

  $('.dropdown').on('hide.bs.dropdown', ->
    $(@).find('.dropdown-menu').removeClass('animated fadeInDown')
  )
