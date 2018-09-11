import $ from 'jquery';
import { HeaderComponent } from './Components/Header';
import { LazyLoading } from './Modules/LazyLoad';
import { RenderSchedule } from './Modules/RenderSchedule';
import { Map } from './Components/Map';
import { SpeakersComponent } from './Components/Speakers';



class App {
  constructor(CONFIG) {
    this.CONFIG = CONFIG;

    this._initModules();
    this._initComponents();
  }

  _initModules() {
    // new RenderSpeakers();
    new RenderSchedule();
    new LazyLoading();
    this.map = new Map({
      selector : '#map'
    });
  }

  _initComponents() {
    new HeaderComponent();
    new SpeakersComponent();
  }
}


$('body').ready(() => {
  window.App = new App(window.CONFIG || {});
});