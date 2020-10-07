/* eslint-disable no-undef */
const { override, addBabelPlugins } = require('customize-cra');

module.exports = override(
  addBabelPlugins(
    '@babel/plugin-proposal-nullish-coalescing-operator'
  )
);