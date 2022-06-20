const path = require('path');
const dotenv = require('dotenv');
const { DefinePlugin } = require('webpack');
const HtmlWebpackPluhin = require('html-webpack-plugin');

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
    ],
  },
  plugins: [
    new HtmlWebpackPluhin({
      template: 'public/index.html',
    }),
    new DefinePlugin({
      'process.env': JSON.stringify(dotenv.config().parsed),
    }),
  ],
};
