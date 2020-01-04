module.exports = {
  root: true,
  extends: '@react-native-community',

  globals: {
    __DEV__: 'readonly'
  },

  rules: {
    'no-console': ["error", { allow: ['tron'] }],
  }
};
