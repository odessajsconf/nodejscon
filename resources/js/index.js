import $ from 'jquery';
import { HeaderComponent } from './Components/Header';

class App {
    constructor(CONFIG) {
        this.CONFIG = CONFIG;

        this._initModules();
        this._initComponents();
    }
    _initModules() {
    }

    _initComponents() {
        new HeaderComponent();
    }
}


$('body').ready(() => {
	window.App = new App(window.CONFIG || {});
});