module.exports = {
  scenarios: [
    {
      name: '1.13',
      dependencies: {
        "ember": "^1.13"
      }
    },
    {
      name: '2.5',
      dependencies: {
        "ember": "^2.5"
      }
    },
    {
      name: '2.9',
      dependencies: {
        "ember": "^2.9"
      }
    },
    {
      name: 'default',
      dependencies: { }
    },
    {
      name: 'ember-release',
      dependencies: {
        'ember': 'components/ember#release'
      },
      resolutions: {
        'ember': 'release'
      }
    },
    {
      name: 'ember-beta',
      dependencies: {
        'ember': 'components/ember#beta'
      },
      resolutions: {
        'ember': 'beta'
      }
    },
    {
      name: 'ember-canary',
      dependencies: {
        'ember': 'components/ember#canary'
      },
      resolutions: {
        'ember': 'canary'
      }
    }
  ]
};
