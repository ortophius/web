const path = require('path');
const EslintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const src = path.resolve(__dirname, 'src');
const main = path.resolve(__dirname, 'src/modules/main/main.js');

module.exports = {
  mode: 'development',
  entry: main,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js',
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.pug$/,
        use: [
          'apply-loader',
          'pug-loader',
        ],
      },
      {
        test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
        loader: 'file-loader',
      },
    ],
  },
  plugins: [
    new EslintPlugin({
      context: src,
      emitWarning: true,
    }),
    new HtmlWebpackPlugin(),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    open: true,
    port: 3000,
  },
};
