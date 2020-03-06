const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: [path.resolve(__dirname, '../src/index.tsx')],
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js'
  },
  mode: 'development',
  devtool: 'inline-source-map',
  resolve: {
    modules: ['node_modules'],
    extensions: ['.ts', '.tsx', '.js']
  },
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    compress: true,
    port: 8080
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader'
          }
        ]
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader'
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin()]
};
