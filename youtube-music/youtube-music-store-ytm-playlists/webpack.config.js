/* eslint-env node */

const path = require('path');

module.exports = {
  devtool: 'inline-source-map',
  entry: path.join(__dirname, 'src', 'index.js'),
  mode: 'development',
  // mode: 'production',
  output: {
    filename: 'bundle.user.js',
    path: path.join(__dirname, 'dist'),
  },
};
