var webpack = require('webpack');

module.exports = {
  entry: './src/main.js',

  module: {
    loaders: [
      { test: /\.jade$/, loader: 'react-jade' },
      { test: /\.js$/, loader: 'babel', query: {presets: ['es2015']}},
    ]
  },

  externals: {
    'react': true
  },

  output: {
    filename: './dist/skygear-getstarted.js',
    library: 'SkygearGetstarted',
    libraryTarget: 'commonjs2',
  },

  plugins: [
    new webpack.optimize.DedupePlugin()
  ],

};
