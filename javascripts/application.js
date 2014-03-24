(function(){var t,e=function(t,e){return function(){return t.apply(e,arguments)}};t=function(){function t(t,o){this.elements=t,this.padding=null!=o?o:16,this.click=e(this.click,this),this.keyup=e(this.keyup,this),this.elements.attr("data-lightbox","true"),this.elements.click(this.click),$("body").css("position","relative"),this.background=$('<div class="lightbox-background"></div>').appendTo($("body")),this.background.click(function(t){return function(){return t.collapse(!0)}}(this)),$(window).resize(function(t){return function(){return t.collapse(!1)}}(this)),$(window).scroll(function(t){return function(){return Math.abs($(window).scrollTop()-t.scroll_top||$(window).scrollTop())>t.padding?t.collapse(!0):void 0}}(this)),$(window).keyup(this.keyup)}return t.prototype.keyup=function(t){var e,o;return 27===t.keyCode&&this.collapse(!0),(39===(e=t.keyCode)||74===e)&&this.show(!0),37===(o=t.keyCode)||75===o?this.show(!1):void 0},t.prototype.show=function(t){var e,o,i,n,s,a;for(null==t&&(t=!0),a=this.elements,o=n=0,s=a.length;s>n;o=++n)if(e=a[o],$(e).hasClass("lightbox-opened")){i=o;break}return null!=i?(e=$(this.elements[i]),e.removeClass("lightbox-animate"),e.removeClass("lightbox-opened"),e.css("z-index","auto"),this.zoom(e,"translate(0, 0) scale(1, 1)"),i=t?(i+1)%this.elements.length:(i-1+this.elements.length)%this.elements.length,e=$(this.elements[i]),e.removeClass("lightbox-animate"),this.maximize(e)):void 0},t.prototype.maximize=function(t){var e,o,i,n,s,a,r,l,h,d;return this.scroll_top=$(window).scrollTop(),i=t.width(),e=t.height(),o=i/e,d=$(window).width()-2*this.padding,l=$(window).height()-2*this.padding,0/0!==Number(t.attr("data-max-width"))&&(d=Math.min(d,Number(t.attr("data-max-width")))),0/0!==Number(t.attr("data-max-height"))&&(l=Math.min(l,Number(t.attr("data-max-height")))),h=d/l,h>o?d=Math.round(l*o):l=Math.round(d/o),n=d/i,s=l/e,a=Math.round($(window).scrollLeft()+.5*$(window).width()-t.offset().left-.5*i)-(i+d)%2*.5,r=Math.round($(window).scrollTop()+.5*$(window).height()-t.offset().top-.5*e)-(e+l)%2*.5,this.clear(),t.addClass("lightbox-opened"),t.css("z-index",1),this.load(t),this.background.addClass("lightbox-background-show"),this.zoom(t,"translate("+a+"px, "+r+"px) scale("+n+", "+s+")")},t.prototype.minimize=function(t,e){return null==e&&(e=!0),t.removeClass("lightbox-opened"),this.background.removeClass("lightbox-background-show"),e&&(this.background.addClass("lightbox-background-close"),setTimeout(function(t){return function(){return t.background.removeClass("lightbox-background-close")}}(this),250)),this.zoom(t,"translate(0, 0) scale(1, 1)")},t.prototype.zoom=function(t,e){return t.css({"-webkit-transform":e,"-moz-transform":e,transform:e})},t.prototype.click=function(t){var e;return e=$(t.target),e.addClass("lightbox-animate"),e.hasClass("lightbox-opened")?this.minimize(e):this.maximize(e)},t.prototype.clear=function(){var t,e,o,i,n;for(i=this.elements,n=[],e=0,o=i.length;o>e;e++)t=i[e],n.push($(t).css("z-index","auto"));return n},t.prototype.collapse=function(t){var e,o,i,n,s;for(null==t&&(t=!0),n=this.elements,s=[],o=0,i=n.length;i>o;o++)e=n[o],e=$(e),e.hasClass("lightbox-opened")?(t?e.addClass("lightbox-animate"):e.removeClass("lightbox-animate"),s.push(this.minimize(e,t))):s.push(void 0);return s},t.prototype.load=function(t){return t.attr("data-image-large")&&!t.attr("data-image-large-replaced")?(t.css("background-image","url('"+t.attr("src")+"')"),t.load(function(){return $(this).css("background-image","none")}),t.attr("src",t.attr("data-image-large")),t.attr("data-image-large-replaced","true")):void 0},t}(),$(function(){return Modernizr.csstransforms?new t($("img")):void 0})}).call(this);