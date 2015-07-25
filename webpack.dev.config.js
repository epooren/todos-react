


var config = {
  entry: ['./src/js/app.js'],
  output: {
    //path: __dirname + '/dist',
    filename: 'app.dev.js',
    publicPath: 'dev'
  },

  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['babel'],
      include: __dirname + '/src/js'
    }]
  },

  devtool: 'eval'
};


module.exports = config;
