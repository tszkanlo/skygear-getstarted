var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',

  entry: {
    dev: ['webpack/hot/dev-server', './dev/index.js']
  },

  module: {
    loaders: [
      { test: /\.jade$/, loader: 'react-jade' },
      { test: /\.js$/, loader: 'babel', query: {presets: ['es2015']}},
    ]
  },

  output: {
    filename: 'dev/bundle.js'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],

  devServer: {
    contentBase: './dev'
  }
};
