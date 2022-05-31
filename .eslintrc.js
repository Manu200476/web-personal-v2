module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    semi: ['error', 'never'],
    'max-len': ['error', { code: 180, ignoreUrls: true }],
    'global-require': 0,
    'linebreak-style': 0,
  },
}
