# Lightbox

This is a simple lightbox class built with CoffeeScript. See the demo at [recurving.github.io/lightbox](http://recurving.github.io/lightbox).

Inspired by [Fluidbox](http://codepen.io/terrymun/full/JKHwp) and how [Medium](http://medium.com) handles images I wanted to make a lightbox module using CSS-transforms without having blurry edges caused by sub-pixel positioning. Also it should fit more my needs as I am mostly using [this method](http://alistapart.com/article/creating-intrinsic-ratios-for-video) to resize images (for example in [this grid layout module](https://github.com/recurving/grid)).

## Example usage

The HTML img tag can have these attributes:

  - `data-max-width` and `data-max-height` is the maximum size the image can have
  - `data-image-large` the image to replace the `src` with

It looks like this then:

```html
<img src="small.jpg" width="384" height="256"
     data-image-large="large.jpg" data-max-width="1500" data-max-height="1000">
```

Clicking on any image will open a lightbox with this image centered on the screen with the maximum size possible. By default the script opens every image in a lightbox (but you can change the selector of course). There is also a padding of 16 pixels which can be changed. The lightbox will be closed by resizing the browser (without animation), scrolling or pressing ESC (with animation). One can cycle through the images using the arrow keys.
