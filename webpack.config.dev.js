var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',

  entry: {
    dev: ['webpack/hot/dev-server', './dev/index.js']
  },

  module: {
    loaders: [
      { test: /\.jade$/, loader: 'react-jade?split=true' },
      { test: /\.svg$/, loader: 'babel?presets[]=es2015,presets[]=react!svg-react' },
      { test: /\.js$/, loader: 'babel?presets[]=es2015'},
      { test: /\.jsx$/, loader: 'babel?presets[]=es2015,presets[]=react'},
      { test: /\.css$/, loader: "style!css" },
    ]
  },

  output: {
    filename: 'dev/bundle.js'
  },

  resolve: {
    extensions: ["", ".js", ".jade"],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],

  devServer: {
    contentBase: './dev'
  }
};
