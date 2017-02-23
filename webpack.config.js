var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'client/build');
var APP_DIR = path.resolve(__dirname, 'client/src/index.jsx');

module.exports = {
  devtool: 'eval',
  entry: APP_DIR,
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'file'
      },
    ]
  },
  externals: {
  "isomorphic-fetch": "fetch"
  },
};