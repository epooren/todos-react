
var webpack = require('webpack');


var uglify = new webpack.optimize.UglifyJsPlugin({
  compress: true
});

var config = {
  entry: './src/js/app.js',
  output: {
    path: 'assets',
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel'],
        include: __dirname + '/src/js'
      },

      {
        test: /\.css$/,
        loader: 'style!css',
        include: __dirname + '/src/css'
      },
    ]
  },

  plugins: [uglify],

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  devtool: 'source-map'
};


module.exports = config;
