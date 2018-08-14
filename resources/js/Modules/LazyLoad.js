import $ from "jquery";

export class LazyLoading {
  constructor() {
    this.lazyLoadTimeout = null;
    this._init();
    this._events();
  }

  _init() {
    this.initLazyLoad();
  }

  _events() {
    let that = this;
    $(window).on('scroll', $.proxy(this._lazyLoadHandler, that) );
  }

  _lazyLoadHandler () {
    clearTimeout( this.lazyLoadTimeout );

    this.lazyLoadTimeout = setTimeout( () => {
      this.initLazyLoad();
    }, 100);
  }

  initLazyLoad() {
    let windowTopPosition = $(window)[0].pageYOffset,
      windowBottomPosition = $(window)[0].pageYOffset + $(window)[0].innerHeight,
      $items = $('[data-bg-src], [data-src]'),
      showOffsets = $(window)[0].innerHeight;

    if(!$items.length) {
      $(window).unbind('scroll', this._lazyLoadHandler);
    }

    if( window.matchMedia("(max-width: 768px)").matches ){
      showOffsets =  $(window)[0].innerHeight * 4;
    }

    $items.each( (i, item) => {
      if (
        ( windowTopPosition - ( $(item).offset().top + $(item).height ) <= showOffsets ) ||
        (windowBottomPosition + showOffsets >= $(item).offset().top )
      ) {
        setSource(item)
      }
    });

    function setSource (img) {


      if ( img.hasAttribute("data-bg-src") ){
        $(img).css({
          'background-image' : `url(${ img.getAttribute('data-bg-src') })`
        });

        img.removeAttribute('data-bg-src');
        img.setAttribute('data-bg', '');
      } else {
        img.setAttribute('src', img.getAttribute('data-src'));

        img.onload = () => {
          img.removeAttribute('data-src');
        };
      }

    }
  }

}