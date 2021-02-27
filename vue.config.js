// const path = require("path");
// const webpack = require("webpack");

// const HtmlWebpackPlugin = require("html-webpack-plugin");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? './'
    : '/',
   // base:'/namastenepal/httpd.www/store/shop-cart-main/dist/',
	chainWebpack: config => {
    config.module
      .rule('images')
        .use('url-loader')
          .loader('url-loader')
          .tap(options => Object.assign(options, { limit: 10240 }))
  },
  // disable hashes in filenames
  filenameHashing: false,
  // // delete HTML related webpack plugins
  // chainWebpack: config => {
  //   config.plugins.delete('html')
  //   config.plugins.delete('preload')
  //   config.plugins.delete('prefetch')
  // }
}
