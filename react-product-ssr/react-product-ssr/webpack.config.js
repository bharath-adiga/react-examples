const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.join(__dirname),
    compress: true,
    port: 8080,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "sass-loader" }
        ]
      },
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "sass-loader" }
        ]
      },
      {
        test: /\.jsx$/,
        use: "babel-loader",
        exclude: /node_modules/
      }
      /*  {
        test: /\.css$/,
        use: [
          "isomorphic-style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
              localIdentName: "[hash:base64:5]_[name]_[local]"
            }
          }
        ]
      }*/
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "template.html"
    })
  ]
};
