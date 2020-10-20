'use strict';

const { merge } = require('webpack-merge');

const common = require('./webpack.common.js');
const PATHS = require('./paths');

// Merge webpack configuration files
const config = merge(common, {
  entry: {
    popup: PATHS.src + '/popup.js',
    'content_script': PATHS.src + '/content_script.js',
    background: PATHS.src + '/background.js',
    bilibili: PATHS.src + '/other_functions/bilibili/index.js'
  },
});

module.exports = config;
