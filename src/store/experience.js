export default {
  namespaced: true,
  getters: {
    data: state => state.data,
  },
  state: {
    data: {
      master: {
        title: 'Master',
        items:[
          'Fullstack web-development',
          'PHP',
          'VueJS',
          'Laravel',
        ],
      },
      advanced: {
        title: 'Advanced',
        items: [
          'JS',
          'MySQL',
          'Docker',
          'CSS + HTML',
          'Symfony PHP framework',
          'GIT',
          'Teamleading / Teaching',
          'PHPUnit',
          'Saas development',
        ],
      },
      basic_familiar_misc: {
        title: 'Basic / Familiar / Misc',
        items: [
          'Mobile app development',
          'Mobile app delivery',

          // '',
          'Mercurial',
          'Git flow',

          // '',
          'Github',
          'Github Pages',

          // '',
          'Gitlab',
          'Gitlab CI',

          // '',
          'Bitbucket',
          'Bitbucket Pipelines',
          'Confluence',
          'Jira',

          // '',
          'Trello',
          'Notion',

          // '',
          'Laravel Forge',

          // '',
          'Figma',
          'Zeppelin',

          // '',
          'WordPress',
          'THREE.JS',

          // '',
          'AWS',
          'Webpack',
          'JQuery',
          'bash',

          // '',
          'OS X',
          'Ubuntu',
          'Linux',
          'Windows',

          // '',
          'PHPMyAdmin',
          'PHPStorm',
          'Pest',

          // '',
          'GameDev',
          'AI',
        ]
      },
    },
  },
};
