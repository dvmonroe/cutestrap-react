module.exports = {
  "env": {
    "es6": true,
    "browser": true
  },
  "extends": "airbnb",
  "rules": {
    'import/no-unresolved': ['error', { ignore: ['^react$', '^classnames$'] }],
    "import/prefer-default-export": 0
  }
};
