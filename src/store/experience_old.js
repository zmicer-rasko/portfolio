export default {
  namespaced: true,
  getters: {
    data: state => state.data,
  },
  state: {
    data: {
      five: {
        'skills': [
          'PHP',
          'MySQL',
          'JS',
          'CSS',
          'HTML',
          'REST API'
        ],
        'frameworks_libs': [
          'Laravel',
          'Symfony',
          'ORM Doctrine',
          'ORM Eloquent',
          'JQuery',
        ],
        'env_deploy': [
          'Ubuntu',
          'Git',
          'Bitbucket',
          'Jira',
          'Trello',
          'PHPMyAdmin',
          'PHPStorm',
        ],
      },
      four: {
        'skills': [
          'Docker', 'Redis', 'PHPUnit',
        ],
        'frameworks_libs': [
          'VueJS', 'Vuex'
        ],
        'env_deploy': [
          'AWS',
          'Confluence',
          'OS X',
          'Webpack',
        ],
      },
      had: {
        'skills': [
          'PostgreSQL', 'SOAP API'
        ],
        'frameworks_libs': [
          'WordPress',
          'THREE.JS',
        ],
        'env_deploy': [
          'git flow',
          'Gitlab',
          'Gitlab CI',
          'Bitbucket Pipelines',
          'Github',
          'Github Pages',
          'Laravel Forge',
          'Mercurial',
          'Figma',
          'Zeppelin',
        ],
      },
    },
  },
};
