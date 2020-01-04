module.exports = {
  env: {
    es6: true,
  },
  extends: [
    'airbnb-base',
    'prettier',
    'prettier/react'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    __DEV__: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'jsx-a11y',
    'react-hooks',
    'prettier'
  ],
  rules: {
    'prettier/prettier': ['error', { 'endOfLine': 'auto' }],
    "react/jsx-filename-extension": ["error", { extensions: [".js", ".jsx"] }],
    'no-console': ['error', { allow: ['tron'] }],
  },
};
