import $ from 'jquery';
import { GoogleApiModule } from '../Modules/GoogleApi';
import { Helpers } from '../Helpers';



export class Map {

  constructor(options) {
    this.GoogleApiModule = new GoogleApiModule();
    this.Helpers = new Helpers();
    this.google = null;
    this.selector = options.selector;
    this.mapOptions = options.mapOptions || {};

    this.options = $.extend({
      zoom : 12,
      maxZoom : 20,
      center : {
        lat : 46.436590,
        lng : 30.749558
      },
      clickableIcons : false,
      gestureHandling : 'greedy'
    }, this.mapOptions);

    this.markers = [];
    this.places = [
      {
        lat : 46.436590,
        lng : 30.749558
      },
    ];

    this._events();
  }

  onLoad(callback) {
    this.callback = callback;
  }

  _events() {
    this.GoogleApiModule.load((google) => {
      this.google = google;
      this._initMap();
      if(typeof this.callback === 'function') this.callback();
    });


  }

  _initMap() {
    this.map = new this.google.maps.Map(document.querySelector(this.selector), this.options);
  }

}
