const DotenvWebpackPlugin = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { webpack } = require('webpack');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './src/app/main.js',

  plugins: [
    new HtmlWebpackPlugin({
      template: './template.html',
      inject: 'body',
    }),
    new Dotenv({
      systemvars: true,
    }),
  ],
};
