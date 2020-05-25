const webpack = require('webpack')

module.exports = ({ config }) => ({
  ...config,
  resolve: {
    ...config.resolve,
    alias: {
      'react-native$': 'react-native-web',
    },
  },
  plugins: [
    ...config.plugins,
    new webpack.DefinePlugin({
      __IS_ELECTRON__: JSON.stringify(false),
    }),
  ],
})
