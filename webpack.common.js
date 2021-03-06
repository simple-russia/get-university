const path = require('path');
const dotenv = require('dotenv');
const { DefinePlugin } = require('webpack');
const HtmlWebpackPluhin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  entry: {
    main: { import: './src/index.tsx' },
  },
  output: {
    filename: '[name].[fullhash].js',
    path: path.resolve(__dirname, 'build'),
  },
  resolve: {
    extensions: ['.ts', '.js', '.json', '.tsx'],
    alias: {
      src: path.resolve(__dirname, 'src/'),
      lang: path.resolve(__dirname, 'lang/'),
      public: path.resolve(__dirname, 'public/'),
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/i,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.tsx?$/i,
        exclude: /node_modules/,
        use: ['ts-loader'],
      },
      {
        test: /\.s?css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpg|svg)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPluhin({
      template: 'public/index.html',
      favicon: 'public/favicon.ico',
    }),
    new DefinePlugin({
      'process.env': JSON.stringify(dotenv.config().parsed),
    }),
    new ESLintPlugin({
      extensions: ['.js', '.ts', '.jsx', '.tsx'],
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
    }),
  ],
};
