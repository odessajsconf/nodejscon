import $ from 'jquery';
import { HeaderComponent } from './Components/Header';
import { Popup } from './Components/Popup';
import { RenderSpeakers } from './Modules/RenderSpeakers';




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
    new RenderSpeakers();
  }
}


$('body').ready(() => {
  window.App = new App(window.CONFIG || {});
});