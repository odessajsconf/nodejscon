$(document).ready(function(){

  // var filters = [
  //   'React', 'NativeScript', 'Angular', 'Node.js', 'ExpressJS', 'MongoDB', 'PgSQL', 'JavaScript',
  //   'WebAssembly', 'Kubernetes', 'Azure', 'Go', 'Redux/Flow', 'Docker'
  // ];

  var speakers = [
    {
      image: "images/reporters/asimhussain.png",
      name: "Asim Hussain",
      position: "Cloud Developer Advocate" ,
      company: "Microsoft",
      rept: [
        {
          title: "Serverless & SPAs, a match made in Spevan [En]",
          description: "There is a wrong way and a right way to deploy, scale and architect an SPA. If you do it the wrong way you DON'T get the advantages of an SPA, you might as well have built a server-side Express app. If you do it the right way, you can take advantage of optimisations that give you epic scalability, with super low latencies at a fraction of the cost. In this talk, I'll teach you the right way to host your SPA (hint: don't use node). I'll unlock the doors to the hidden free caching layer on the internet. I'll prove why serverless & SPAs complement each other so perfectly and I'll show you how easy it is to build the rest of your application using a serverless stack."
        }
      ],
      aboutSpeaker: '',
      socialsRendered: '',
      socials: [
        {
          link: 'https://github.com/jawache',
          fatype: 'github'
        },
        {
          link: 'https://twitter.com/jawache',
          fatype: 'twitter'
        },
        {
          link: 'https://codecraft.tv',
          fatype: 'link'
        },
      ],
    },
    {
      image: "images/reporters/ivan_jovanovich.jpg",
      name: "Ivan Jovanovic",
      position: "Senior Software Engineer" ,
      company: "nearForm",
      rept: [
        {
          title: "Serverless - the way microservices should be [En]",
          description: "Serverless, the buzzword that we’re hearing probably every day. What’s that exactly? Serverless is the way microservices should be. It will save you money, time, and you will be able to easily build, test and deploy your applications. Serverless is here to stay, let’s learn how to use it!"
        }
      ],
      aboutSpeaker: '',
      socialsRendered: '',
      socials: [
        {
          link: 'https://github.com/ivanjov',
          fatype: 'github'
        },
        {
          link: 'https://twitter.com/ivanjov96',
          fatype: 'twitter'
        },
        {
          link: 'https://ivanjov.com/',
          fatype: 'link'
        }
      ],
      files:[
        {
          title: 'Serverless - the way microservices should be',
          link:'https://speakerdeck.com/ivanjov/introduction-to-micro-frontends-fluent-conf-2018',
        }
      ],
      filesRendered: '',
    },
    {
      image: "images/reporters/shinkevich.jpg",
      name: "Aleksandra Shinkevich",
      position: "Full-stack NodeJS Developer" ,
      company: "LOVATA",
      rept: [
        {
          title: "Development standards: a step-by-step guide to implement it without pain [Ru]",
          description:
            "<p>There is always a room for discussion about what to use: tabs or spaces, quotes or double quotes, and so on. There are so many personal preferences in writing code that most likely you'll end up discussing not the logic or implementation itself, but how to use braces, spaces, and semicolons. But do we really need to talk about such things every time we start the project, do code reviews or a new developer joins the team? How to make your code base consistent and clear no matter how big your team or the project are? The whole bunch of tools is here to rescue you!</p>" +
            "<p>I'm going to talk about all those tools and how to implement them into your code base to help you to improve the development process and code quality.</p>",
        },
        {
          title: "Get prepared for your performance. Speaker's guidelines from an organizer (tech corner) [Ru]",
          description:
            "<p>" +
              "Talking to a public is not an easy thing to learn, and it takes a lot of courage and time to become experienced " +
              "with and to feel comfortable on a stage. There is always a fear of failing. Is the topic right? Do your slides help " +
              "you or draw too much attention? Are they informative? Does your voice sound reasonable and confident? What should you " +
              "do before the event? When it's better to force yourself to finish preparations? Is it OK to make changes to your slides" +
              " in 5 minutes before the talk? </p>" +
            "<p>We a going to discuss all those questions and much more, and me and my colleagues, " +
              "who also have some experience with speaking and organizing events, will give you some tips on how to start talking or" +
              " make your talks even more interesting and exciting" +
            "</p>"
        }
      ],
      aboutSpeaker: '',
      socialsRendered: '',
      socials: [
        {
          link: 'https://www.facebook.com/aleksandra.shinkevich',
          fatype: 'facebook'
        },
        {
          link: 'https://github.com/neesoglasnaja',
          fatype: 'github'
        },
        {
          link: 'http://ash-web.by',
          fatype: 'link'
        }
      ],
      files:[
        {
          title: 'Development standards: a step-by-step guide to implement it without pain',
          link:'https://neesoglasnaja.github.io/OdessaJS2018/',
        },
        {
          title: 'Get prepared for your performance. Speaker\'s guidelines from an organizer',
          link:'https://mefody.github.io/talks/talk-preparation/',
        },
      ],
      filesRendered: '',
    },
    // {
    //   image: "images/reporters/trishul_goel.png",
    //   name: "Trishul Goel",
    //   position: "Tech Speaker" ,
    //   company: "Mozilla",
    //   rept: [
    //     {
    //       title: "Cross browser extensions - lets make one [En]",
    //       description: "Browsers are built on very simple principle - “one fit that suits all”. We use number of browser extensions to make most of our browser. How about being on other side of table; lets create one. From Javascript developer to a cross browser extension developer in 30 mins.",
    //     }
    //   ],
    //   aboutSpeaker: '',
    //   socialsRendered: '',
    //   socials: [
    //     {
    //       link: 'https://www.facebook.com/tsl143',
    //       fatype: 'facebook'
    //     },
    //     {
    //       link: 'https://twitter.com/trishulgoel',
    //       fatype: 'twitter'
    //     },
    //     {
    //       link: 'https://www.linkedin.com/in/trishul/',
    //       fatype: 'linkedin-square'
    //     },
    //     {
    //       link: 'http://github.com/tsl143/',
    //       fatype: 'github'
    //     },
    //     {
    //       link: 'http://trishulgoel.com/',
    //       fatype: 'link'
    //     },
    //   ]
    // },
    {
      image: "images/reporters/gerard.jpg",
      name: "Gerard Sans",
      position: "Google Developer Expert" ,
      company: "Freelance",
      rept: [
        {
          title: "Advanced State Management using ngrx v6 [En]",
          description: "State Management is key to build modern Web Apps",
        }
      ],
      aboutSpeaker: '',
      socialsRendered: '',
      socials: [
        {
          link: 'https://twitter.com/gerardsans',
          fatype: 'twitter'
        },
        {
          link: 'http://github.com/gsans',
          fatype: 'github'
        },
        {
          link: 'https://stackoverflow.com/users/4508433/gerard-sans',
          fatype: 'stack-overflow'
        },
        {
          link: 'https://medium.com/@gerard.sans',
          fatype: 'link'
        },
      ]
    },
   /* {
      image: "images/reporters/natalia_tepluhina.jpg",
      name: "Natalia Tepluhina",
      position: "Frontend Developer" ,
      company: "Scalac",
      rept: [
        {
          title: "Workshop: Simple pet fetching web app using VueJS [Ru]",
          description: "Mini-workshop to teach Vue.js in a cool and fun way to 'foxy people who identify as women'",
        }
      ],
      aboutSpeaker: '',
      socialsRendered: '',
      socials: [
        {
          link: 'https://twitter.com/N_Tepluhina',
          fatype: 'twitter'
        }
      ]
    },*/
    {
      image: "images/reporters/henning_muszynski.png",
      name: "Henning Muszynski",
      position: "Software Engineer" ,
      company: "Doist",
      rept: [
        {
          title: "The ABC of Coded Style Guides [En]",
          description: "Teams today are facing similar problems: How do we encourage the reuse of existing components? How do we raise awareness for them? How do we keep them stable while keeping maintenance efforts low? How do we ensure a coherent branding without exploiting our designers? If you are worried by these questions fear no longer. I aim to show you a way out of this self-made jungle into a brighter world of coded style guides. We will explore together how we can tear down walls between design and development and how everyone can benefit from introducing living component directories into their project."
        }
      ],
      aboutSpeaker: '',
      socialsRendered: '',
      socials: [
        {
          link: 'https://github.com/henningmu',
          fatype: 'github'
        },
        {
          link: 'https://twitter.com/henningmus',
          fatype: 'twitter'
        },
        {
          link: 'http://henningmu.com/',
          fatype: 'link'
        }
      ]
    },
    {
      image: "images/reporters/rowdyrabouw.jpg",
      name: "Rowdy Rabouw",
      position: "web development" ,
      company: "double-R",
      rept: [
        {
          title: "Unleash your web skills on native! [En]",
          description: "Did you know you can use your knowledge of HTML, CSS and JavaScript to build truly native apps for iOS and Android with NativeScript? I’ll explain what NativeScript is, how it compares to other frameworks and demo how easy and fun it is to get started and how to make use of native capabilities. Do you want to build your own personal assistant like Siri? I'll show you how!"
        }
      ],
      aboutSpeaker: '',
      socialsRendered: '',
      socials: [
        {
          link: 'https://github.com/rowdyrabouw',
          fatype: 'github'
        },
        {
          link: 'https://twitter.com/rowdyrabouw',
          fatype: 'twitter'
        },
        {
          link: 'https://www.linkedin.com/in/rowdyrabouw/',
          fatype: 'linkedin-square'
        }
      ]

    },
    // {
    //   image: "images/reporters/sara_vieira.jpg",
    //   name: "Sara Vieira",
    //   position: "Developer Relations" ,
    //   company: "YLD",
    //   rept: [
    //     {
    //       title: "The Dream of Styleguide Driven Development [En]",
    //       description:
    //       "You have heard of all types of driven development but react emerged a new type," +
    //       " styleguide driven development became a reality with components. This type " +
    //       "of development focuses on Developer/Designer collaboration and on assertive" +
    //       " components. With the use of React, CSS-in-JS, Flow and Snapshot testing " +
    //       "we were able to almost remove style regressions. In this talk you get a " +
    //       "glimpse of you can start styleguide " +
    //       "driven development and how you can sell this dream to your project managers.",
    //     }
    //   ],
    //   aboutSpeaker: '',
    //   socialsRendered: '',
    //   socials: [
    //     {
    //       link: 'https://twitter.com/NikkitaFTW',
    //       fatype: 'twitter'
    //     },
    //     {
    //       link: 'https://www.linkedin.com/in/saravieira1/',
    //       fatype: 'linkedin-square'
    //     },
    //     {
    //       link: 'https://www.instagram.com/niikkitaftw/',
    //       fatype: 'instagram'
    //     },
    //     {
    //       link: 'https://github.com/SaraVieira/',
    //       fatype: 'github'
    //     },
    //     {
    //       link: 'https://iamsaravieira.com',
    //       fatype: 'link'
    //     }
    //   ]
    // },
    {
      image: "images/reporters/patrick_kettner.jpg",
      name: "Patrick Kettner",
      position: "Program Manager",
      company: "Microsoft Edge",
      rept: [
        {
          title: "Creating magic with Houdini [En]",
          description: "Since the dawn of (internet) time, web developers have been at the mercy of browsers when it comes to features. But what if the black magic they use to create new HTML and CSS properties were given to you? Thats exactly what the Houdini working group is working to provide web developers today! In a futuristic, code heavy session I will show how in the not too distant future, you will be able to create your own custom browser features using low lever APIs never before available to developers.",
        }
      ],
      aboutSpeaker: '',
      socialsRendered: '',
      socials: [
        {
          link: 'https://twitter.com/patrickkettner',
          fatype: 'twitter'
        },
        {
          link: 'https://www.linkedin.com/in/patrickkettner',
          fatype: 'linkedin-square'
        },
        {
          link: 'https://instagram.com/patrickkettner',
          fatype: 'instagram'
        },
        {
          link: 'https://github.com/patrickkettner',
          fatype: 'github'
        },
        {
          link: 'https://stackoverflow.com/users/960588/patrick',
          fatype: 'stack-overflow'
        },
        {
          link: 'https://patrickkettner.com',
          fatype: 'link'
        },
      ]
    },
    // {
    //   image: "images/reporters/katarzyna_jastrzebsk.jpg",
    //   name: "Katarzyna Jastrzębska-Łachacz",
    //   position: "Frontend Developer" ,
    //   company: "Twill",
    //   rept: [
    //     {
    //       title: "Reuse your code in React like it's 2018 [En]",
    //       description:
    //         "The talk will be about possible ways to reuse code in React. We will " +
    //         "go through hocs, render and children props and other patterns, but also a little about " +
    //         "design and architecture decisions (how developers usually make them). Why some of the " +
    //         "components should be written separately when other should be more flexible."
    //     }
    //   ],
    //   aboutSpeaker: '',
    //   socialsRendered: '',
    //   socials: [
    //     {
    //       link: 'https://github.com/kajas90',
    //       fatype: 'github'
    //     },
    //     {
    //       link: 'https://twitter.com/kejt_bw',
    //       fatype: 'twitter'
    //     },
    //     {
    //       link: 'https://stackoverflow.com/users/7364681/kejt',
    //       fatype: 'stack-overflow'
    //     },
    //     {
    //       link: 'https://medium.com/@katarzyna.jastrzebska90',
    //       fatype: 'link'
    //     },
    //   ]
    // },
    {
      image: "images/reporters/nik_graf.jpg",
      name: "Nik Graf",
      position: "" ,
      company: "Independent",
      rept: [
        {
          title: "Workshop: Build Serverless Node.js Applications on AWS [En]",
          description:
            "<p>The core of serverless architectures is auto-scaling systems and a pay-per- execution" +
            "pricing. This allows developers to reduce significantly operational cost and complexity" +
            "by outsourcing infrastructure management to cloud providers and third-party services." +
            "Teams can focus on customers and improve their applications instead of managing" +
            "servers. During this workshop you will learn how to build and deploy scaleable," +
            "production ready and low maintenance applications using Node.js. We are going to" +
            "explore and leverage AWS services like Lambda, API Gateway, DynamoDB, Kinesis, S3.</p>",
        },
        {
          "title": "Get started with Reason and ReasonReact",
          "description":
            "We will kick off with the basics and then quickly go into how to leverage features like variant types and pattern matching to make impossible states impossible. After you gained some knowledge about the basics the course will dig even further into ReasonReact."
        }
      ],
      aboutSpeaker:
        'Nik is a software developer and passionate about good UX, functional programming and dev tools. ' +
        'He previously worked for Serverless Inc., the company behind Serverless Framework.' +
        ' He co-created several popular open source projects like DraftJS Plugins & Polished. In his spare-time he enjoys cycling & skiing.',
      socialsRendered: '',
      socials: [
        {
          link: 'https://twitter.com/nikgraf',
          fatype: 'twitter'
        },
        {
          link: 'https://github.com/nikgraf',
          fatype: 'github'
        },
        {
          link: 'https://medium.com/@nikgraf',
          fatype: 'medium'
        },
      ]
    },
    // {
    //   image: "images/reporters/david_mullerchen.jpg",
    //   name: "David Müllerchen",
    //   position: "Freelancer" ,
    //   company: "Webdave",
    //   rept: [
    //     {
    //       title: "Workshop: Angular 101 [En]",
    //       description:
    //         "<p>Angular is a client-side JavaScript framework used world-wide to create web" +
    //         "applications. The framework gives clear structures and supports u. a. Modularization" +
    //         "and lazy loading. It is developed by a team at Google and is aimed at developers of" +
    //         "complex enterprise applications. Since the release of version 2, the framework is no" +
    //         "longer AngularJS but Angular. Curious? then come to my workshop and learn the basic" +
    //         "principles of Angular.</p>",
    //       }
    //   ],
    //   aboutSpeaker:
    //     'David is an Angular consultant and trainer. He’s also a team member and trainer at' +
    //     'AngularJS.DE, the Angular platform in DACH. His passion is sharing knowledge,' +
    //     'speaking and teaching at meetups and conferences. David’s keeping his own blog' +
    //     '(webdave.de). During leisure time David jumps around with his 3 boys and his wife. He’s' +
    //     'also an organizer of the Hamburg AngularJS Meetup and a Google Developer Expert' +
    //     '(GDE) in Angular.',
    //   socialsRendered: '',
    //   socials: [
    //     {
    //       link: 'https://github.com/web-dave',
    //       fatype: 'github'
    //     },
    //     {
    //       link: 'https://twitter.com/webdave_de',
    //       fatype: 'twitter'
    //     },
    //     {
    //       link: 'https://webdave.de/',
    //       fatype: 'link'
    //     },
    //   ]
    // },
    {
        image: "images/reporters/HaroenViaene.jpg",
        name: "Haroen Viaene",
        position: "Library Developer" ,
        company: "Algolia",
        rept: [
            {
                title: "You’re probably making an API client. [En]",
                description: "When you are interacting with another piece of software, be it a REST API or a third party, what you’re actually making is your own abstraction around it. Once you realise that, you can use the tricks used in real API clients for your advantage and make reusable, good code. " ,
            }
        ],
        aboutSpeaker: '',
        socialsRendered: '',
        socials: [
            {
                link: 'Https:/GitHub.com/haroenv',
                fatype: 'github'
            },
            {
                link: 'https://twitter.com/haroenv',
                fatype: 'twitter'
            },
            {
                link: 'http://linkedin.com/in/haroen',
                fatype: 'linkedin-square'
            },
            {
                link: 'https://haroen.me/',
                fatype: 'link'
            },
        ],
        files:[
          {
            title: 'You’re probably making an API client',
            link:'https://haroen.me/presentations/en/api-clients-odessa/',
          },
        ],
        filesRendered: '',
      },
    // {
    //   image: "images/reporters/alex_renandez.jpeg",
    //   name: "Alex Fernandez",
    //   position: "" ,
    //   company: "",
    //   rept: [
    //     {
    //       title: "Workshop: Building Efficient Software: Let's Improve Our Performance! [En]",
    //       description:
    //         "<p>Software is usually built without specific constraints in mind. Then it is deployed to production, and in certain situations" +
    //         " it may fail to meet expectations, consume too many resources – or break completely. As a developer you are likely to meet performance " +
    //         "issues at some point. In this workshop we will see a few techniques that will be useful in these situations: finding bottlenecks," +
    //         " running load tests, profiling and writing benchmarks. We will work on practical examples using JavaScript and Node.js." +
    //         " Most of the techniques can be used in other environments too!</p>",
    //       }
    //   ],
    //   aboutSpeaker:
    //     'Alex Fernández is a developer with more than 20 years of experience in the software industry.' +
    //     ' Shameless tinkerer since forever, he likes building more than adapting and adapting more than configuring. During ' +
    //     'the course of his career he has gone from caring about seconds to worrying about milliseconds,' +
    //     ' and then to squeezing those last microseconds; which honestly feels like an improvement. ' +
    //     'My main hobby is talking to my 9 year old daughter, who is a really interesting little person!',
    //   socialsRendered: '',
    //   socials: [
    //     {
    //       link: 'https://github.com/alexfernandez/',
    //       fatype: 'github'
    //     },
    //     {
    //       link: 'https://twitter.com/pinchito',
    //       fatype: 'twitter'
    //     },
    //     {
    //       link: 'http://pinchito.es/',
    //       fatype: 'link'
    //     },
    //   ]
    // },
    {
      image: "images/reporters/eyal_eizenberg.jpg",
      name: "Eyal Eizenberg",
      position: "Engineer Team Leader" ,
      company: "Wix",
      rept: [
        {
          title: "Trim your redux boilerplate with Redux Cornell. [En]",
          description:
          "<p>Redux is awesome and is used in countless projects. However, using Redux does" +
          " mean that there is a lot of boilerplate. Enter Redux Cornell. Named after the legendary " +
          "singer Chris Cornell, Redux Cornell aims to remove most of the boilerplate which comes with " +
          "using Redux, yet allows you to completely customize it. The library brings the concept of " +
          "'convention over configuration' into the JS world to help reduce boiler plate.</p>"+
          "<p>Redux Cornell now powers Wix's 2nd most visited page with over 3M unique views " +
          "per month so you can say that it's 'Battle Tested'!</p>" ,
        }
      ],
      aboutSpeaker: '',
      socialsRendered: '',
      socials: [
        {
          link: 'https://twitter.com/EyalEizenberg',
          fatype: 'twitter'
        },
        {
          link: 'https://www.linkedin.com/in/eyal-eizenberg',
          fatype: 'linkedin-square'
        },
        {
          link: 'https://github.com/eyaleizenberg',
          fatype: 'github'
        },
        {
          link: 'https://stackoverflow.com/users/1983301/eyal83',
          fatype: 'stackoverflow'
        },
        {
          link: 'https://medium.com/@eyaleizenberg',
          fatype: 'link'
        },
      ]
    },
    {
      image: "images/reporters/mike_maccana.jpg",
      name: "Mike MacCana",
      position: "Founder" ,
      company: "CertSimple",
      rept: [
        {
          title: "Deploying your JS app in 2018. [En]",
          description:
            "<p>HTTP/2! Brotli compression! Elliptic curve crypto! EV! ACME! Bundles! " +
            "AMP! It seems there’s suddenly a whole bunch of new ways to deploy your" +
            " web apps. Here's how to make your site fast, secure, handle upgrades" +
            " without downtime.</p>" ,
        }
      ],
      aboutSpeaker: '',
      socialsRendered: '',
      socials: [
        {
          link: 'https://twitter.com/mikemaccana',
          fatype: 'twitter'
        },
        {
          link: 'https://uk.linkedin.com/in/mikemaccana',
          fatype: 'linkedin-square'
        },
        {
          link: 'https://www.instagram.com/mikemaccana/',
          fatype: 'instagram'
        },
        {
          link: 'https://github.com/mikemaccana',
          fatype: 'github'
        },
        {
          link: 'https://stackoverflow.com/users/123671/mikemaccana',
          fatype: 'stackoverflow'
        },
        {
          link: 'https://certsimple.com',
          fatype: 'link'
        },
      ]
    },
    {
      image: "images/reporters/gabriel_micko.jpg",
      name: "Gabriel Mičko",
      position: "Streaming engineer" ,
      company: "Docler Holding, Mozilla Tech Speaker",
      rept: [
        {
          title: " WebRTC talk for OdessaJS. [En]",
          description:
            "<p>WebRTC is a free, open project that provides browsers and mobile " +
            "applications with Real-Time Communications capabilities via simple APIs. " +
            "Mission behind is to enable rich, high-quality RTC applications to be developed" +
            " for the browser. You are able to do this all without the need of installing any " +
            "third party software or plugin. The talk is designed for those who want to get " +
            "started with the technology or who are just curious about the bright features of " +
            "the web. </p>" ,
        }
      ],
      aboutSpeaker:
        'I am enthusiastic front-end developer who loves the web and new technologies ' +
        'around it. I am tech speaker, contributor, volunteer at Mozilla. I believe in ' +
        'the mission to ensure the Internet is a ' +
        'global public resource, open and accessible to all.',
      socialsRendered: '',
      socials: [
        {
          link: 'https://twitter.com/gabriel_micko',
          fatype: 'twitter'
        }
      ]
    },
    {
      image: "images/reporters/oskackov.png",
      name: "Oleksandr Skachkov",
      position: "Lead FrontEnd Developer" ,
      company: "Itera",
      rept: [
        {
          title: "WebAssembly vs JavaScript: What is faster? [Ru]",
          description: "As WebAssmebly is increasing its popularity and more, and more languages start to support WebAssmebly as the build target, development team start asking question when do we need to use WebAssmebly and where it is better to rely on javascript.As open source contributor to WebKit JavaScript Engine, I would like overview differences between WebAssmebly and JavaScript, that engineers should to known when choose between WebAssembly and JavaScript, and overview in which cases is WebAssembly is faster and vice verse"
        }
      ],
      aboutSpeaker: '',
      socialsRendered: '',
      socials: [
        {
          link: 'https://twitter.com/alSkachkov\n',
          fatype: 'twitter'
        },
        {
          link: 'https://www.linkedin.com/in/alexskachkov/',
          fatype: 'linkedin-square'
        }
      ]
    },
    {
      image: "images/reporters/roman_sachenko.jpg",
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
      image: "images/reporters/oleg_chorny.jpg",
      name: "Oleg Chorny",
      position: "Site Reliability Engineering Manager" ,
      company: "Ciklum",
      rept: [
        {
          title: "Cloud Native Observability [Ru]",
          description: "Let's discuss how Observability enables you to write software that can be managed by software."
        }
      ],
      aboutSpeaker: '',
      socialsRendered: '',
      socials: [
        {
          link: 'https://www.linkedin.com/in/oleg-chorny-57124352',
          fatype: 'linkedin-square'
        }
      ]
    },
    {
      image: "images/reporters/migutsky.jpg",
      name: "Alexey Migutsky",
      position: "Senior Software Development Engineer" ,
      company: "Microsoft Berlin",
      rept: [
        {
          title: "Workshop: Growing your career as software engineer [Ru]",
          description:
            "<p>Get an essential set of skills to control your career!<br>" +
            "After the intense training, you will get basic skills to:</p>" +
            "<ul>" +
            "  <li>Position yourself better on the market</li>" +
            "  <li>Get more money for what you are already doing</li>" +
            "  <li>Get \"unstuck\" in your career situation</li>" +
            "  <li>Find better, more interesting projects, which fit you best</li>" +
            "  <li>Find and prioritize opportunities for your personal and professional development</li>" +
            "  <li>Build a professional network and career capital</li>" +
            "  <li>Efficiently grow your career without sacrificing other life aspects</li>" +
            "</ul>",
        },
        {
          title: "TechCorner: Architecture evolution of Microsoft To-Do web app. [Ru]",
          description:
            "",
        },
      ],
      aboutSpeaker:
        "Alexey Migutsky is a Senior Software Development Engineer at Microsoft Berlin and a" +
        "Founder of Metadevelopment.io. He is originally from Belarus, lived in Odessa, Ukraine" +
        "and now resides in Berlin, Germany. Alexey has 8 years of professional experience" +
        "building user-facing web apps and services for companies like Coca-Cola, Wolters" +
        "Kluwer, HP, and Microsoft. He worked in startups, outsource and product companies," +
        "cofounded 3 startups of his own and mentored personally more than 30 professional" +
        "developers. In his spare time, Alexey is building a mentoring network for professional" +
        "software developers (mtdv.io) to help people build lifestyle and career of their dreams.",
      socialsRendered: '',
      socials: [
        {
          link: 'https://facebook.com/alex.migutsky',
          fatype: 'facebook'
        },
        {
          link: 'https://github.com/mr-mig',
          fatype: 'github'
        },
        {
          link: 'https://twitter.com/mr_mig_by',
          fatype: 'twitter'
        },
        {
          link: 'https://mtdv.io',
          fatype: 'link'
        },
      ],
      files:[
        {
          title: 'Microsoft To-Do. Web Architecture',
          link:'https://slides.com/mr-mig/to-do-web-arch',
        }
      ],
      filesRendered: '',
    },
    {
        image: "images/reporters/timur2018.jpg",
        name: "Timur Shemsedinov",
        position: "Architect, Lecturer" ,
        company: "Metarhia, MIA, KPI",
        rept: [
            {
                title: "Workshop: Software Engendering Fundamentals for JavaScript Developers [Ru]",
                description:
                    "<p>Selected topics from the software engineering lectures with JavaScript and " +
                    "Node.js examples. Includes fundamental concepts and design patterns of functional, " +
                    "reactive, imperative, declarative, asynchronous, prototype, object-oriented, and metaprogramming," +
                    " data structures and algorithms, useful software abstractions and code examples, best parts and " +
                    "demo projects with modern technologies usage. Lectures includes over 500 code examples collected after " +
                    "years of practice in different languages ​​and platforms, combined and implemented using the newest features and " +
                    "syntax of JavaScript. The course includes 75 lectures by Timur Shemsedinov from the Faculty of Computer Science " +
                    "and Computer Science of the Kiev Polytechnic Institute.</p>",
            }
        ],
        aboutSpeaker: '',
        socialsRendered: '',
        socials: [
            {
                link: 'https://facebook.com/tshemsedinov',
                fatype: 'facebook'
            },
            {
                link: 'https://twitter.com/ImpressAppSrv',
                fatype: 'twitter'
            },
            {
                link: 'https://www.instagram.com/tshemsedinov/',
                fatype: 'instagram'
            },
            {
                link: 'https://github.com/tshemsedinov',
                fatype: 'github'
            },
            {
                link: 'https://www.linkedin.com/in/shemsedinov/',
                fatype: 'linkedin'
            },
            {
                link: 'https://habr.com/users/marcusaurelius/posts/',
                fatype: 'link'
            },
        ]
    },
    {
        image: "images/reporters/orlenko.jpg",
        name: "Aleksey Orlenko",
        position: "Senior software engineer" ,
        company: "Metarhia, KPI",
        rept: [
            {
                title: "Workshop: Software Engendering Fundamentals for JavaScript Developers [Ru]",
                description:
                    "<p>Selected topics from the software engineering lectures with JavaScript and Node.js examples. Includes fundamental concepts and design patterns of functional, reactive, imperative, declarative, asynchronous, prototype, object-oriented, and metaprogramming, data structures and algorithms, useful software abstractions and code examples, best parts and demo projects with modern technologies usage. Lectures includes over 500 code examples collected after years of practice in different languages ​​and platforms, combined and implemented using the newest features and syntax of JavaScript. The course includes 75 lectures by Timur Shemsedinov from the Faculty of Computer Science and Computer Science of the Kiev Polytechnic Institute.</p>",
            }
        ],
        aboutSpeaker: '',
        socialsRendered: '',
        socials: [
            {
                link: 'https://github.com/aqrln',
                fatype: 'github'
            },
            {
                link: 'https://twitter.com/aqrln',
                fatype: 'twitter'
            },
        ]
    },
    {
        image: "images/reporters/golikov.jpg",
        name: "Alex Golikov",
        position: "Senior software engineer" ,
        company: "vi",
        rept: [
            {
                title: "Workshop: Software Engendering Fundamentals for JavaScript Developers [Ru]",
                description:"<p>Selected topics from the software engineering lectures with JavaScript and Node.js examples. Includes fundamental concepts and design patterns of functional, reactive, imperative, declarative, asynchronous, prototype, object-oriented, and metaprogramming, data structures and algorithms, useful software abstractions and code examples, best parts and demo projects with modern technologies usage. Lectures includes over 500 code examples collected after years of practice in different languages ​​and platforms, combined and implemented using the newest features and syntax of JavaScript. The course includes 75 lectures by Timur Shemsedinov from the Faculty of Computer Science and Computer Science of the Kiev Polytechnic Institute.</p>",
            }
        ],
        aboutSpeaker: '',
        socialsRendered: '',
        socials: [
            {
                link: 'https://facebook.com/aleksey.golikov.14',
                fatype: 'facebook'
            },
            {
                link: 'https://www.linkedin.com/in/golikov/',
                fatype: 'linkedin'
            },
            {
                link: 'https://github.com/agil',
                fatype: 'github'
            },
        ]
    },
    {
        image: "images/reporters/leonid_baida.jpg",
        name: "Leonid Baida",
        position: "Lead Front-End Developer" ,
        company: "SPD-Ukraine",
        rept: [
            {
                title: "If you don't like how your static typing smells, maybe you do it wrong [Ua]",
                description:
                "Static typing remains a popular topic for discussions somewhat " +
                "akin to a battle field. JS development world split up into its " +
                "proponents and opponents. Don't forget that type-code" +
                " writing is managed by principles and approached different " +
                "from those required by vanilla JS. It's a different philosophy, so to say." +
                " Type JS is very different from non-type one. This becomes a common problem " +
                "in static type learning and its efficient application. Let's clarify which " +
                "like JS type code should be. And let's do it step-by-step, getting inspired " +
                "by strick type programming languages. Let's find out how to apply it so that " +
                "it proved useful but did not turn into our greatest disappointment." +
                " (Flow type will be taken as a basis here, but the majority of these " +
                "examples will be actual for TypeScript as well)."
            }
        ],
        aboutSpeaker: '',
        socialsRendered: '',
        socials: [
            {
                link: 'https://www.linkedin.com/in/leonid-bayda-46587438/',
                fatype: 'linkedin-square'
            },
            {
                link: 'https://www.facebook.com/leonid.baida',
                fatype: 'facebook'
            },
            {
                link: 'https://www.instagram.com/leonidbaida/',
                fatype: 'instagram'
            }
        ]
    },
    {
      image: "images/reporters/mihail_zachepilo.png",
      name: "Mihail Zachepilo",
      position: "Front End Developer" ,
      company: "Pentatonica",
      rept: [
        {
          title: "WebAssembly powered Machine Learning [Ru]",
          description: "Stop talking about WebAssembly specification, let's solve a problems using it! How to WebAssembly work and how we can use it to enhance Machine Learning in browser experience."
        }
      ],
      aboutSpeaker: '',
      socialsRendered: '',
      socials: [
        {
          link: 'https://t.me/worldthirteen',
          fatype: 'paper-plane'
        },
      ]
    },
    {
      image: "images/program-committee/ksenia-redunova.jpg",
      name: "Ksenia Redunova",
      position: "Team Lead" ,
      company: "Lohika",
      rept: [
        {
          title: "Estimates: is there a silver bullet?[Ru]",
          description:
            "Our work is not only about writing the perfect code. But also about " +
            "the delivering the product within the planned timeframe.\n" +
            "In my tech corner I’ll cover the topics: How to estimate " +
            "the uncertainty? How to include risks? What to use: hours or story points?\n" +
            "I’ll tell you about the different ways of estimation. Let’s discuss " +
            "the good and bad cases from our experience and try to find the silver " +
            "bullet. If it exists.",
        }
      ],
      aboutSpeaker: '',
      socialsRendered: '',
      socials: [
        {
          link: 'https://www.facebook.com/redunova',
          fatype: 'facebook'
        },
        {
          link: 'https://www.linkedin.com/in/redunovaksenia/',
          fatype: 'linkedin-square'
        }
      ]
    },
    // {
    //   image: "images/reporters/max_klymyshyn.jpg",
    //   name: "Max Klymyshyn",
    //   position: "Tech Lead",
    //   company: "Takeoff Technologies",
    //   rept: [
    //     {
    //       title: "Workshop: Build blockchain using CRDT and Merkle Trees [Ru]",
    //       description: "",
    //     }
    //   ],
    //   aboutSpeaker:
    //     'Full-stack software engineer for Clojure/ClojureScript/Python/JavaScript-based projects with 15+ years experience in technical' +
    //     ' team leadership and management of distributed teams. Max interested in distributed systems, data replication and consistency algorithms, ' +
    //     'information science, functional languages and modern mobile and front-end development. Delivered more than 50 talks within past 5 years ' +
    //     'about developments and trends in Python, JavaScript, Databases, Dev Processes, Testing Processes and Project Management.',
    //   socialsRendered: '',
    //   socials: [
    //     {
    //       link: 'https://www.linkedin.com/in/klymyshyn',
    //       fatype: 'linkedin'
    //     },
    //     {
    //       link: 'https://twitter.com/maxmaxmaxmax',
    //       fatype: 'twitter'
    //     },
    //   ]
    // },

    {
      image: "images/reporters/roman_rodomansky.png",
      name: "Roman Rodomansky",
      position: "CTO & Co-Founder" ,
      company: "Ralabs",
      rept: [
        {
          title: "The New Media. What it takes to create a news website in 2018 [Ua]",
          description: "What will you do if biggest media will ask you about new website? Seems like trivial, right? Ugh, why WordPress is not a right fit here? We'll tell you a story with problems and solutions that we raised during all phases from project first steps.",
        }
      ],
      aboutSpeaker: '',
      socialsRendered: '',
      socials: [
        {
          link: 'https://fb.com/roman.rodomansky',
          fatype: 'facebook'
        },
        {
          link: 'https://www.linkedin.com/in/rodomansky/',
          fatype: 'linkedin-square'
        },
        {
          link: 'https://www.instagram.com/pomapomapomapoma/',
          fatype: 'instagram'
        },
        {
          link: 'https://github.com/itspoma',
          fatype: 'github'
        },
        {
          link: 'https://ralabs.org/news/',
          fatype: 'link'
        },
      ]
    },
    {
      image: "images/reporters/andrew_yasinishyn.png",
      name: "Andrew Yasinishyn",
      position: "CEO & Co-Founder" ,
      company: "Ralabs",
      rept: [
        {
          title: "The New Media. What it takes to create a news website in 2018 [Ua]",
          description:
            "What will you do if biggest media will ask you about new website? " +
            "Seems like trivial, right? Ugh, why WordPress is not a right fit here?" +
            " We'll tell you a story with problems and solutions that we raised " +
            "during all phases from project first steps.",
        }
      ],
      aboutSpeaker: '',
      socialsRendered: '',
      socials: [
        {
          link: 'https://fb.com/andrey.yasinishyn',
          fatype: 'facebook'
        },
        {
          link: 'https://www.linkedin.com/in/andrew-yasynyshyn-0a205b69/',
          fatype: 'linkedin-square'
        },
        {
          link: 'https://www.instagram.com/yasinishyn/',
          fatype: 'instagram'
        },
        {
          link: 'https://github.com/yasinishyn',
          fatype: 'github'
        }
      ]
    },
    // {
    //   image: "images/reporters/andrey_grachev.png",
    //   name: "Andrew Grachov",
    //   position: "CTO" ,
    //   company: "Crello",
    //   rept: [
    //     {
    //       title: "Universal VUE apps made easy",
    //       description: "Универсальные приложения с nuxtjs, или когда нужно просто и быстро",
    //     }
    //   ],
    //   aboutSpeaker: '',
    //   socialsRendered: '',
    //   socials: [
    //     {
    //       link: 'https://www.facebook.com/drontxl',
    //       fatype: 'facebook'
    //     },
    //     {
    //       link: 'https://www.linkedin.com/in/andrew-grachov/',
    //       fatype: 'linkedin-square'
    //     }
    //   ]
    // },
    {
      image: "images/reporters/denis_radin.png",
      name: "Denis Radin",
      position: "JavaScript / WebGL engineer" ,
      company: "Evolution Gaming",
      rept: [
        {
          title: "Pixel shaders based UI components in Web apps + mini workshop \"let`s write your first pixel shader\" [Ru]",
          description: "5 years ago shaders became the technology behind all amazing VFX we see in computer games. Now they are ready to rock the Web. In this talk we ll dive into shaders history and theory then move to a real world usage for Web UI development with a little workshop writing your first ever pixel shader.",
        }
      ],
      aboutSpeaker: '',
      socialsRendered: '',
      socials: [
        {
          link: 'https://www.facebook.com/denis.radin.549',
          fatype: 'facebook'
        },
        {
          link: 'https://twitter.com/PixelsCommander',
          fatype: 'twitter'
        },
        {
          link: 'https://www.linkedin.com/in/denisradin/',
          fatype: 'linkedin-square'
        },
        {
          link: 'https://github.com/PixelsCommander',
          fatype: 'github'
        }
      ]
    },
    {
      image: "images/reporters/sergiy_babich.png",
      name: "Sergiy Babich",
      position: "Lead Software Developer" ,
      company: "N-iX",
      rept: [
        {
          title: "Mutilation and suffering: How I decided to create a project using only Web Components without any framework [Ua]",
          description: "One pet project. One idea. One specification. That's what lead me to create app using only native web components and no framework or library. I want to share you my practical knowledge how it is even possible to create such app in such circumstances and why it is important to even do this.",
        }
      ],
      aboutSpeaker: '',
      socialsRendered: '',
      socials: [
        {
          link: 'https://www.facebook.com/babich.ss',
          fatype: 'facebook'
        }
      ]
    },
    {
      image: "images/reporters/yuriy_sherstyuk.png",
      name: "Yuriy Sherstyuk",
      position: "Sr Front End Developer" ,
      company: "Microsoft, Autodoc",
      rept: [
        {
          title: "Algorithms in Front End: from V8 to VDOM [Ru]",
          description: "Significance and importance of algorithms can not be overestimated. Even harder to learn how to apply it in the modern Front End, given how many optimizations are done for us by the engines and frameworks. The purpose of this report is to help you understand how this works at a lower level, for example V8, React and not only. Also, what we can do to make more use of the algorithm work, and spend less time and resources.",

        }
      ],
      aboutSpeaker: '',
      socialsRendered: '',
      socials: [
        {
          link: 'mailto:yursherstyuk@gmail.com',
          fatype: 'envelope'
        }
      ]
    },
    {
      image: "images/reporters/radoslav_stankov.png",
      name: "Radoslav Stankov",
      position: "Developer" ,
      company: "Product Hunt",
      rept: [
        {
          title: "React Patterns at Product Hunt [En]",
          description: "Most of the work developer does is refactoring and restructuring existing code. While working with React at Product Hunt, I noticed common patterns our team use to deal with changing project requirements.\n" +
          "\n" +
          "If you have problems dealing with external dependences, reusability and rapidly project iterations - this is the talk for you.\n" +
          "\n" +
          "Often we start with one top-level redux-connected component and then splitting into several smaller HOCs.\n" +
          "One other pattern we use at Product Hunt is to wrap external component to reduce their surface area in the application. This also helps with dealing with dependencies updates\n",
        }
      ],

      aboutSpeaker: '',
      socialsRendered: '',
      socials: [
        {
          link: 'https://www.facebook.com/radoslavdstankov',
          fatype: 'facebook'
        },
        {
          link: 'https://twitter.com/rstankov',
          fatype: 'twitter'
        },
        {
          link: 'https://www.linkedin.com/in/radoslavstankov/',
          fatype: 'linkedin-square'
        },
        {
          link: 'https://www.instagram.com/rstankov/',
          fatype: 'instagram'
        },
        {
          link: 'https://github.com/rstankov/',
          fatype: 'github'
        },
        {
          link: 'http://blog.rstankov.com/',
          fatype: 'link'
        },
      ]
    },
    {
      image: "images/reporters/david_kopal.png",
      name: "David Kopal",
      position: "JavaScript developer" ,
      company: "Blueberry",
      rept: [
        {
          title: "Unleash the power of the higher-order components [En]",
          description: "Maintainable component structure is a crucial prerequisite for a stable React application. You can achieve this by writing your code in a functional way using the higher-order components (HoCs). I want to show you how to define smart HoCs and use them to enhance your presentational components. You'll also learn how to compose several HoCs to get more complex logic. Sticking to this pattern, you'll end up with reusable components that are readable and easy to test since each component is responsible only for a single task.",
        }
      ],
      aboutSpeaker: '',
      socialsRendered: '',
      socials: [
        {
          link: 'https://twitter.com/coding_lawyer',
          fatype: 'twitter'
        },
        {
          link: 'https://www.linkedin.com/in/david-kopal-54219199/',
          fatype: 'linkedin-square'
        },
        {
          link: 'https://github.com/codinglawyer',
          fatype: 'github'
        },
        {
          link: 'https://codinglawyer.net/',
          fatype: 'link'
        },
      ]
    },
    {
      image: "images/reporters/arkadiy_pilguk.png",
      name: "Arkadiy Pilguk",
      position: "Software Engineer" ,
      company: "Pentatonica",
      rept: [
        {
          title: "Real-world application of computer vision and machine learning in modern web applications. [Ru]",
          description: "An Introduction to Computer Vision and Augmented Reality in modern web browsers and how to accelerate it with WebGL. " +
          "We will build on this foundation and discuss how to improve results utilizing machine learning models, measure their performance and" +
          " use these metrics to improve the accuracy of the solution. Finally we will explore how to apply these techniques to a practical" +
          " business problem."
        }
      ],
      aboutSpeaker: '',
      socialsRendered: '',
      socials: [
        {
          link: 'https://www.facebook.com/arkadiypilguk',
          fatype: 'facebook'
        },
        {
          link: 'https://github.com/apilguk',
          fatype: 'github'
        }
      ]
    },
    {
      image: "images/reporters/ivan_goncharov.png",
      name: "Ivan Goncharov",
      position: "API consultant" ,
      company: "APIs.guru",
      rept: [
        {
          title: "W.T.F. is <span>GraphQL?</span> [Ua]",
          description:
          "Recently, there is a lot of hype around GraphQL " +
          "and you are probably wondering if it is a good fit for your project. " +
          "In my talk, I want to demystify GraphQL by explaining what problems " +
          "does it solve and how it works internally. I will show how to write requests" +
          " and send them to the server and how they are executed under the hood. " +
          "I will also talk about problems of GraphQL and how ready it is for production"
        }
      ],
      aboutSpeaker: '',
      socialsRendered: '',
      socials: [
        {
          link: 'https://www.facebook.com/ivan.goncharov.3591',
          fatype: 'facebook'
        },
        {
          link: 'https://twitter.com/E1Goncharov',
          fatype: 'twitter'
        },
        {
          link: 'https://www.linkedin.com/in/igoncharov/',
          fatype: 'linkedin-square'
        },
        {
          link: 'https://github.com/IvanGoncharov',
          fatype: 'github'
        },
        {
          link: 'https://medium.com/@IvanGoncharov',
          fatype: 'link'
        },
      ]
    },
    {
      image: "images/reporters/nikita_dubko.png",
      name: "Nikita Dubko",
      position: "Software Engineer" ,
      company: "iTechArt",
      rept: [
        {
          title: "Houdini — CSS, which is JavaScript [Ru]",
          description:
            "CSS Houdini - is a set of specifications which will change web-development " +
            "in the nearest future. With their advent  a regular pagemaker will have to " +
            "learn JavaScript. But then instead of awaiting conditional \"super-mega-grids\" " +
            "realization appearance you'll be able to plug in polifill for CSS. You can do " +
            "it right now! Or not?"
        }
      ],
      aboutSpeaker: '',
      socialsRendered: '',
      socials: [
        {
          link: 'https://www.facebook.com/Dark.MeFoDy',
          fatype: 'facebook'
        },
        {
          link: 'https://twitter.com/dark_mefody',
          fatype: 'twitter'
        },
        {
          link: 'https://github.com/MeFoDy',
          fatype: 'github'
        }
      ],

      files:[
        {
          title: 'Get prepared for your performance. Speaker\'s guidelines from an organizer',
          link:'https://mefody.github.io/talks/talk-preparation/',
        },
        {
          title: 'Houdini - CSS which is JavaScript',
          link:'https://mefody.github.io/talks/houdini-css',
        },
      ],
      filesRendered: '',
    },
    {
      image: "images/reporters/valentyn_barmashyn.png",
      name: "Valentyn Barmashyn",
      position: "Full Stack Software Engineer, Team Lead" ,
      company: "eTeam",
      rept: [
        {
          title: "Rx in React, Rx in Angular and why we all should be friends [Ru]",
          description: "React and Angular stacks became so similar In 2017-18 as they've never been before. Conceptual distinctions between them are blurring out. There only remained difference in their implementation. Let's talk about the modern work with data and events, role of flows (particularly Rx), functional programming and many more from  two points of view: practical and philosophical. We'll also dwell on the work with a code. Thus no-one will have any doubts about the fact that all of us are doing quite the same while a particular stack matters less and less."
        }
      ],
      aboutSpeaker: '',
      socialsRendered: '',
      socials: [
        {
          link: 'https://www.facebook.com/valentynbarmashyn',
          fatype: 'facebook'
        },
        {
          link: 'https://www.linkedin.com/in/valentyn-barmashyn-1a323aa9/',
          fatype: 'linkedin-square'
        },
        {
          link: 'https://github.com/Va1',
          fatype: 'github'
        }
      ],
      files:[
        {
          title: 'Rx in React, Rx in Angular and why we all should be friends',
          link:'https://drive.google.com/file/d/1czdxULKRVMGjDauj_DudHOtYc7wWlDYI/view?usp=sharing',
        },
      ],
      filesRendered: '',
    },
    {
      image: "images/reporters/alexander_shushunov.jpg",
      name: "Alexander Shushunov",
      position: "Senior Developer" ,
      company: "EPAM",
      rept: [
        {
          title: "Let's kill lifecycle [Ru]",
          description: "Do you hate lifecycle? componentWillReceiveProps make you bored? Let's make make React pure again! I will show, how lifecycle brings complexity (and errors) to your code. And how we can avoid it. Or make it more safety."
        }
      ],
      aboutSpeaker: '',
      socialsRendered: '',
      socials: [
        {
          link: 'https://www.linkedin.com/in/ashushunov/',
          fatype: 'linkedin-square'
        },
        {
          link: 'https://github.com/AlexanderShushunov',
          fatype: 'github'
        },
        {
          link: 'https://www.youtube.com/channel/UCujRYXmvPilNTgDw-uZQJ0Q?view_as=subscriber',
          fatype: 'link'
        },
      ]
    },
    {
      image: "images/reporters/artem_zakharchenko.jpg",
      name: "Artem Zakharchenko",
      position: "TeamLead" ,
      company: "Namecheap",
      rept: [
        {
          title: "What happens when you don't write the code. What advises would I like to take 10 years ago [Ru]",
          description: "This report is about changes in industry perception with increase in ages and experience accumulation."
        }
      ],
      aboutSpeaker: '',
      socialsRendered: '',
      socials: [
        {
          link: 'https://www.facebook.com/Javascriptdeveloper',
          fatype: 'facebook'
        },
        {
          link: 'https://twitter.com/blackrabbit99?lang=en',
          fatype: 'twitter'
        }
      ]
    },
    {
      image: "images/reporters/andrey_kucherenko.png",
      name: "Andrey Kucherenko",
      position: "Lead Software Engineer" ,
      company: "EPAM System",
      rept: [
        {
          title: "Code copy/paste detection on JavaScript [Ru]",
          description: "During the talk I will describe how to solve task of copy/paste detection with javascript. I will start with task, areas of apply of the task, tools and algorithms for solving copy.paste detection task."
        }
      ],
      aboutSpeaker: '',
      socialsRendered: '',
      socials: [
        {
          link: 'https://www.facebook.com/andrey.kucherenko',
          fatype: 'facebook'
        },
        {
          link: 'https://twitter.com/a_kucherenko',
          fatype: 'twitter'
        },
        {
          link: 'https://github.com/kucherenko/',
          fatype: 'github'
        }
      ]
    },
    {
      image: "images/reporters/dovhan_denys.jpg",
      name: "Denys Dovhan",
      position: "Software Consultant" ,
      company: "Bizico",
      rept: [
        {
          title: "Automating GitHub workflow with probot [Ua]",
          description: "Most of developers are passionated in Open Source, some of them have their own OS projects, some of them have commercial projects hosted on GitHub. Automating projects workflow can simplify daily work and make typical tasks automated.",
        }
      ],
      aboutSpeaker: '',
      socialsRendered: '',
      socials: [
        {
          link: 'https://www.facebook.com/denysdovhan',
          fatype: 'facebook'
        },
        {
          link: 'https://twitter.com/denysdovhan',
          fatype: 'twitter'
        },
        {
          link: 'https://www.linkedin.com/in/denysdovhan/',
          fatype: 'linkedin-square'
        },
        {
          link: 'https://www.instagram.com/denysdovhan/',
          fatype: 'instagram'
        },
        {
          link: 'https://github.com/denysdovhan',
          fatype: 'github'
        },
        {
          link: 'https://stackoverflow.com/users/5508862/denysdovhan',
          fatype: 'stack-overflow'
        },
        {
          link: 'https://denysdovhan.com/',
          fatype: 'link'
        },
      ],
      files:[
        {
          title: ' Automating GitHub workflow',
          link:'https://denysdovhan.com/slides-automating-github-workflow/',
        },
      ],
      filesRendered: '',
    },
    {
      image: "images/reporters/valerii_sorokobatko.jpg",
      name: "Valerii Sorokobatko",
      position: "Software Architect" ,
      company: "Plarium",
      rept: [
        {
          title: "Parsing Strings using (in)Finite-State-Machine and Prepack [Ru]",
          description:
            "<p>I became interested in parsers when I started to use CSS in JS libraries. I am in love with performance and if something\n" +
            "  works slow - I always try to find the ways to improve it. One of the  CSS in JS problem - parsing CSS strings in runtime.\n" +
            "<p>Especially if solution should support syntax validation, interpolation for dynamic CSS rules and be super fast and small.</p>\n" +
            "Of course we can use postCSS or similar lib to parse CSS to AST, validate it, process it and build final CSS but this \n" +
            "approach is not the best for runtime environment (browser).</p>\n" +
            "<p>Last year I spent a lot of time for research an development the way to build parser for such cases \n" +
            "(and not only for CSS). At OdessaJS I would like to speak about:</p>\n" +
            "<ul>\n" +
            "  <li>Basic Parser theory</li>\n" +
            "  <li>How to build parser using Finite-state machine</li>\n" +
            "  <li>How to develop parser with super readable code (even juniors could easily contribute it and add new syntax rules without additional knowledges)</li>\n" +
            "  <li>My fist successful experience using Prepack by Facebook - pre-evaluate parser and compress it to 800 bytes.</li>\n" +
            "</ul>",
        }
      ],
      aboutSpeaker: '',
      socialsRendered: '',
      socials: [
        {
          link: 'https://www.facebook.com/tuchk4',
          fatype: 'facebook'
        },
        {
          link: 'https://twitter.com/tuchk4',
          fatype: 'twitter'
        },
        {
          link: 'https://github.com/tuchk4',
          fatype: 'github'
        },
        {
          link: 'https://medium.com/@tuchk4',
          fatype: 'link'
        },
      ]
    },
    {
      image: "images/reporters/turskyi.jpg",
      name: "Viktor Turskyi",
      position: "CEO and founder" ,
      company: "WebbyLab",
      rept: [
        {
          title: "How to create a VR application with React. [En]",
          description:
            "<p>I will talk about virtual reality (VR). " +
            "At what state the technology now, why and how to use it. " +
            "JavaScript is very popular today it is possible todo almost any time of application with it. " +
            "And it seems that even VR applications can be build easily with JavaScript and React today. " +
            "The technology is very yang but it will be great to every JS dev to know about new possibilities.</p>\n" ,
        }
      ],
      aboutSpeaker: 'More than 30 talks at different conferences and meetups. More than 14 years in software development of complex and large projects. ',
      socialsRendered: '',
      socials: [
        {
          link: 'https://www.facebook.com/koorchik',
          fatype: 'facebook'
        },
        {
          link: 'https://twitter.com/koorchik',
          fatype: 'twitter'
        },
        {
          link: 'https://github.com/koorchik',
          fatype: 'github'
        },
        {
          link: 'https://www.linkedin.com/in/turskyi',
          fatype: 'linkedin-square'
        },
      ]
    },
    {
      image: "images/reporters/alex_troush.jpeg",
      name: "Alex Troush",
      position: "CTO" ,
      company: "Edenlab",
      rept: [
        {
          title: "The existential crisis in a blockchain era. [Ru]",
          description:
            "My talk will address problems that have any individuals through their lifetime. " +
            "Did you find your self in a place where everything changing so fast and you" +
            " cannot catch up? Asking yourself what to do with your life next? Regret " +
            "something in past that can totally change the life you live now?  I will " +
            "share a knowledge on how to sustain your mind in a new era of hype trains on " +
            "the example of new hype technology – blockchain. You will understand how the " +
            "blockchain works and how it changes the industry around you, but mostly this " +
            "talk is targeted to share the instruments and ideas around sustaining a healthy" +
            " mind during the era of changes." ,
        }
      ],
      aboutSpeaker: '',
      socialsRendered: '',
      socials: [
        {
          link: 'http://fb.me/troush69',
          fatype: 'facebook'
        },
        {
          link: 'https://twitter.com/troush69',
          fatype: 'twitter'
        },
        {
          link: 'https://github.com/Troush',
          fatype: 'github'
        },
        {
          link: 'https://www.linkedin.com/in/troush/',
          fatype: 'linkedin-square'
        },
      ]
    },
    {
      image: "images/reporters/roman_savitskyi.jpg",
      name: "Roman Savitskyi",
      position: "Team lead" ,
      company: "Infopulse",
      rept: [
        {
          title: "Chrome Dev Tools. [Ru]",
          description: "I'll tell you about my tricks with chrome devTools, and also show the new features that were added to the latest versions. An overview speech tips that will speed up your work" ,
        }
      ],
      aboutSpeaker: '',
      socialsRendered: '',
      socials: [
        {
          link: 'https://www.facebook.com/roman.savitskiy.104',
          fatype: 'facebook'
        },
        {
          link: 'https://twitter.com/sssrsav1',
          fatype: 'twitter'
        },
        {
          link: 'https://www.linkedin.com/in/roman-savitskiy-98b49158/',
          fatype: 'linkedin-square'
        },
      ]
    },
    {
      image: "images/reporters/valentine_mezentsev.jpg",
      name: "Valentine Mezentsev",
      position: "JS Developer at Chatbot Community" ,
      company: "Master Of Code Global",
      rept: [
        {
          title: "Workshop: Bot Battle: Google Home vs Alexa. [Ru]",
          description: "The battle will be based on a tic-tac-toe game through the interaction of 2 bots (Amazon Alexa Skill and Actions on Google), which will be connected to the smart Amazon Echo and Google Home speakers." ,
        }
      ],
      aboutSpeaker: '',
      socialsRendered: '',
      socials: [
        {
          link: 'https://www.facebook.com/profile.php?id=100001637934934',
          fatype: 'facebook'
        },
        {
          link: 'https://twitter.com/Mnilko',
          fatype: 'twitter'
        },
        {
          link: 'https://www.linkedin.com/in/valentine-mezentsev-32205693/',
          fatype: 'linkedin-square'
        },
        {
          link: 'https://www.instagram.com/mnilko/',
          fatype: 'linkedin-square'
        },
        {
          link: 'https://github.com/Mnilko',
          fatype: 'github'
        },
        {
          link: 'https://stackoverflow.com/users/6375530/Валентин-Мезенцев',
          fatype: 'stack-overflow'
        },
        {
          link: 'https://masterofcode.com/blog',
          fatype: 'link'
        },
      ]
    },
    {
      image: "images/reporters/gleb_dobzhanskyi.jpg",
      name: "Gleb Dobzhanskyi",
      position: "VP of Engineering" ,
      company: "Master Of Code Global",
      rept: [
        {
          title: "Workshop: Bot Battle: Google Home vs Alexa. [Ru]",
          description: "The battle will be based on a tic-tac-toe game through the interaction of 2 bots (Amazon Alexa Skill and Actions on Google), which will be connected to the smart Amazon Echo and Google Home speakers." ,
        }
      ],
      aboutSpeaker: '',
      socialsRendered: '',
      socials: [
        {
          link: 'https://twitter.com/glebone',
          fatype: 'twitter'
        },
        {
          link: 'http://www.linkedin.com/in/glibdobzhanskyi',
          fatype: 'linkedin-square'
        },
        {
          link: 'https://github.com/glebone',
          fatype: 'github'
        }
      ]
    },
    {
      image: "images/reporters/rustam_aliyev.jpg",
      name: "Rustam Aliyev",
      position: "CTO" ,
      company: "OneDome",
      rept: [
        {
          title: "From monolith web app to micro-frontends – How we extended microservices architecture to frontend. [En]",
          description:
            "Single-Page Application (SPA) is the main-stream modern frontend development approach. However," +
            " we quickly hit limitations of monolith SPA in the growing company with multiple product teams, different technologies " +
            "and release cycles. In this talk we share how these limitations have been overcome by extending microservice architecture to" +
            " React frontend using Lerna mono-repository and discuss alternative approaches such as WebComponents." ,
        }
      ],
      aboutSpeaker: '',
      socialsRendered: '',
      socials: [
        {
          link: 'https://twitter.com/rstml',
          fatype: 'twitter'
        },
        {
          link: 'https://www.linkedin.com/in/aliyev/',
          fatype: 'linkedin-square'
        },
        {
          link: 'https://github.com/rstml',
          fatype: 'github'
        }
      ]
    },
    {
      image: "images/reporters/ivan_martynov.jpg",
      name: "Ivan Martynov",
      position: "Frontend Engineer" ,
      company: "OneDome",
      rept: [
        {
          title: "From monolith web app to micro-frontends – How we extended microservices architecture to frontend. [Ru]",
          description:
            "Single-Page Application (SPA) is the main-stream modern frontend development approach. However," +
            " we quickly hit limitations of monolith SPA in the growing company with multiple product teams, different technologies " +
            "and release cycles. In this talk we share how these limitations have been overcome by extending microservice architecture to" +
            " React frontend using Lerna mono-repository and discuss alternative approaches such as WebComponents." ,
        }
      ],
      aboutSpeaker: '',
      socialsRendered: '',
      socials: [
        {
          link: 'https://www.facebook.com/profile.php?id=100000022396764',
          fatype: 'facebook'
        },
        {
          link: 'https://github.com/j-martyn',
          fatype: 'github'
        }
      ]
    },
    {
      image: "images/reporters/philip_shurpik.jpeg",
      name: "Philip Shurpik",
      position: "AI Engineer / Data Scientist" ,
      company: "Freelance / Self-employed",
      rept: [
        {
          title: "OK Google. What's next? [Ru]",
          description:
            "<p>In a certain moment you are 25-26 years old and work as a Senior JavaScript for already 2-3 years:) " +
            "At this very moment you understand that you don't know what to do next o_O</p>" +
            "<p>Let's talk about conscience extension, self-education and transit to a new sphere (AI/DataScience).</p>" ,
        }
      ],
      aboutSpeaker: '',
      socialsRendered: '',
      socials: [
        {
          link: 'https://www.facebook.com/philip.shurpik',
          fatype: 'facebook'
        },
        {
          link: 'https://twitter.com/philipshurpik',
          fatype: 'twitter'
        },
        {
          link: 'http://linkedin.com/in/philipshurpik',
          fatype: 'linkedin-square'
        },
        {
          link: 'https://www.instagram.com/philipshurpik/',
          fatype: 'instagram'
        },
        {
          link: 'https://www.github.com/philipshurpik/',
          fatype: 'github'
        }
      ]
    },
    {
      image: "images/reporters/ilya_ivanov.png",
      name: "Ilya Ivanov",
      position: "Mobile Team Lead" ,
      company: "Ciklum",
      rept: [
        {
          title: "Advanced React-Native. [Ru]",
          description:
            "<p>How is it possible to write native applications in JavaScript? In this talk we will meet React-Native " +
            "and dive a bit into advanced concepts. How React-Native is different from classical hybrid mobile development in JavaScript. " +
            "We will look how React-Native works and write great mobile applications using animations and navigations.</p>" ,
        }
      ],
      aboutSpeaker: '',
      socialsRendered: '',
      socials: [
        {
          link: 'https://www.facebook.com/ilya.ivanov.585?ref=bookmarks',
          fatype: 'facebook'
        },
        {
          link: 'https://www.linkedin.com/in/ilya-ivanov-a655082a/',
          fatype: 'linkedin-square'
        },
        {
          link: 'https://github.com/ilyaivanov',
          fatype: 'github'
        },
        {
          link: 'https://stackoverflow.com/users/1283124/ilya-ivanov',
          fatype: 'stack-overflow'
        }
      ]
    },
    {
      image: "images/reporters/alexander_khokhlov.jpg",
      name: "Alexander Khokhlov",
      position: "Founder" ,
      company: "Nots.io",
      rept: [
        {
          title: "Do not chase the hype train. Just steal the ideas. [Ru]",
          description:
            "<p>There's so much happening in javascript nowadays —  lot's of libraries, lot's of frameworks, lot's of ways of doing things pop up every week. So it's really easy to miss the point. But there’s no need to endlessly learn every new promising technology that comes out and painfully integrate it into your existing project. If the programming language you use is powerful enough, this lets you take just the ideas behind those and get them implemented blazingly fast in your code. This talk tells our story of how we use this concept while building complex realtime UI of nots.io in Clojure(Script).</p>" ,
        }
      ],
      aboutSpeaker: '',
      socialsRendered: '',
      socials: [
        {
          link: 'https://www.facebook.com/notsio/',
          fatype: 'facebook'
        },
        {
          link: 'https://twitter.com/nots_io',
          fatype: 'twitter'
        },
        {
          link: 'http://blog.nots.io/',
          fatype: 'link'
        }
      ]
    },
    {
      image: "images/reporters/denis_artyuhovich.jpg",
      name: "Denis Artyuhovich",
      position: "Javascript Developer" ,
      company: "Evolution Gaming",
      rept: [
        {
          title: "Evolution of Web Performance. [Ru]",
          description:
            "<p>For web developers, especially for web games developers, performance is a key point. We try to make user interaction as smooth as possible to achieve better user experience. During the speech, we'll look at how the web changed, what actually happens with our application in the browser and how to deal with it.</p>" ,
        }
      ],
      aboutSpeaker: '',
      socialsRendered: '',
      socials: [
        {
          link: 'https://www.linkedin.com/in/denisby/',
          fatype: 'linkedin-square'
        },
        {
          link: 'https://www.instagram.com/re_ise/',
          fatype: 'instagram'
        },
        {
          link: 'https://github.com/zaqqaz',
          fatype: 'github'
        },
        {
          link: 'https://denis.by/',
          fatype: 'link'
        }
      ]
    },
    {
      image: "images/reporters/andrew_mykhaliuk.jpg",
      name: "Andrew Mykhaliuk",
      position: "Frontend Engineer" ,
      company: "Snap inc.",
      rept: [
        {
          title: "Sorry, I need to make a build for frontend. [Ru]",
          description:
            "<p>Every time when you start your project, developer thinks about how build his project. Why we need to pay attention about it? How it's going with a build tools around frontend frameworks. We'll talk about webpack growth, how we can use build with less dependencies to be more flexible to switch between technologies, and we will go to the next level how we can use build tools as a framework.</p>" ,
        }
      ],
      aboutSpeaker: '',
      socialsRendered: '',
      socials: [
        {
          link: 'https://twitter.com/AndreyCtkn',
          fatype: 'twitter'
        },
        {
          link: 'https://github.com/AndreyUtka',
          fatype: 'github'
        }
      ]
    },
  ];


  var socialsItem = "<a class='speaker__link' href='${link}' target='_blank'><i class='fa fa-${fatype}' aria-hidden='true'></i></a>";
  $.template( "socialsTemplate", socialsItem );

  var fileItem = "<a class='speakers-slide__file' href='${link}' title='${title}' target='_blank'></a>";
  $.template( "filesTemplate", fileItem );

  var reportTitles = '';

  var speakerItem = "<div class='row '> <div data-modal-trigger='#speaker-modal' data-item-index='__ReplaceWithIndex' class='speakers-slide__item'>" +
    " <div class='speakers-slide__img-wrapper'>" + "<img src='${image}' alt=''>" +
    "</div> <div class='speakers-slide__info-wrapper'> <div class='speakers-slide__info'>"+
    "<h3 class='speakers-slide__info-title'><span class='speakers-slide__info-title-name' itemprop='name' >${name}</span></h3>"+
    "<p class='speakers-slider__info__place-of-work'><span class='speakers-slider__info-position' itemprop='jobTitle'>${position} @</span>" +
    "<span class='speakers-slider__info-company' itemprop='worksFor' itemscope itemtype='http://schema.org/Organization'><u itemprop='name'>${company}</u></span></p>"+
    "<p class='speakers-slider__info-rept font-weight-bold'>{{each rept }} {{html $value.title}} </br> </br>{{/each}}</p>"+
    "<div class='speakers-slide__info-links'>{{html socialsRendered}}</div> <div class='speakers-slide__files'>{{html filesRendered}}</div></div> </div> </div></div>";
  $.template( "speakerTemplate", speakerItem );



  function renderSpeakersCarousel() {

    // start render all
    $.each(speakers, function(i, sp) {
      $.each($.tmpl("socialsTemplate", sp.socials ), function(a, i){ sp.socialsRendered += i.outerHTML; });

      if(sp.files){
        $.each($.tmpl("filesTemplate", sp.files ), function(a, i){ sp.filesRendered += i.outerHTML; });
      }
    });

    var renderedSpeakers = [];
    $.each($.tmpl("speakerTemplate", speakers ), function(a, i){
      renderedSpeakers.push(i.outerHTML.replace('__ReplaceWithIndex', a));
    });

    var finalSliderHtml = '';
    var ifmobile = $(document).width() < 720;
    // var iftablet = $(document).width() < 960;

    for (var i=0; i< renderedSpeakers.length; i++) {
      var activeClass = '';
      // var colClass = iftablet ? (ifmobile ? 'col-10' : 'col-md-6') : 'col-lg-4';
      var colClass ='col-10 col-sm-6 col-lg-4';
      if (i===0) {
        activeClass = 'active';
      }
      finalSliderHtml+= '<div class="speakers-slide '+colClass+'" itemprop="performer" itemscope itemtype="http://schema.org/Person">';
      finalSliderHtml+=renderedSpeakers[i];

      // if(!ifmobile && renderedSpeakers[i+1]) {
      //   finalSliderHtml+=renderedSpeakers[i+1];
      //   i++;
      // }

      finalSliderHtml+='</div>'
    }



    $('#speakersSlider').html(finalSliderHtml);
  }

  renderSpeakersCarousel();

  $(document).on('click', '[data-modal-trigger="#speaker-modal"]', function() {
    var $speakerInfoBlock = $(this);
    loadSpeakerModal($speakerInfoBlock);
  });

  function loadSpeakerModal($speakerInfoBlock) {
    var $modalBody = $('#speaker-modal'),
      $modalSpeakerAvatar = $modalBody.find('.img-fluid'),
      $modalNameElement = $modalBody.find('.speaker__name'),
      $modalSpeakerPosition = $modalBody.find('.speaker__position'),
      $modalSpeakerCompany = $modalBody.find('.speaker__company'),
      $modalSpeakerLinks = $modalBody.find('.speaker__link-list'),
      $modalreportsContainer = $modalBody.find('.modal-body__reports'),
      $modalSpeakerAboutText = $modalBody.find('.speaker-text').toggle(false);

    var speakerIndex = parseInt($speakerInfoBlock.attr('data-item-index'));

    var $prevButton = $modalBody.find('button.prev');
    var $nextButton = $modalBody.find('button.next');

    $prevButton.unbind('click').click(function(){
      var prevIndex = speakerIndex == 0 ? (speakers.length-1) : speakerIndex - 1;

      $('#speaker-modal').modal('hide');
      setTimeout(function(){
        loadSpeakerModal($('[data-item-index="'+prevIndex+'"]'));
      },600);

    });

    $nextButton.unbind('click').click(function(){
      var nextIndex = speakerIndex == speakers.length-1 ? 0 : speakerIndex + 1;

      $('#speaker-modal').modal('hide');
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
        reportsContent += '<h2 class="modal-body__title">'+ item.title +'</h2>' + '<div class="modal-body__text">'+ item.description +'</div>';
      });

      speakerAvatar && $modalSpeakerAvatar.attr('src', speakerAvatar);
      speakerName && $modalNameElement.text(speakerName);
      speakerPosition && $modalSpeakerPosition.text(speakerPosition);
      speakerCompany && $modalSpeakerCompany.text(speakerCompany);

      reportsContent && $modalreportsContainer.html(reportsContent);

      speakerAboutText && $modalSpeakerAboutText.find('.modal-body__text').text(speakerAboutText).end().toggle(true);
      $modalSpeakerLinks.html($speakerInfoBlock.find('.speakers-slide__info-links').html());


      $('#speaker-modal').modal('show');
    }
  }

});
