import $ from 'jquery';
import { Popup } from '../Components/Popup';
import { Helpers } from '../Helpers';



window.jQuery = $;
require('../vendors/jquery-tmpl/jquery.tmpl.min');


export class RenderSpeakers {
  constructor(options) {
    this.options = options || {};
    this.$popupElem = $(`#${this.options.modal}`);
    this.popup = new Popup(this.$popupElem);
    this.CONFIG = window.CONFIG;
    this.speakers = null;
    this._init();
    this._events();
    this.helpers = new Helpers();
  }


  _init() {
    if(this.CONFIG.LANG === 'ru') {
      this.speakers = this.options.speakersRu;
    } else {
      this.speakers = this.options.speakersEn;
    }

    if(localStorage.speakersModalHtml && location.hash.search(`${this.options.modal}`) > -1) {
      this.$popupElem.html(localStorage.speakersModalHtml);
      this._bindNavControlsListeners();
    }

    let speakerItem =
      '<div class="speaker-item">' +
      `<div data-remodal-target="${this.options.modal}" data-item-index="__ReplaceWithIndex">` +
      '{{if image}}'+
      '<div class="speaker-img">' +      
      '<img src="${image}" alt="${name}">' +
      '</div>' +
      '{{/if}}'+
      '<div class="workshop-name">${title}</div>' +
      '<div class="speaker-name">${name}</div>' +
      '<div class="speaker-position">' +
      '{{each speakerPos }} {{html $value.position}} {{if company}} @ {{html $value.company}} {{/if}} <br> </br> {{/each}}' +
      '</div>' +
      '<div class="speaker-place">${place}</div>' +
      '<div class="speaker-report">' +      
      '{{if workshop_status}}'+
      '' +
      '{{else}}'+
      '{{each rept }} {{html $value.title}} {{if $value.title}}</br> </br>{{/if}}{{/each}}' +
      '{{/if}}'+
      '<div class="speaker-report__additional">${addInfo}</div>'+
      '</div>' +
      '</div>' +
      '<div class="speaker-socials">{{html socialsRendered}}</div>' +
      '{{if workshop_status}}'+
      '<hr></hr>' +
      '{{/if}}'+
      '</div>';
      

    $.template('speakerTemplate', speakerItem);

    var socialsItem = '<a href=\'${link}\' target=\'_blank\'><i class=\'fa fa-${fatype}\' aria-hidden=\'true\'></i></a>';
    $.template('socialsTemplate', socialsItem);


    let speakersHtml = '';

    $.each(this.speakers, (i, sp) => {
      $.each($.tmpl('socialsTemplate', sp.socials), function (a, i) {
        sp.socialsRendered += i.outerHTML;
      });

      let item = $.tmpl('speakerTemplate', sp)[0].outerHTML;
      speakersHtml += item.replace('__ReplaceWithIndex', i);

    });

    $(this.options.container).html(speakersHtml);
  }

  _events() {
    let that = this;

    $(document).on('click', `[data-remodal-target="${this.options.modal}"]`, (e) => {
      let $speakerInfoBlock = $(e.currentTarget);
      this.loadSpeakerModal($speakerInfoBlock);
    });
  }

  loadSpeakerModal($speakerInfoBlock) {
    let $modalBody = this.$popupElem,
      $modalSpeakerAvatar = $modalBody.find('.speakers-modal_img'),
      $modalNameElement = $modalBody.find('.speaker-name'),
      $modalPlaceElement = $modalBody.find('.speaker-place'),
      $modalTimeElement = $modalBody.find('.speaker-time'),
      $modalSpeakerPosition = $modalBody.find('.speaker-position .position'),
      $modalSpeakerCompany = $modalBody.find('.speaker-position .company'),
      $modalReportsContainer = $modalBody.find('.speakers-modal_content'),
      $modalSpeakerAboutText = $modalBody.find('.modal-about'),
      $modalSpeakerLinks = $modalBody.find('.speaker-socials'),
      speakerIndex = parseInt($speakerInfoBlock.attr('data-item-index'));

    $modalBody.find('.speakers-modal_heading').attr('data-current-index', speakerIndex);
    this._bindNavControlsListeners();

    let speakerData = this.speakers[speakerIndex];

    if(speakerData) {
      let speakerAvatar = speakerData.image,
        speakerName = speakerData.name,
        speakerPosition = speakerData.position,
        speakerCompany = speakerData.company,
        speakerPlace = speakerData.place,
        speakerTime = speakerData.time,
        speakerSocials = speakerData.socialsRendered,
        reports = speakerData.rept,
        reportsContent = '',
        speakerAboutText = speakerData.aboutSpeaker;

      reports.forEach((item, i, arr) => {
        reportsContent += `
            <div class="speaker-report">${item.title}</div>
            <div>${item.description}</div>
          `;
      });

      let speakerImg ='';
      speakerImg += '<img src="'+ speakerAvatar + '" alt="' + speakerName + '">';

      speakerAvatar && $modalSpeakerAvatar.html(speakerImg);
      speakerName && $modalNameElement.text(speakerName);
      $modalSpeakerPosition.text(speakerPosition);
      $modalSpeakerCompany.text(speakerCompany ? `${speakerCompany}` : '');
      speakerPlace && $modalPlaceElement.text(speakerPlace);
      speakerTime && $modalTimeElement.text(speakerTime);

      reportsContent && $modalReportsContainer.html(reportsContent);

      speakerAboutText && $modalSpeakerAboutText.find('.modal-body__text').html(speakerAboutText).end().toggle(true);

      $modalSpeakerLinks.html(speakerSocials);

      this.helpers.hideLoader($modalBody);

      setTimeout(() => {
        localStorage.setItem('speakersModalHtml', $modalBody.html());
      }, 400);
    }
  }

  _bindNavControlsListeners() {
    let $modalBody = this.$popupElem,
      speakerIndex =  +$modalBody.find('.speakers-modal_heading').attr('data-current-index'),
      $prevButton = $modalBody.find('button.remodal-prev'),
      $nextButton = $modalBody.find('button.remodal-next');

    $prevButton.unbind('click').click(() => {
      let prevIndex = speakerIndex == 0 ? (this.speakers.length - 1) : speakerIndex - 1;
      this.helpers.showLoader($modalBody);

      setTimeout(() => {
        this.loadSpeakerModal($('[data-item-index="' + prevIndex + '"]'));
      }, 600);
    });

    $nextButton.unbind('click').click(() => {
      let nextIndex = speakerIndex == this.speakers.length - 1 ? 0 : speakerIndex + 1;
      this.helpers.showLoader($modalBody);

      setTimeout(() => {
        this.loadSpeakerModal($('[data-item-index="' + nextIndex + '"]'));
      }, 600);
    });
  }
}