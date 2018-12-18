const ExtractTextPlugin = require('extract-text-webpack-plugin')

let loaders = {}
if (process.env.NODE_ENV === 'production') {
  loaders = {
    css: ExtractTextPlugin.extract({
      fallback: 'vue-style-loader', 
      // use: 'css-loader'
      use: 'css-loader'
    }),
    less: ExtractTextPlugin.extract({ fallback: 'vue-style-loader', use: 'css-loader!less-loader' }),
    scss: ExtractTextPlugin.extract({ fallback: 'vue-style-loader', use: 'css-loader!sass-loader' }),
    sass: ExtractTextPlugin.extract({ fallback: 'vue-style-loader', use: 'css-loader!sass-loader' })
  }
} else {
  // loaders = {
  //   css: ExtractTextPlugin.extract({ fallback: 'vue-style-loader', use: 'css-loader' }),
  //   less: ExtractTextPlugin.extract({ fallback: 'vue-style-loader', use: 'css-loader!less-loader' }),
  //   scss: ExtractTextPlugin.extract({ fallback: 'vue-style-loader', use: 'css-loader!sass-loader' }),
  //   sass: ExtractTextPlugin.extract({ fallback: 'vue-style-loader', use: 'css-loader!sass-loader' })
  // }

  loaders = {
    css: ExtractTextPlugin.extract({
      fallback: 'vue-style-loader',
      use: 'css-loader'
    }),
    less: ExtractTextPlugin.extract({ fallback: 'vue-style-loader', use: 'css-loader!less-loader' }),
    scss: ExtractTextPlugin.extract({ fallback: 'vue-style-loader', use: 'css-loader!sass-loader' }),
    sass: ExtractTextPlugin.extract({ fallback: 'vue-style-loader', use: 'css-loader!sass-loader' }),
    // stylus: ExtractTextPlugin.extract({
    //   fallback: 'vue-style-loader', use: 'css-loader?sourceMap&modules&localIdentName=[name]--[local]--[hash:base64:7]!stylus-loader'
    // })
    // stylus: ExtractTextPlugin.extract({
    //   loader: ['css-loader', 'stylus-loader'],
    //   fallbackLoader: 'vue-style-loader'
    // })
  }
  // loaders = {
  //   css: 'vue-style-loader!css-loader',
  //   less: 'vue-style-loader!css-loader!less-loader',
  //   // sass: 'vue-style-loader!css-loader!sass-loader'
  //   scss: 'vue-style-loader!style-loader!css-loader!sass-loader'
  //   // stylus: 'vue-style-loader!style-loader!css-loader?sourceMap&modules&localIdentName=[name]--[local]--[hash:base64:7]!stylus-loader'
  //   // sass: 'vue-style-loader!style-loader!css-loader?sourceMap&modules&localIdentName=[name]--[local]--[hash:base64:7]!stylus-loader?indentedSyntax',
  // }
}
module.exports = {
  loaders
}
