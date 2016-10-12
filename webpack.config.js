"use strict";

const webpack = require('webpack');
const path = require('path');
const PUBLIC_PATH = '/dist/';

module.exports = {
  devtool: 'source-map',
  entry: {
    main: './src/index.ts',
  },
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loaders: [
          'babel?cacheDirectory',
          'awesome-typescript-loader'
        ],
      },
      {
        test: /\.less$/,
        loader: "style!css!postcss-loader!less"
      },
      {
        test: /\.css$/,
        loader: "style!css!postcss-loader"
      },
      {
        test: /\.(woff|ttf|woff2|svg|eot)$/,
        loader: 'url?limit=100000'
      }
    ],
  },
  output: {
    filename: '[name]_bundle.js',
    path: path.join(__dirname, '..', 'build'),
    publicPath: PUBLIC_PATH,
  },
  plugins: [
    // new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      }
    }),
  ],
  resolve: {
    root: [path.resolve('../src')],
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
  }
}

