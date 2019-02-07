const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackMerge = require('webpack-merge');
const modeConfig = env => require(`./build-utils/webpack.${env}`)(env);

module.exports = ({ mode } = { mode: 'production' }) => {
  return webpackMerge(
    {
      mode,
      entry: path.join(__dirname, 'src/index.js'),
      output: {
        filename: 'bundle.js'
      },
      plugins: [
        new HtmlWebpackPlugin({
          title: 'Sample App',
          template: path.join(__dirname, 'src/index.html')
        })
      ],
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: ['babel-loader']
          },
          {
            test: /\.html$/,
            use: ['raw-loader']
          }
        ]
      }
    },
    modeConfig(mode)
  );
};
