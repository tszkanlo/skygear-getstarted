var webpack = require('webpack');

module.exports = {
  entry: './src/index.js',

  module: {
    loaders: [
      { test: /\.jade$/, loader: 'react-jade' },
      { test: /\.svg$/, loader: 'babel?presets[]=es2015,presets[]=react!svg-react' },
      { test: /\.js$/, loader: 'babel?presets[]=es2015'},
      { test: /\.jsx$/, loader: 'babel?presets[]=es2015,presets[]=react'},
      { test: /\.css$/, loader: "style!css" },
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

  resolve: {
    extensions: ["", ".js", ".jsx", ".jade"],
  },

  plugins: [
    new webpack.optimize.DedupePlugin()
  ],

};
