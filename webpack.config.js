const path =  require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack'); 

module.exports={
  entry:{
    index: path.resolve(__dirname, './app.js')
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {  test: /\.css$/, use: [MiniCssExtractPlugin.loader,'css-loader'] }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './index.html' }),
    new MiniCssExtractPlugin({
      filename: 'style.css', 
    }),
  ],
  mode: "development",
};