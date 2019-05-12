module.exports = {
  entry: './src/punkapi-javascript-wrapper.js',
  output: {
    path: './dist',
    filename: 'punkapi-javascript-wrapper.js',
    library: 'PunkAPIWrapper'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  }
}
