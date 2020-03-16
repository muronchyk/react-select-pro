const TerserPlugin = require('terser-webpack-plugin');
const externals = require('webpack-node-externals');
const path = require('path');
const config = require('./webpack.config');

config.entry = [path.resolve(__dirname, '../src/common/index.tsx')];
config.output = {
  ...config.output,
  libraryTarget: 'commonjs2'
};
config.mode = 'production';
config.target = 'web';
config.externals = [externals()];
config.optimization = {
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
};
config.module.rules[0].use[0] = {
  ...config.module.rules[0].use[0],
  options: { configFile: path.join(__dirname, '../tsconfig.prod.json') }
};

module.exports = config;
