const path = require("path");

module.exports = {
  entry: path.join(__dirname, "src", "public", "js", "main.js"),
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
    ],
  },
};
  