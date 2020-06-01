const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  target: 'web',
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  },
  devtool: 'inline-source-map',
  entry: {
    app: path.join(__dirname, 'src', 'index.tsx'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
    // chunkFilename: '[id].js',
    // publicPath: ''
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: '/node_modules/'
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: false // clean unsued assets
    }),
    new HtmlWebpackPlugin({
        template: path.join(__dirname, 'src', 'index.html')
    })
  ]
};