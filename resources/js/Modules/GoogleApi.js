export let GoogleMapsLoader = require('google-maps');
GoogleMapsLoader.KEY = window.CONFIG.GOOGLE_API_KEY;
// GoogleMapsLoader.LIBRARIES = ['places'];
GoogleMapsLoader.VERSION = window.CONFIG.GOOGLE_API_VERSION || '3.34';

/* Redefine GoogleMapsLoader method - creating url*/
GoogleMapsLoader.createUrl = function () {
  var url = GoogleMapsLoader.URL;

  url += '?callback=' + GoogleMapsLoader.WINDOW_CALLBACK_NAME;

  if(GoogleMapsLoader.KEY) {
    url += '&key=' + GoogleMapsLoader.KEY;
  }

  if(GoogleMapsLoader.LIBRARIES.length > 0) {
    url += '&libraries=' + GoogleMapsLoader.LIBRARIES.join(',');
  }

  if(GoogleMapsLoader.VERSION) {
    url += '&v=' + GoogleMapsLoader.VERSION;
  }
  if(GoogleMapsLoader.CLIENT) {
    url += '&client=' + GoogleMapsLoader.CLIENT;
  }

  if(GoogleMapsLoader.CHANNEL) {
    url += '&channel=' + GoogleMapsLoader.CHANNEL;
  }

  if(GoogleMapsLoader.LANGUAGE) {
    url += '&language=' + GoogleMapsLoader.LANGUAGE;
  }

  if(GoogleMapsLoader.REGION) {
    url += '&region=' + GoogleMapsLoader.REGION;
  }

  return url;
};


export class GoogleApiModule {

  constructor() {
    return GoogleMapsLoader;
  }

}