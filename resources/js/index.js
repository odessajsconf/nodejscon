import $ from 'jquery';
import { HeaderComponent } from './Components/Header';
import { RenderSpeakers } from './Modules/RenderSpeakers';
import { LazyLoading } from './Modules/LazyLoad';
import { RenderSchedule } from './Modules/RenderSchedule';
import { Map } from "./Components/Map";



class App {
  constructor(CONFIG) {
    this.CONFIG = CONFIG;

    this._initModules();
    this._initComponents();
  }

  _initModules() {
    new RenderSpeakers();
    new RenderSchedule();
    new LazyLoading();
    // this.map = new Map({
    //   selector: '#map',
    // });
  }

  _initComponents() {
    new HeaderComponent();
  }
}


$('body').ready(() => {
  window.App = new App(window.CONFIG || {});
});