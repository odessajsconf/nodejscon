import $ from 'jquery';
import { Popup } from '../Components/Popup';
import { Helpers } from '../Helpers';
import { ScheduleRu } from '../lang/ru/schedule-ru.js';
import { ScheduleEn } from '../lang/en/schedule-en.js';



window.jQuery = $;
require('../vendors/jquery-tmpl/jquery.tmpl.min');


// import {ScheduleEn} from '../lang/en/schedule-en.js'


export class RenderSchedule {
  constructor() {
    this.popup = new Popup('#speakers-modal');
    this.CONFIG = window.CONFIG;
    this.schedule = null;
    this._init();
    this._events();
    this.helpers = new Helpers();
  }


  _init() {
    if(this.CONFIG.LANG === 'ru') {
      this.schedule = ScheduleRu;
    } else {
      this.schedule = ScheduleEn;
    }

    let scheduleRow = '<div class="schedule-item">' +
      '                <div class="schedule-time">${ time }</div>' +
      '                <div class="schedule-icon ${ icon }"></div>' +
      '                    {{html scheduleRendered}}' +
      '              </div>';
    $.template('scheduleRow', scheduleRow);

    let scheduleItem = '<div class="schedule-text flex-item-1">' +
      '                  ${title}' +
      '                  <div class="schedule-author">' +
      '                    ${author}' +
      '                  </div>' +
      '                </div>';
    $.template('scheduleItemTemplate', scheduleItem);




    let scheduleHtml = '';

    $.each(this.schedule, function (i, schedule) {
      console.log(schedule)
      let talksHtml = '';

      $.each(schedule.talks, function (j, talk) {
        talksHtml += $.tmpl('scheduleItemTemplate', talk)[0].outerHTML;
      });

      schedule.scheduleRendered = talksHtml;

      let item = $.tmpl('scheduleRow', schedule)[0].outerHTML;
      console.log(item)

      scheduleHtml += item;

    });
    console.log(scheduleHtml)
    $('#schedule-list .schedule-body').html(scheduleHtml);

  }

  _events() {

  }
}