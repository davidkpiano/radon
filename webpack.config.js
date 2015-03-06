var webpack = require('webpack');

module.exports = {
  entry: './modules/index.js',
  output: {
    path: './build',
    filename: 'radon.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader!jsx-loader?harmony'
      },
      {
        test: /\.jsx$/,
        loader: 'jsx-loader?insertPragma=React.DOM&harmony'
      }
    ]
  }
};