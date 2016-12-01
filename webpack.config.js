'use strict';

const webpack = require('webpack');
const path = require('path');

const APP_DIR = path.join(__dirname, 'src/client/jsx');
const BUILD_DIR = path.join(__dirname, 'src/client/assets/javascript');

const config = {
  entry: [
      APP_DIR + '/index.jsx'
    ],
  output: 
    {
      path: BUILD_DIR,
      filename: 'bundle.js'
    },
  devtool: 'source-map',
  module : {
    loaders : [
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      },
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel'
      }
    ]
  }
};

module.exports = config;
