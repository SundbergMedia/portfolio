// TODO: decide how to display them skills...
const data = {

  title: 'Fullstack javascript developer & CSS ninja',
  introduction: 'I\'m Fredrik Sundberg, a full-stack web developer based in Kalmar, Sweden. My passion is building highly interactive websites.',
  ad: 'Currently looking for new projects!',

  skills: {
    'languages': ['javascript', 'nodejs', 'php', 'csharp', 'python'],
    'javascript frameworks': ['react', 'angularjs', 'jquery'],
    'backend frameworks & libraries': ['codeigniter', 'express', 'dot-net', 'wordpress'],
    'css preprocessors': ['stylus', 'scss', 'sass', 'less'],
    'task runners': ['webpack', 'gulp', 'grunt'],
    'databases': ['MySQL', 'MongoDB', 'Redis', 'postgresql'],
    'web servers': ['apache', 'nginx'],
    'static site generators': ['jekyll'],
    'prefered tools': ['github', 'slack', 'visualstudio', 'ubuntu', 'chrome']
  },

  projects: [
    {
      name: 'BooKing',
      url: 'http://booking.sundbergmedia.com',
      description: 'Geographical booking system',
      features: [
        'Integration with Google Maps API',
        'Send & receive SMS from users',
        'Real-time update state updates through websockets integration'
      ],
      keywords: ['React', 'node', 'express', 'API', 'websockets']
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
      keywords: ['javascript', 'html5', 'css3', 'websockets', 'web components']
    },

    {
      name: 'Snippets',
      description: 'Snippets collections app. Part of assignment for server-based programming course at Linneaus University.',
      keywords: ['Nodejs', 'express', 'MongoDB']
    },

    {
      name: 'Shotluckan Stammiskortet',
      description: 'Hybrid web-app for bar chain Shotluckan. Users can mark shots as favorites, vote, share on facebook, sort & filter... Shots data is administered through a custom wordpress plugin.',
      features: [
        'Hybrid web app',
        'Facebook integration',
        'Data import utilizing custom wordpress plugin'
      ],
      keywords: ['nodejs', 'php', 'angularjs', 'express', 'facebook', 'api', 'wordpress', 'grunt', 'mysql']
    },

    {
      name: 'Geometric shapes',
      url: 'http://shapes.sundbergmedia.com',
      description: 'Exercise in object-oriented C#',
      keywords: ['csharp', 'dot-net']
    },

    {
      name: 'This very site',
      url: 'https://github.com/theted/portfolio',
      description: 'Simple data driven static webpage. Source code available on github!',
      keywords: ['Pug', 'Stylus', 'Gulp']
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

  svgIcons: ['stylus', 'handlebars', 'pug', 'express'],

  version: 'app1.0.0',
  lorem: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos ab nemo velit aspernatur culpa esse possimus corrupti deserunt, dicta consequatur distinctio, qui officiis praesentium quam consequuntur fugiat illum ipsa tempore.',
  contact: 'Bla bla',
  contactHost: 'http://localhost:3000/'

}

module.exports = data
