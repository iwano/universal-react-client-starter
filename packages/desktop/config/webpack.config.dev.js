const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base')
const webpack = require('webpack')

const env = 'development'
module.exports = merge.smart(baseConfig, {
  mode: env,
  devtool: 'cheap-module-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(env),
    }),
  ],
})
