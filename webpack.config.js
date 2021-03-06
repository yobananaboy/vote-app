const path = require("path");

const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const ChunkManifestPlugin = require('webpack-chunk-manifest-plugin');

const extractSass = new ExtractTextPlugin("public/style.css");

module.exports = {
  entry: {
    main: "./client/js/index.js"
  },
  output: {
    filename: 'public/client.js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
            use: extractSass.extract({
                use: [{
                    loader: "css-loader"
                }, {
                    loader: "sass-loader"
                }],
                // use style-loader in development
                fallback: "style-loader"
            })
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react', 'stage-3']
          }
        }
      }
    ],
    loaders: [
        { test: /\.json$/, loader: 'json-loader' }
      ]
  },
  plugins: [
    //new ExtractTextPlugin({filename: "./css/style.css", allChunks: true}),
    extractSass,
    new ChunkManifestPlugin({
        filename: 'chunk-manifest.json',
        inlineManifest: true,
        manifestVariable: 'webpackManifest'
      }),
       new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('production')
        }
      }),
      new webpack.optimize.UglifyJsPlugin()
        ]
};
