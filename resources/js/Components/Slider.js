/**
 * Created by developer on 02.08.2017.
 */

import $ from 'jquery';
require('../../node_modules/slick-carousel/slick/slick.js');

export class Slider {

    constructor(selector, options) {
        this.selector = selector;
	      this.options = {};
        this.defaulOptions = {
            prevArrow: '<button class="slick-prev slider-arrow"></button>',
            nextArrow: '<button class="slick-next slider-arrow"></button>',
            adaptiveHeight : true
        };

        $.extend(this.options, this.defaulOptions, options);
        return this._initSlider();
    }

    _initSlider() {
        return $(this.selector).slick(this.options);
    }

}
