const fs = require('fs')
const path = require('path')
const nodeExternals = require('webpack-node-externals')

const appDirectory = fs.realpathSync(process.cwd())
const resolveApp = relativePath => path.resolve(appDirectory, relativePath)

module.exports = {
  cache: false,
  entry: {
    index: resolveApp('src/main'),
    preload: resolveApp('src/preload'),
  },
  target: 'electron-main',
  output: {
    path: resolveApp('dist'),
    filename: '[name].js',
    publicPath: resolveApp('package.json'),
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx?)$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
        },
      },
    ],
  },
  externals: [
    nodeExternals(),
    nodeExternals({
      modulesDir: path.resolve(__dirname, '../../../node_modules'),
    }),
  ],
  node: {
    global: true,
    __dirname: false,
    __filename: true,
  },
  resolve: {
    extensions: ['.js', '.ts'],
  },
}
