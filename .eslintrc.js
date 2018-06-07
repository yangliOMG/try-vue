// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential', 
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    'indent': [0, 2],
    'no-multiple-empty-lines': 'off',
    'no-multiple-spaces': 'off',
    'no-trailing-spaces': 'off',
    'no-multi-spaces': 'off',
    'comma-dangle': 'off',
    'no-undef': 'off',
    'space-before-function-paren': 'off',
    'key-spacing': 'off',
    'object-curly-spacing': 'off',
    'no-tabs': 'off',
    'comma-spacing': 'off',
    'keyword-spacing': 'off',
    'arrow-spacing': 'off',
    'space-infix-ops': 'off',
    'space-before-blocks': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
