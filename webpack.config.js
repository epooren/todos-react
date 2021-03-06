


var config = {
  entry: './src/js/app.js',
  output: {
    publicPath: 'assets',
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

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  devtool: 'eval'
};


module.exports = config;
