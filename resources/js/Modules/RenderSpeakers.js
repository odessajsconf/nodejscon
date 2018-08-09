import $ from 'jquery';
import { Popup } from '../Components/Popup';
window.jQuery = $;
require('../vendors/jquery-tmpl/jquery.tmpl.min');

const speakers = [
  {
    image: "public/img/speakers/max_klymyshyn.jpg",
    name: "Max Klymyshyn",
    position: "Tech Lead",
    company: "Takeoff Technologies",
    rept: [
      {
        title: "Workshop: Build blockchain using CRDT and Merkle Trees [Ru]",
        description: "",
      }
    ],
    aboutSpeaker:
      'Full-stack software engineer for Clojure/ClojureScript/Python/JavaScript-based projects with 15+ years experience in technical' +
      ' team leadership and management of distributed teams. Max interested in distributed systems, data replication and consistency algorithms, ' +
      'information science, functional languages and modern mobile and front-end development. Delivered more than 50 talks within past 5 years ' +
      'about developments and trends in Python, JavaScript, Databases, Dev Processes, Testing Processes and Project Management.',
    socialsRendered: '',
    socials: [
      {
        link: 'https://www.linkedin.com/in/klymyshyn',
        fatype: 'linkedin'
      },
      {
        link: 'https://twitter.com/maxmaxmaxmax',
        fatype: 'twitter'
      },
    ]
  },
  {
    image: "public/img/speakers/roman_sachenko.jpg",
    name: "Roman Sachenko",
    position: "Software Engineer" ,
    company: "DA-14",
    rept: [
      {
        title: "NodeJS Microservices + CQRS + Event Sourcing - Why do I do this? [Ru]",
        description: "Why do I do this? I kept asking myself this question while working on the next project and building microservices-based architecture with CQRS and Event Sourcing. What does this system do and why is it so complicated? I'll tell you about mistakes, which I’ve made, issues, which I've faced with, and solutions, which shouldn’t be applied. I’ll share my own experience and tell about those things, I wish I’d known before I started working on the project."
      }
    ],
    aboutSpeaker: '',
    socialsRendered: '',
    socials: [
      {
        link: 'https://github.com/roman-sachenko',
        fatype: 'github'
      },
      /*{
       link: 'https://www.linkedin.com/in/rsachenko/',
       fatype: 'linkedin-square'
       },
       {
       link: 'https://www.facebook.com/rsachenko',
       fatype: 'facebook'
       },*/
      {
        link: 'https://twitter.com/RSachenko',
        fatype: 'twitter'
      },
      {
        link: 'https://stackoverflow.com/users/5132363/roman-sachenko',
        fatype: 'stack-overflow'
      }/*,
       {
       link: 'https://www.instagram.com/rsachenko/',
       fatype: 'instagram'
       },*/
    ]
  },
  {
    image: "public/img/speakers/evgeniy_obrezkov.jpg",
    name: "Евгений Обрезков",
    position: "Senior software engineer" ,
    company: "elastic.io",
    rept: [
      {
        title: "Theme from Евгений Обрезков",
        description: "Description for Евгений Обрезков report"
      }
    ],
    aboutSpeaker: '',
    socialsRendered: '',
    socials: [
    ]
  },
  {
    image: "public/img/speakers/nikita_galkin.jpg",
    name: "Никита Галкин",
    position: "System Architect of HighLoad projects" ,
    company: "",
    rept: [
      {
        title: "Theme from Никита Галкин",
        description: "Description for Никита Галкин report"
      }
    ],
    aboutSpeaker: '',
    socialsRendered: '',
    socials: [
    ]
  },
];

export class RenderSpeakers {
  constructor() {
    this.popup = new Popup('#speakers-modal');
    this._init();
    this._events();
  }

  _init() {

    var speakerItem =
      '<div class="speaker-item" data-remodal-target="speakers-modal" data-item-index="__ReplaceWithIndex">'+
        '<div class="speaker-img">'+
          '<img src="${image}" alt="${name}">'+
        '</div>'+
        '<div class="speaker-name">${name}</div>'+
        '<div class="speaker-position">${position} @${company}</div>'+
        '<div class="speaker-report">'+
         '{{each rept }} {{html $value.title}} </br> </br>{{/each}}'+
        '</div>'+
      '</div>';

    $.template( "speakerTemplate", speakerItem );

    var spekersHtml = '';

    $.each(speakers, function (i, sp) {
      var item = $.tmpl("speakerTemplate", sp)[0].outerHTML;

      spekersHtml += item.replace('__ReplaceWithIndex', i);

    });

    $('#speakers-list').html(spekersHtml);

  }

  _events() {
    let that = this;
    $(document).on('click', '[data-remodal-target="speakers-modal"]', function() {
      let $speakerInfoBlock = $(this);
      loadSpeakerModal($speakerInfoBlock);
    });

    function loadSpeakerModal($speakerInfoBlock) {
      var $modalBody = $('#speakers-modal'),
        $modalSpeakerAvatar = $modalBody.find('.speakers-modal_img img'),
        $modalNameElement = $modalBody.find('.speaker-name'),
        $modalSpeakerPosition = $modalBody.find('.speaker-position .position'),
        $modalSpeakerCompany = $modalBody.find('.speaker-position .company'),
        // $modalSpeakerLinks = $modalBody.find('.speaker__link-list'),
        $modalreportsContainer = $modalBody.find('.speakers-modal_content');
        // $modalSpeakerAboutText = $modalBody.find('.speaker-text').toggle(false);

      var speakerIndex = parseInt($speakerInfoBlock.attr('data-item-index'));

      var $prevButton = $modalBody.find('button.remodal-prev');
      var $nextButton = $modalBody.find('button.remodal-next');

      $prevButton.unbind('click').click(()=>{
        var prevIndex = speakerIndex == 0 ? (speakers.length-1) : speakerIndex - 1;

        that.popup.close();
          setTimeout(function(){
            loadSpeakerModal($('[data-item-index="'+prevIndex+'"]'));
          },600);
        });
      //
      $nextButton.unbind('click').click(()=>{
        var nextIndex = speakerIndex == speakers.length-1 ? 0 : speakerIndex + 1;

        that.popup.close();
        setTimeout(function(){
          loadSpeakerModal($('[data-item-index="'+nextIndex+'"]'));
        },600);

      });

      var speakerData = speakers[speakerIndex];

      if (speakerData) {
        var speakerAvatar = speakerData.image,
          speakerName = speakerData.name,
          speakerPosition = speakerData.position,
          speakerCompany = speakerData.company,
          reports = speakerData.rept,
          reportsContent = '',
          speakerAboutText = speakerData.aboutSpeaker;

        reports.forEach(function (item, i, arr) {
          reportsContent += '<div>'+ item.description +'</div>';
        });

        speakerAvatar && $modalSpeakerAvatar.attr('src', speakerAvatar);
        speakerName && $modalNameElement.text(speakerName);
        speakerPosition && $modalSpeakerPosition.text(speakerPosition);
        speakerCompany && $modalSpeakerCompany.text(speakerCompany);

        reportsContent && $modalreportsContainer.html(reportsContent);

        // speakerAboutText && $modalSpeakerAboutText.find('.modal-body__text').text(speakerAboutText).end().toggle(true);
        // $modalSpeakerLinks.html($speakerInfoBlock.find('.speakers-slide__info-links').html());


        that.popup.open();
      }
    }
  }
}