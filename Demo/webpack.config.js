const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const styleLoader = {
  loader: 'style-loader',
  options: {
    sourceMap: true,
  },
}

const cssLoader = {
  loader: 'css-loader',
  options: {
    modules: true,
    importLoaders: 1,
    localIdentName: '[local]_[hash:base64:5]',
  },
}

module.exports = (env, argv) => ({
  context: __dirname,
  target: 'web',
  entry: [
    '!style-loader!css-loader!normalize.css',
    '!style-loader!css-loader!@blueprintjs/core/lib/css/blueprint.css',
    path.resolve(__dirname, 'src/index.styl'),
    path.resolve(__dirname, 'src/index.tsx'),
  ],

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          transpileOnly: true,
        },
      },
      {
        test: /\.css$/,
        loaders: [styleLoader, cssLoader],
      },
      {
        test: /\.styl$/,
        loaders: [styleLoader, cssLoader, 'stylus-loader'],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/index.html'),
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      __DEV__: JSON.stringify(argv.mode !== 'production'),
    }),
  ],

  devServer: {
    contentBase: __dirname,
    proxy: {
      '/api/algo': 'http://10.214.224.234:9002',
      '/api': 'http://10.214.224.234:9002',
    },
    hot: true,
    host: 'localhost',
  },
})
