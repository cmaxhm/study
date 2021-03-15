const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: './js/bundle.js'
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "./css/style.css"
    })
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ]
      }
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'src'),
    watchContentBase: true,
    compress: true,
    port: 9000
  }
}
