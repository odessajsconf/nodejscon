import $ from 'jquery';
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
];

export class RenderSpeakers {
  constructor() {
    this._init();
  }

  _init() {
    var speakerItem =
      '<div class="speaker-item" data-remodal-target="speakers-modal">'+
        '<div class="speaker-img">'+
          '<img src="${image}" alt="${name}">'+
        '</div>'+
        '<div class="speaker-name">${name}</div>'+
        '<div class="speaker-position">${position}</div>'+
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
}