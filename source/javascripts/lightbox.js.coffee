class Lightbox

  constructor: (@elements, @padding = 16) ->
    @elements.attr 'data-lighbox', 'true'
    @elements.click @click

    $('body').css 'position', 'relative'
    @background = $('<div class="lightbox-background"></div>').appendTo($('body'))
    @background.click => @collapse(true)

    $(window).resize => @collapse(false)
    $(window).scroll => @collapse(true) if Math.abs($(window).scrollTop() - @scroll_top || $(window).scrollTop()) > @padding
    $(window).keyup @keyup

  keyup: (event) =>
    @collapse(true) if event.keyCode == 27
    @show(true) if event.keyCode in [39, 74]
    @show(false) if event.keyCode in [37, 75]

  show: (next = true) ->
    for element, element_index in @elements
      if $(element).hasClass 'lightbox-opened'
        index = element_index
        break
    if index?

      element = $(@elements[index])
      element.removeClass 'lightbox-animate'
      element.removeClass 'lightbox-opened'
      element.css 'z-index', 'auto'
      @zoom(element, "translate(0, 0) scale(1, 1)")

      index = if next then (index + 1) % @elements.length else (index - 1 + @elements.length) % @elements.length
      element = $(@elements[index])
      element.removeClass 'lightbox-animate'
      @maximize(element)

  maximize: (element) ->
    @scroll_top = $(window).scrollTop()

    image_width = element.width()
    image_height = element.height()
    image_ratio = image_width / image_height

    zoom_width = $(window).width() - @padding * 2
    zoom_height = $(window).height() - @padding * 2
    zoom_width = Math.min(zoom_width, Number(element.attr('data-max-width'))) unless Number(element.attr('data-max-width')) == NaN
    zoom_height = Math.min(zoom_height, Number(element.attr('data-max-height'))) unless Number(element.attr('data-max-height')) == NaN
    zoom_ratio = zoom_width / zoom_height
    if image_ratio < zoom_ratio then zoom_width = Math.round(zoom_height * image_ratio) else zoom_height = Math.round(zoom_width / image_ratio)

    scale_x = zoom_width / image_width
    scale_y = zoom_height / image_height

    translate_x = Math.round($(window).scrollLeft() + 0.5 * $(window).width() - element.offset().left - 0.5 * image_width) - ((image_width + zoom_width) % 2) * 0.5
    translate_y = Math.round($(window).scrollTop() + 0.5 * $(window).height() - element.offset().top - 0.5 * image_height) - ((image_height + zoom_height) % 2) * 0.5

    @clear()
    element.addClass 'lightbox-opened'
    element.css 'z-index', 1

    @load(element)
    @background.addClass 'lightbox-background-show'
    @zoom(element, "translate(#{translate_x}px, #{translate_y}px) scale(#{scale_x}, #{scale_y})")

  minimize: (element, animate = true) ->
    element.removeClass 'lightbox-opened'
    @background.removeClass 'lightbox-background-show'
    if animate
      @background.addClass 'lightbox-background-close'
      setTimeout (=> @background.removeClass 'lightbox-background-close'), 250
    @zoom(element, "translate(0, 0) scale(1, 1)")

  zoom: (element, transform) ->
    element.css
      '-webkit-transform': transform,
      '-moz-transform': transform,
      'transform': transform

  click: (event) =>
    element = $(event.target)
    element.addClass 'lightbox-animate'
    if element.hasClass 'lightbox-opened' then @minimize(element) else @maximize(element)

  clear: ->
    for element in @elements
      $(element).css 'z-index', 'auto'

  collapse: (animate = true) ->
    for element in @elements
      element = $(element)
      if element.hasClass 'lightbox-opened'
        if animate then element.addClass 'lightbox-animate' else element.removeClass 'lightbox-animate'
        @minimize(element, animate)

  load: (element) ->
    if element.attr 'data-image-large'
      unless element.attr 'data-image-large-replaced'
        element.css 'background-image', "url('#{element.attr('src')}')"
        element.load -> $(this).css 'background-image', 'none'
        element.attr 'src', element.attr 'data-image-large'
        element.attr 'data-image-large-replaced', 'true'

$ ->
  new Lightbox($('img')) if Modernizr.csstransforms