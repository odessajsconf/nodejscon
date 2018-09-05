export let GoogleMapsLoader 	   = require('google-maps');
GoogleMapsLoader.KEY       = window.CONFIG.GOOGLE_API_KEY || 'AIzaSyDnuSJ4WLgoHZ3io1MRIlheBo7DsNpwUHM';
// GoogleMapsLoader.LIBRARIES = ['places'];

export class GoogleApiModule {

	constructor() {
		return GoogleMapsLoader;
	}

}