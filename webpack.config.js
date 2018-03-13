var path = require('path');

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: [
    'babel-polyfill',
    './app'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: 'app.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'stage-0', 'react'],
          plugins: [
            require.resolve('retail-ui/scripts/babel/component-imports.js')
          ],
        },
        include: [
          path.join(__dirname, 'src'),
          /retail-ui/,
        ],
      },
      {
        test: /\.(css|less)$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
      },
      {test: /\.less$/, loader: 'less-loader'},
      {test: /\.(png|woff|woff2|eot)$/, loader: "file-loader"},
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      ui: 'retail-ui/components'
    },
  },
  plugins: [
    new ExtractTextPlugin('app.css'),
  ],
  devtool: 'source-map',
};
