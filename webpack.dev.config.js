


var config = {
  entry: ['./src/app.js'],
  output: {
    path: __dirname + '/dist',
    filename: 'app.dev.js',
  },

  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['babel'],
      include: __dirname + '/src/js'
    }]
  }

  devtool: 'eval'
};


module.exports = config;
