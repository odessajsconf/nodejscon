import $ from 'jquery';
window.jQuery = $;
require('../vendors/jquery-tmpl/jquery.tmpl.min');
import { GoogleApiModule } from '../Modules/GoogleApi';
import { Helpers } from '../Helpers';

export class Map {

  constructor(options) {
    this.GoogleApiModule = new GoogleApiModule();
    this.Helpers = new Helpers();
    this.CONFIG = window.CONFIG;
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
      // gestureHandling : 'greedy'
    }, this.mapOptions);

    this.markers = [];

    const PlacesEn = [
      {
        lat : 46.436590,
        lng : 30.749558,
        infoWindow : this.renderInfoWindowHTML({
          title : 'Business-center Solnechnyiy',
          content : '<p><span>Address: </span>5, Sonyachna St.</p>'
        })
      },
      {
        lat : 46.480186,
        lng : 30.7476283,
        infoWindow : this.renderInfoWindowHTML({
          title : 'office of the company Lohika',
          content : '<p><span>Address: </span>1, Bunina St.</p>'
        })
      },
    ];

    const PlacesRu = [
      {
        lat : 46.436590,
        lng : 30.749558,
        infoWindow : this.renderInfoWindowHTML({
          title : 'Бизнес-центр Солнечный',
          content : '<p><span>Адрес: </span>Солнечная, 5</p>'
        })
      },
      {
        lat : 46.480186,
        lng : 30.7476283,
        infoWindow : this.renderInfoWindowHTML({
          title : 'Офис компании Lohika',
          content : '<p><span>Адрес: </span>Бунина, 1</p>'
        })
      },
    ];


    if(this.CONFIG.LANG === 'ru') {
      this.places = PlacesRu;
    } else {
      this.places = PlacesEn;
    }

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
    this.bounds = new this.google.maps.LatLngBounds();
    this.infowindow = new this.google.maps.InfoWindow();
    this.drop();
  }

  drop() {
    this.clearMarkers();

    for (let i = 0; i < this.places.length; i++) {
      this.addMarkerWithTimeout(this.places[i], i * 200);
    }
    //крайние точки
    this.bounds.extend({lat : 46.42, lng : 30.749558});
    this.bounds.extend({lat : 46.51, lng : 30.749558});
    //крайние точки

    this.places.forEach((item, i, arr)=>{
      this.bounds.extend(item);
    });

    this.map.fitBounds(this.bounds);
  }

  addMarkerWithTimeout(position, timeout) {
    window.setTimeout(() => {
      let pin = new this.google.maps.Marker({
        position : position,
        map : this.map,
        animation : this.google.maps.Animation.DROP
      });

      this.markers.push(pin);
      this.bounds.extend(pin.getPosition());

      this.google.maps.event.addListener(pin, 'click', ((pin, i) => {
        return () => {
          this.infowindow.setContent(position.infoWindow);
          this.infowindow.open(map, pin);
        };
      })(pin));
    }, timeout);
  }

  clearMarkers() {
    for (let i = 0; i < this.markers.length; i++) {
      this.markers[i].setMap(null);
    }
    this.markers = [];
  }


  renderInfoWindowHTML(content) {
    let infoWindowBlock =
      '<div class="infoWindow-content">' +
      '<h3>${title}</h3>' +
      '<div class="flex justify-content-between mb-1">\n' +
      // '<div class="">' +
      // '<a href="${link}" target="_blank">\n' +
      // '  <img src="${img}" alt="logo">\n' +
      // '</a>' +
      // '</div>\n' +
      '<div class="pl-2">' +
      '<div>' +
      '{{html content}}' +
      '</div>' +
      '</div>\n' +
      '</div>' +
      '</div>';

    $.template('infoWindowBlockTemplate', infoWindowBlock);

    return $.tmpl('infoWindowBlockTemplate', content)[0].outerHTML;
  }

}
