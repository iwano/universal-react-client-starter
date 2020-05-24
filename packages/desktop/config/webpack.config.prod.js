const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base')
const TerserPlugin = require('terser-webpack-plugin')
const shouldUseSourceMap = process.env.GENERATE_SOURCEMAP !== 'false'

const env = 'production'
module.exports = merge.smart(baseConfig, {
  mode: env,
  devtool: shouldUseSourceMap ? 'source-map' : false,
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          output: {
            comments: false,
          },
        },
        extractComments: false,
        sourceMap: true,
      }),
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(env),
    }),
  ],
})
