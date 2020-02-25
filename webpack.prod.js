const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');

module.exports = {
  entry: [path.resolve(__dirname, 'src/shared/index.js')],
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index.js'
  },
  mode: 'production',
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [new UglifyJsPlugin()]
};
