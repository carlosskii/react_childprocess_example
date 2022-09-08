const HtmlWebpackPlugin = require('html-webpack-plugin');
const EslintWebpackPlugin = require('eslint-webpack-plugin');
const CleanTerminalPlugin = require('clean-terminal-webpack-plugin');

const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src/index.jsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          "babel-loader"
        ]
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader"
        ]
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/i,
        type: 'asset/resource'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html')
    }),
    new EslintWebpackPlugin({
      extensions: ['js', 'jsx']
    }),
    new CleanTerminalPlugin()
  ],
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    client: {
      overlay: {
        errors: true,
        warnings: false
      }
    }
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  stats: {
    preset: 'errors-warnings'
  }
}