import {Helpers} from "../Helpers";

export class BaseModule {

    constructor() {
        this.CONFIG  = window.CONFIG || {};
        this.Helpers = new Helpers();
        this._events();
    }

    _events() {

    }

}