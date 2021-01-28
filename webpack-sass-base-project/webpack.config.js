let sass = require('node-sass');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: ''
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
          "sass-loader",
        ]
      }
    ]
  }
}
