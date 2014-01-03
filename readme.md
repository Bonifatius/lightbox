# Lightbox

This is a simple lightbox class built with CoffeeScript. See the demo at [recurving.github.io/lightbox](http://recurving.github.io/lightbox).

It's inspired by [Fluidbox](http://codepen.io/terrymun/full/JKHwp) and how [Medium](http://medium.com) handles images, but written from scratch. I wanted to get rid of *blurry* edges caused by sub-pixel positioning (caused on Safari when the currently display image width/height plus the target width/height is uneven – in that case translating by 0.5 pixels takes care of it) and fit it more to my needs. I am mostly using [this method](http://alistapart.com/article/creating-intrinsic-ratios-for-video) to resize images – see also my [grid layout class](https://github.com/recurving/grid).

## Example usage

The HTML elements can have these attributes. Clicking on any image will open a lightbox with this image centered on the screen with the maximum size possible.

```html
<img width="384" height="256" data-max-width="1500" data-max-height="1000" data-image-large="large.jpg" src="small.jpg">
```

An explanation on these values:

  - `data-max-width` and `data-max-height` is the maximum size the image can have
  - `data-image-large` the image to replace the `src` with

By default the script opens every image in a lighbox. There is also a gap of 16 pixels from the corners of the browser (if the maximum size is big enough).
