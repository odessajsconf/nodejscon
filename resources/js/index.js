import $ from 'jquery';
import { HeaderComponent } from './Components/Header';
import { LazyLoading } from './Modules/LazyLoad';
import { Map } from './Components/Map';
import { SpeakersComponent } from './Components/Speakers';
import { ScheduleComponent } from './Components/Schedules';
import {Slider} from "./Components/Slider";



class App {
  constructor(CONFIG) {
    this.CONFIG = CONFIG;

    this._initModules();
    this._initComponents();
  }

  _initModules() {
    // new RenderSpeakers();
    // new RenderSchedule();
    new LazyLoading();

    this.map = new Map({
      selector : '#map'
    });
  }

  _initComponents() {
    new HeaderComponent();
    new SpeakersComponent();
    new ScheduleComponent();
    new Slider('#ticketSlider', {
        dots: true,
        fade: true,
        prevArrow: '<button class="slick-prev slider-arrow"><img src="public/img/tickets/arrow.png" alt=""></button>',
        nextArrow: '<button class="slick-next slider-arrow"><img src="public/img/tickets/arrow.png" alt=""></button>',
    });
  }
}


$('body').ready(() => {
  window.APP = new App(window.CONFIG || {});
});