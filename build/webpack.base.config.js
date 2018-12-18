const path = require('path')
const webpack = require('webpack')
const vueConfig = require('./vue-loader.config')
const resolve = file => path.resolve(__dirname, file)
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
module.exports = {
  devtool: '#source-map',
  entry: {
    app: './src/client-entry.js',
    vendor: ['vue', 'vue-router', 'vuex', 'vuex-router-sync', 'axios']
  },
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    extensions: ['.js', '.vue'],
    alias: {
      'src': resolve('../src'),
      'util': resolve('../src/util'),
      'views': resolve('../src/views'),
      'assets': resolve('../src/assets'),
      'config': resolve('../config'),
      'components': resolve('../src/components'),
      '@': resolve('src'),
    }
  },
  // resolve: {
  //   extensions: ['.js', '.vue', '.json'],
  //   alias: {
  //     'vue$': 'vue/dist/vue.esm.js',
  //     '@': resolve('src'),
  //   }
  // },
  output: {
    path: resolve('../output'),
    publicPath: '/output/',
    filename: 'client-bundle.[chunkhash].js'
  },


  module: {
    rules: [
      // {
      //     enforce: 'pre',
      //     test: /\.js$/,
      //     loader: 'eslint-loader',
      //     exclude: /node_modules/
      //   },
      // {
      //   enforce: 'pre',
      //   test: /\.vue$/,
      //   loader: 'eslint-loader',
      //   exclude: /node_modules/
      // },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader'
      },
      // {
      //   test: /\.styl$/,
      //   use: ['style-loader', 'css-loader', 'stylus-loader']
      // },
      {
        test: /\.styl$/,
        use: [
          'style-loader',
          'css-loader?sourceMap&modules&localIdentName=[name]--[local]--[hash:base64:7]',
          'postcss-loader',
          'stylus-loader?sourceMap'
        ]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: ('static/css/[name].[contenthash].css')
    }),
    new OptimizeCSSPlugin({
      cssProcessorOptions: {
        safe: true
      }
    })
  ]
}
