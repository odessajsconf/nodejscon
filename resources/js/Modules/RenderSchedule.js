import $ from 'jquery';
import { Helpers } from '../Helpers';



window.jQuery = $;
require('../vendors/jquery-tmpl/jquery.tmpl.min');


export class RenderSchedule {
  constructor(options) {
    this.CONFIG = window.CONFIG;
    this.schedule = null;
    this.options = options;
    this._init();
    this._events();
    this.helpers = new Helpers();
  }


  _init() {
    if(this.CONFIG.LANG === 'ru') {
      this.schedule = this.options.scheduleRu;
    } else {
      this.schedule = this.options.scheduleEn;
    }

    let scheduleRow = '<div class="schedule-item">' +
      '                <div class="schedule-time">${ time }</div>' +
      '                <div class="schedule-icon ${ icon }"></div>' +
      '                    {{html scheduleRendered}}' +
      '              </div>';
    $.template('scheduleRow', scheduleRow);

    let scheduleItem = '<div class="schedule-text flex-item-1">' +
      '                  {{html title}}' +
      '                  <div class="schedule-author">' +
      '                    ${author}' +
      '                  </div>' +
      '                </div>';
    $.template('scheduleItemTemplate', scheduleItem);


    let scheduleHtml = '';

    $.each(this.schedule, function (i, schedule) {
      let talksHtml = '';

      $.each(schedule.talks, function (j, talk) {
        talksHtml += $.tmpl('scheduleItemTemplate', talk)[0].outerHTML;
      });

      schedule.scheduleRendered = talksHtml;

      let item = $.tmpl('scheduleRow', schedule)[0].outerHTML;

      scheduleHtml += item;

    });

    $(`${this.options.container} .schedule-body`).html(scheduleHtml);
  }

  _events() {

  }
}