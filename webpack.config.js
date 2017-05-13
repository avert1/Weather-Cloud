
var htmlWebpackPlugin = require('html-webpack-plugin');

var pluginConfig = new htmlWebpackPlugin({
  template: __dirname + '/index.html',
  filename: 'index.html',
  inject: 'head'
});
module.exports = {
  entry: './App/index.js',
  output:{
      filename: 'bundle.js',
      path: __dirname + '/build'
  },
  module:{
    loaders:[
      {test:/\.js$/, include:__dirname + '/App', loader:'babel-loader'}
    ]
  },
  plugins:[pluginConfig]
};
