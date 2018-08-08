import $ from 'jquery';
require('../../../node_modules/remodal/src/remodal');

export class Popup {

    constructor(selector, options) {
        this.selector = selector;

        this.defaulOptions = {};

        this.options = $.extend(this.defaulOptions, options);
        return this._initPopup();
    }

    _initPopup() {
        return $(this.selector).remodal(this.options);
    }

}