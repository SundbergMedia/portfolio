// TODO: decide how to display them skills...
const data = {

  title: 'Fullstack javascript developer & CSS ninja',
  introduction: 'I\'m <strong>Fredrik Sundberg</strong>, a full-stack web developer based in <strong>Kalmar</strong>, Sweden. I create modern optimizer wehsites. My passion is building highly interactive websites.',
  ad: 'Currently looking for new projects!',

  skills: {
    'Programming languages': ['Javascript', 'Nodejs', 'PHP', 'Csharp', 'Python'],
    'Javascript frameworks': ['React', 'AngularJS', 'jQuery'],
    'Back-end frameworks & libraries': ['CodeIgniter', 'Express', 'dot-net', 'WordPress'],
    'CSS preprocessors': ['Stylus', 'Sass', 'LESS'],
    'Task runners': ['webpack', 'Gulp', 'Grunt'],
    'Databases': ['MySQL', 'MongoDB', 'Redis', 'Postgresql'],
    'Templating lanuages': ['Pug', 'Handlebars', 'HAML'],
    'Servers': ['Apache', 'nginx'],
    // 'Static site generators': ['jekyll'],
    'Tools of choice': ['Bisualstudio', 'GitHub', 'Slack', 'Ubuntu', 'Chrome']
  },

  projects: [
    {
      name: 'BooKing',
      url: 'http://booking.sundbergmedia.com',
      description: 'Geographical booking system with SMS integration. Utilizing Google Maps directions API to find the closest users to a defined location.',
      features: [
        'Integration with Google Maps API',
        'Send & receive SMS from users',
        'Real-time update state updates through websockets integration'
      ],
      keywords: ['React', 'Nodejs', 'Express', 'MongoDB', 'API', 'Websockets']
    },

    {
      name: 'Personal web desktop',
      description: 'Personal web desktop applikation. Implemented in vanilla Javascript using web components.',
      features: [
        'Vanilla ES6 web components',
        'Draggable windows',
        'State handling utilizing local storage',
        'Customizable widgets!'
      ],
      keywords: ['Javascript', 'HTML5', 'CSS3', 'Webpack', 'Websockets', 'Web components']
    },

    {
      name: 'Snippets',
      description: 'Snippets collections app. Part of assignment for server-based programming course at Linneaus University.',
      keywords: ['NodeJS', 'Express', 'MongoDB', 'Handlebars']
    },

    {
      name: 'Shotluckan Stammiskortet',
      description: 'Hybrid web-app for bar chain Shotluckan. Users can mark shots as favorites, vote, share on facebook, sort & filter... Shots data is administered through a custom wordpress plugin.',
      features: [
        'Hybrid web app',
        'Facebook integration',
        'Data import utilizing custom wordpress plugin'
      ],
      keywords: ['NodeJS', 'php', 'angularjs', 'express', 'facebook', 'api', 'WordPress', 'Grunt', 'MySQL']
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
    }

  ],

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

  svgIcons: ['stylus', 'handlebars', 'pug', 'express', 'haml'],

  version: 'app1.0.0',
  lorem: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos ab nemo velit aspernatur culpa esse possimus corrupti deserunt, dicta consequatur distinctio, qui officiis praesentium quam consequuntur fugiat illum ipsa tempore.',
  contact: 'Bla bla',
  contactHost: 'http://localhost:3000/'

}

module.exports = data
