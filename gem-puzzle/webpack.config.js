const path = require('path');
const EslintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const src = path.resolve(__dirname, 'src', 'modules');
const main = path.resolve(__dirname, 'src/modules/Main/Main.ts');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: main,
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js',
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ['source-map-loader', 'ts-loader'],
        exclude: /node_modules/,
      },
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
      emitError: false,
      extensions: 'ts',
    }),
    new HtmlWebpackPlugin(),
    new webpack.ProvidePlugin({
      DOMParser: 'dom-parser',
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 3000,
    clientLogLevel: 'info',
    hot: true,
  },
};
