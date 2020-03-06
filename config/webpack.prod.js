const TerserPlugin = require('terser-webpack-plugin');
const externals = require('webpack-node-externals');
const path = require('path');

module.exports = {
  entry: [path.resolve(__dirname, '../shared/index.tsx')],
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'index.js',
    libraryTarget: 'commonjs2'
  },
  mode: 'production',
  target: 'node',
  externals: [externals()],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        exclude: /node_modules/,
        terserOptions: {
          output: {
            comments: false
          }
        },
        extractComments: false
      })
    ]
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        include: path.resolve(__dirname, '../shared'),
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader'
          }
        ]
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  }
};
