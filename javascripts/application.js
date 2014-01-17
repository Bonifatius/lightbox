!function(){var t,o=function(t,o){return function(){return t.apply(o,arguments)}};t=function(){function t(t,i){var a=this;this.elements=t,this.padding=null!=i?i:16,this.click=o(this.click,this),this.elements.attr("data-lighbox","true"),this.elements.click(this.click),$("body").css("position","relative"),this.background=$('<div class="lightbox-background"></div>').appendTo($("body")),this.background.click(function(){return a.collapse(!0)}),$(window).resize(function(){return a.collapse(!1)}),$(window).scroll(function(){return Math.abs($(window).scrollTop()-a.scroll_top||$(window).scrollTop())>a.padding?a.collapse(!0):void 0}),$(window).keyup(function(){return 27===event.keyCode?a.collapse(!0):void 0})}return t.prototype.maximize=function(t){var o,i,a,e,n,r,s,l,d,c;return this.scroll_top=$(window).scrollTop(),a=t.width(),o=t.height(),i=a/o,c=$(window).width()-2*this.padding,l=$(window).height()-2*this.padding,0/0!==Number(t.attr("data-max-width"))&&(c=Math.min(c,Number(t.attr("data-max-width")))),0/0!==Number(t.attr("data-max-height"))&&(l=Math.min(l,Number(t.attr("data-max-height")))),d=c/l,d>i?c=Math.round(l*i):l=Math.round(c/i),e=c/a,n=l/o,r=Math.round($(window).scrollLeft()+.5*$(window).width()-t.offset().left-.5*a)-.5*((a+c)%2),s=Math.round($(window).scrollTop()+.5*$(window).height()-t.offset().top-.5*o)-.5*((o+l)%2),this.clear(),t.addClass("lightbox-opened"),t.css("z-index",1),this.load(t),this.background.addClass("lightbox-background-show"),this.zoom(t,"translate("+r+"px, "+s+"px) scale("+e+", "+n+")")},t.prototype.minimize=function(t,o){var i=this;return null==o&&(o=!0),t.removeClass("lightbox-opened"),this.background.removeClass("lightbox-background-show"),o&&(this.background.addClass("lightbox-background-close"),setTimeout(function(){return i.background.removeClass("lightbox-background-close")},250)),this.zoom(t,"translate(0, 0) scale(1, 1)")},t.prototype.zoom=function(t,o){return t.css({"-webkit-transform":o,"-moz-transform":o,transform:o})},t.prototype.click=function(t){var o;return o=$(t.target),o.addClass("lightbox-animate"),o.hasClass("lightbox-opened")?this.minimize(o):this.maximize(o)},t.prototype.clear=function(){var t,o,i,a,e;for(a=this.elements,e=[],o=0,i=a.length;i>o;o++)t=a[o],e.push($(t).css("z-index","auto"));return e},t.prototype.collapse=function(t){var o,i,a,e,n;for(null==t&&(t=!0),e=this.elements,n=[],i=0,a=e.length;a>i;i++)o=e[i],o=$(o),o.hasClass("lightbox-opened")?(t||o.removeClass("lightbox-animate"),n.push(this.minimize(o,t))):n.push(void 0);return n},t.prototype.load=function(t){return t.attr("data-image-large")&&!t.attr("data-image-large-replaced")?(t.css("background-image","url('"+t.attr("src")+"')"),t.load(function(){return $(this).css("background-image","none")}),t.attr("src",t.attr("data-image-large")),t.attr("data-image-large-replaced","true")):void 0},t}(),$(function(){return Modernizr.csstransforms?new t($("img")):void 0})}.call(this);