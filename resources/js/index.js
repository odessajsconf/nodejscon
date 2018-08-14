import $ from 'jquery';
import { HeaderComponent } from './Components/Header';
import { RenderSpeakers } from './Modules/RenderSpeakers';
import { LazyLoading } from './Modules/LazyLoad';




class App {
  constructor(CONFIG) {
    this.CONFIG = CONFIG;

    this._initModules();
    this._initComponents();
  }

  _initModules() {
    new LazyLoading();
  }

  _initComponents() {
    new HeaderComponent();
    new RenderSpeakers();
  }
}


$('body').ready(() => {
  window.App = new App(window.CONFIG || {});
});