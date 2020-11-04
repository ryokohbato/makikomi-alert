const path = require('path');
const glob = require("glob");

module.exports = {
  mode: 'development',
  entry: glob.sync('./src/script/*.ts').reduce((acc, path) => {
        const entry = path.replace('src/script/', '').replace('.ts', '')
        acc[entry] = path
        return acc
    }, {}),
  output: {
    path: path.resolve(__dirname, 'dist/script'),
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: 'ts-loader'
      }
    ]
  },
  devtool: 'cheap-module-source-map',
}
