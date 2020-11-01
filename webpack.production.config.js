const path = require('path');
const devConfig = require('./webpack.development.config');

module.exports = {
  ...devConfig,

  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'product/script'),
    filename: '[name].js'
  },
  devtool: false,
}
