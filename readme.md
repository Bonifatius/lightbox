# Lightbox

This is a simple lightbox class built with CoffeeScript. See the demo at [recurving.github.io/lightbox](http://recurving.github.io/lightbox).

It's inspired by [Fluidbox](http://codepen.io/terrymun/full/JKHwp) (which itself was inspired how [Medium](http://medium.com) handles images), but written from scratch. I wanted to get rid of *blurry* edges caused by sub-pixel positioning and make a version that fits more my needs (I am mostly using [this method](http://alistapart.com/article/creating-intrinsic-ratios-for-video) to resize images – see also my [grid layout class](https://github.com/recurving/grid)).

## Example usage

The HTML img tag can have these attributes:

  - `data-max-width` and `data-max-height` is the maximum size the image can have
  - `data-image-large` the image to replace the `src` with

See also here:

```html
<img width="384" height="256" data-max-width="1500" data-max-height="1000" data-image-large="large.jpg" src="small.jpg">
```

Clicking on any image will open a lightbox with this image centered on the screen with the maximum size possible. By default the script opens every image in a lighbox (but you can change the selector of course). There is also a padding of 16 pixels which can be changed.
