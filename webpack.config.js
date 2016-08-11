module.exports = {
  entry: './client/index.js',
  output: {
    path: __dirname + '/server/public',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { loader: 'babel-loader', test: /\.js$/, exclude: 'node_modules' }, 
      { loader: 'handlebars-loader', test: /\.hbs$/ }
    ]
  },
  devtool: 'source-map'
}
