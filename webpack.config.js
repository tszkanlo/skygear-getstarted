var webpack = require('webpack');
var markdownRenderer = require('./markdown-renderer.js');

module.exports = {
  entry: './src/index.jsx',

  module: {
    loaders: [
      { test: /\.md$/, loader: 'html!markdown' },
      { test: /\.jade$/, loader: 'react-jade' },
      { test: /\.svg$/, loader: 'raw' },
      { test: /\.js$/, loader: 'babel?presets[]=es2015'},
      { test: /\.jsx$/, loader: 'babel?presets[]=es2015,presets[]=react'},
      { test: /\.css$/, loader: "style!css" },
    ]
  },

  markdownLoader: {
    renderer: markdownRenderer,
  },

  externals: {
    'react': true
  },

  output: {
    filename: './dist/skygear-getstarted.js',
    library: 'SkygearGetstarted',
    libraryTarget: 'commonjs2',
  },

  resolve: {
    extensions: ["", ".js", ".jsx", ".jade"],
  },

  plugins: [
    new webpack.optimize.DedupePlugin()
  ],

};
