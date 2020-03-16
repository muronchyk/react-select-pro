const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const config = require('./webpack.config');

config.entry = path.resolve(__dirname, '../src/index.tsx');
config.mode = 'development';
config.resolve.modules = ['node_modules'];
config.devServer = {
  contentBase: path.join(__dirname, '../dist'),
  compress: true,
  port: 8080
};
config.module.rules[0].use[0] = {
  ...config.module.rules[0].use[0],
  options: { configFile: path.join(__dirname, '../tsconfig.dev.json') }
};
config.plugins = [new HtmlWebpackPlugin()];

module.exports = config;
