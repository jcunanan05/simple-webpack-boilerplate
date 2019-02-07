const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = ({ mode } = { mode: 'production' }) => {
  return {
    mode,
    entry: path.join(__dirname, 'src/index.js'),
    output: {
      filename: 'bundle.js'
    },
    plugins: [new HtmlWebpackPlugin()]
  };
};
