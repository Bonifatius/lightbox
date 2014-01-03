class Lightbox

  constructor: (@elements) ->
    @settings = { padding: 12 }

    @elements.attr 'data-lighbox', 'true'
    @elements.click @click

    @background = $('<div class="lightbox-background"></div>').appendTo($('body'))
    @background.click => @clear(true)

    $(window).resize => @clear(false)
    $(window).keyup => @clear(true) if event.keyCode == 27

  maximize: (element) ->
    image_width = element.children('img').width()
    image_height = element.children('img').height()
    image_ratio = image_width / image_height

    zoom_width = $(window).width() - @settings.padding * 2
    zoom_height = $(window).height() - @settings.padding * 2
    zoom_width = Math.min(zoom_width, Number(element.attr('data-max-width'))) unless Number(element.attr('data-max-width')) == NaN
    zoom_height = Math.min(zoom_height, Number(element.attr('data-max-height'))) unless Number(element.attr('data-max-height')) == NaN
    zoom_ratio = zoom_width / zoom_height

    if image_ratio < zoom_ratio
      target_width = Math.round(zoom_height * image_ratio)
      target_height = zoom_height
    else
      target_width = zoom_width
      target_height = Math.round(zoom_width / image_ratio)

    scale_x = target_width / image_width
    scale_y = target_height / image_height

    translate_x = $(window).scrollLeft() + 0.5 * $(window).width() - element.position().left - 0.5 * image_width
    translate_y = $(window).scrollTop() + 0.5 * $(window).height() - element.position().top - 0.5 * image_height
    translate_x = Math.round(translate_x) - ((image_width + target_width) % 2) * 0.5
    translate_y = Math.round(translate_y) - ((image_height + target_height) % 2) * 0.5

    @elements.removeClass 'lightbox-focus'
    element.addClass 'lightbox-opened lightbox-focus'
    @load(element)
    @background.addClass 'lightbox-background-show'
    @zoom(element, "translate(#{translate_x}px, #{translate_y}px) scale(#{scale_x}, #{scale_y})")

  minimize: (element) ->
    element.removeClass 'lightbox-opened'
    @background.removeClass 'lightbox-background-show'
    @zoom(element, "translate(0, 0) scale(1, 1)")

  zoom: (element, transform) ->
    element.children('img').css
      '-webkit-transform': transform,
      '-moz-transform': transform,
      'transform': transform

  click: (event) =>
    element = $(event.target).parent()
    element.addClass 'lightbox-animate'
    if element.hasClass 'lightbox-opened' then @minimize(element) else @maximize(element)

  clear: (animate = false) ->
    for element in @elements
      element = $(element)
      if element.hasClass 'lightbox-opened'
        element.removeClass 'lightbox-animate' unless animate
        @minimize(element)

  load: (element) ->
    if element.attr 'data-image-large'
      unless element.attr 'data-image-large-loaded'
        element.children('img').css 'background-image', "url('#{element.children('img').attr('src')}')"
        element.children('img').load ->
          $(this).css 'background-image', 'none'
        element.children('img').attr 'src', element.attr 'data-image-large'
        element.attr 'data-image-large-loaded', 'true'

$ ->
  new Lightbox($('div.asset')) if Modernizr.csstransforms