// TODO: decide how to display them skills...
const data = {

  title: 'Fullstack javascript developer & CSS ninja',
  introduction: 'Hello! I\'m <strong>Fredrik Sundberg</strong>, a full-stack web developer based in <strong>Kalmar</strong>, Sweden.',
  ad: 'Looking for new projects!',
  intro: [
    'I create highlty modern, optimized wehsites. I have >10 years of experience in web development and love to always learn new things.',
    'I am currently studying web programming at Linneaus University to further develop my skills.',
    '...with an extra interest for automation and real-time communication'
  ],

  skills: {
    'Programming languages': ['JavaScript', 'NodeJS', 'PHP', 'CSharp'],
    'Javascript frameworks': ['React', 'AngularJS', 'jQuery'],
    'Back-end frameworks & libraries': ['CodeIgniter', 'Express', 'dot-net', 'WordPress'],
    'CSS preprocessors': ['Stylus', 'SASS', 'LESS'],
    'Task runners': ['Gulp', 'Webpack', 'Grunt'],
    'Databases': ['MySQL', 'MongoDB', 'Postgresql', 'Redis'],
    'Templating lanuages': ['Pug', 'Handlebars', 'HAML'],
    'Servers & virtualization tools': ['Apache', 'nginx', 'Docker'],
    'Weapons of choice': ['Visualstudio', 'GitHub', 'Slack', 'Ubuntu', 'Chrome']
  },

  projects: [
    {
      name: 'BooKing',
      url: 'https://booking.sundbergmedia.com',
      description: 'Geographical booking system with SMS integration. Utilizing Google Maps directions API to find the closest users to a defined location.',
      features: [
        'Integration with Google Maps API',
        'Send & receive SMS from users',
        'Real-time update state updates through websockets integration'
      ],
      keywords: ['React', 'Nodejs', 'Express', 'MongoDB']
    },

    {
      name: 'Personal web desktop',
      url: 'https://pwd.sundbergmedia.com',
      description: 'Personal web desktop applikation. Implemented in vanilla Javascript using web components.',
      features: [
        'Vanilla ES6 web components',
        'Draggable windows',
        'State handling utilizing local storage',
        'Customizable widgets!'
      ],
      keywords: ['Javascript', 'HTML5', 'CSS3', 'Webpack']
    },

    {
      name: 'Snippets',
      url: 'http://snippets.sundbergmedia.com',
      description: 'Snippets collections app. Part of assignment for server-based programming course at Linneaus University.',
      keywords: ['NodeJS', 'Express', 'MongoDB', 'Handlebars']
    },

    {
      name: 'Shotluckan Stammiskortet',
      url: 'https://stammiskortet.shotluckan.se',
      description: 'Hybrid web-app for bar chain Shotluckan. Users can mark shots as favorites, vote, share on facebook, sort & filter... Shots data is administered through a custom wordpress plugin.',
      features: [
        'Hybrid web app',
        'Facebook integration',
        'Data import utilizing custom wordpress plugin'
      ],
      keywords: ['NodeJS', 'php', 'angularjs', 'express', 'facebook', 'WordPress', 'Grunt', 'MySQL']
    },

    {
      name: 'Geometric shapes',
      url: 'http://shapes.sundbergmedia.com',
      description: 'Exercise in object-oriented C#. Source code available upon request.',
      keywords: ['Csharp', 'Dot-net']
    },

    {
      name: 'This very site',
      url: 'https://github.com/theted/portfolio',
      description: 'Simple data-driven statically generated site. Light-weight & optimized. Source code available on github.',
      keywords: ['Gulp', 'Stylus', 'Pug']
    },

    {
      name: 'Guitar scales finder',
      url: 'https://codepen.io/theted/pen/zrvaYP',
      description: 'Guitar scale thing',
      keywords: ['javascript', 'jquery', 'pug', 'stylus', 'codepen']
    },

    {
      name: 'GitHooks',
      url: 'https://githooks.sundbergmedia.com',
      description: 'Real-time github issues notifications dashboard utilizing websockets.',
      keywords: ['NodeJS', 'Javascript', 'GitHub']
    },

    {
      name: 'Scrape library',
      url: 'https://github.com/theted/scrape-lib',
      description: 'Light-weight toolkit for web scraping. Open source & available on github.',
      keywords: ['NodeJS']
    },

    {
      name: 'CSS grids',
      url: 'https://grids.sundbergmedia.com',
      description: 'Study in modern CSS layout frameworks, especially grid & flexbox models.',
      keywords: ['HTML5', 'CSS3']
    },

    {
      name: 'Nerja Villas',
      url: 'http://nerjavillasforrent.com',
      description: 'Booking system for husing agency Nerja villas in Spain - complete with it\'s own CMS.',
      keywords: ['PHP', 'CodeIgniter', 'jQuery']
    }

  ],

  // social links
  social: {
    linkedin: 'https://linkedin.com/in/fredrik-sundberg-02994272/',
    facebook: 'https://www.facebook.com/fsundberg1',
    github: 'https://github.com/theted',
    codepen: 'https://codepen.io/theted/'
  },

  iconMap: {
    react: 'react-original',
    less: 'less-plain-wordmark'
  },

  // icons which use SVG
  svgIcons: ['stylus', 'handlebars', 'pug', 'express', 'haml', 'linkedin', 'codepen'],

  version: 'app1.0.0',
  lorem: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos ab nemo velit aspernatur culpa esse possimus corrupti deserunt, dicta consequatur distinctio, qui officiis praesentium quam consequuntur fugiat illum ipsa tempore.',
  contact: 'What can I do for your project? Get in touch and let us work together!',
  contactHost: 'https://contact.sundbergmedia.com/',
  analyticsID: 'UA-143397962-1'

}

module.exports = data
