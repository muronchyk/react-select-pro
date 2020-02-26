const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: [path.resolve(__dirname, '../src/index.js')],
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js'
  },
  mode: 'development',
  devtool: 'inline-source-map',
  resolve: {
    modules: ['node_modules']
  },
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    compress: true,
    port: 8080
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin()]
};
