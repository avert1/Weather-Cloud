
var htmlWebpackPlugin = require('html-webpack-plugin');

var pluginConfig = new htmlWebpackPlugin({
  template: __dirname + '/App/Views/index.html',
  filename: '../../Views/index.html',
  inject: 'head'
});
module.exports = {
  entry: './App/Routes/index.js',
  output:{
      filename: 'bundle.js',
      path: __dirname + '/App/public/js'
  },
  module:{
    loaders:[
      //{test:/\.js$/, include:__dirname + '/App', loader:'babel-loader'}
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  },
  //plugins:[pluginConfig]
};
