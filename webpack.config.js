const path = require("path");

module.exports = {
  entry: [
    path.join(__dirname, "src", "public", "js", "main.js"),
    path.join(__dirname, "src", "public", "css", "main.css"),
  ],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
  },

  resolve: {
    extensions: [".jsx", ".js"],
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-react"],
        },
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: ["file-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 8000,
  },
};
