import $ from 'jquery';
window.jQuery = $;
require('../vendors/jquery-tmpl/jquery.tmpl.min');
import { Popup } from '../Components/Popup';
import { Helpers } from '../Helpers';
import {SpeakersRu} from '../lang/ru/speakers-ru.js'
import {SpeakersEn} from '../lang/en/speakers-en.js'


export class RenderSpeakers {
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
      this.schedule = SpeakersRu;
    } else {
      this.schedule = SpeakersEn;
    }
    
    if( localStorage.speakersModalHtml && location.hash.search(/speakers-modal/) > -1 ) {
      $('#speakers-modal').html( localStorage.speakersModalHtml )
    }

    let speakerItem =
      '<div class="speaker-item">' +
      '<div data-remodal-target="speakers-modal" data-item-index="__ReplaceWithIndex">'+
      '<div class="speaker-img">' +
      '<img src="${image}" alt="${name}">' +
      '</div>' +
      '<div class="speaker-name">${name}</div>' +
      '<div class="speaker-position">${position} ' +
      '{{if company}}' +
      '@${company}' +
      '{{/if}}' +
      '</div>' +
      '<div class="speaker-report">' +
      '{{each rept }} {{html $value.title}} {{if $value.title}}</br> </br>{{/if}}{{/each}}' +
      '</div>' +
      '</div>'+
      '<div class="speaker-socials">{{html socialsRendered}}</div>' +
      '</div>';

    $.template('speakerTemplate', speakerItem);

    var socialsItem = "<a href='${link}' target='_blank'><i class='fa fa-${fatype}' aria-hidden='true'></i></a>";
    $.template( "socialsTemplate", socialsItem );


    let spekersHtml = '';

    $.each(this.schedule, function (i, sp) {
      let item = $.tmpl('speakerTemplate', sp)[0].outerHTML;
    });

    $('#shcedule-list').html(spekersHtml);

  }

  _events() {

  }
}