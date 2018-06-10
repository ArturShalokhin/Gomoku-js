module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'vue/attributes-order': 'error',
    'vue/order-in-components': 'error',
    'no-tabs': 'off',
    'indent': 'off',
    'no-mixed-spaces-and-tabs': 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}