const common = require('./webpack.common');
const { merge } = require('webpack-merge');
const port = process.env.PORT || 3000;
const host = process.env.HOST || 'localhost';

module.exports = merge(common, {
  mode: 'development',
  output: {
    publicPath: '/',
  },
  optimization: {
    minimize: false,
  },
  devServer: {
    host: host,
    port: port,
    historyApiFallback: true,
    open: true,
    historyApiFallback: true,
  },
});
