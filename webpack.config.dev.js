var webpack = require('webpack');
var markdownRenderer = require('./markdown-renderer.js');

module.exports = {
  devtool: 'source-map',

  entry: {
    dev: ['webpack/hot/dev-server', './dev/index.js']
  },

  module: {
    loaders: [
      { test: /\.md$/, loader: 'html!markdown' },
      { test: /\.jade$/, loader: 'react-jade?split=true' },
      { test: /\.svg$/, loader: 'raw' },
      { test: /\.js$/, loader: 'babel?presets[]=es2015'},
      { test: /\.jsx$/, loader: 'babel?presets[]=es2015,presets[]=react'},
      { test: /\.css$/, loader: "css" },
    ]
  },

  markdownLoader: {
    renderer: markdownRenderer,
  },

  output: {
    filename: 'dev/bundle.js'
  },

  resolve: {
    extensions: ["", ".js", ".jsx", ".jade"],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],

  devServer: {
    contentBase: './dev'
  }
};
