const path = require('path');
const HtmlWebpackPluhin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: { import: './src/index.js' },
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
    ],
  },
  plugins: [
    new HtmlWebpackPluhin({
      template: 'public/index.html',
    }),
  ],
};
