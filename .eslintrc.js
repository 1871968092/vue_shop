module.exports = {
  root: true,

  env: {
    node: true
  },

  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],

  parserOptions: {
    parser: 'babel-eslint'
  },

  rules: {
    'space-before-function-paren': 0,
    camelcase: 'off',
    '@typescript-eslint/camelcase': 0,
    'no-console': 'off',
    'no-debugger': 'off',
    indent: 'off',
    'vue/no-async-in-computed-properties': 'off',
    'vue/no-dupe-keys': 'off',
    'vue/no-duplicate-attributes': 'off',
    'vue/no-parsing-error': 'off',
    'vue/no-reserved-keys': 'off',
    'vue/no-shared-component-data': 'off',
    'vue/no-side-effects-in-computed-properties': 'off',
    'vue/no-template-key': 'off',
    'vue/no-textarea-mustache': 'off'
  },

  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ]
}
