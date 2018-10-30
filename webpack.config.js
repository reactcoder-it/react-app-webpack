var path = require("path");
var config = {
  mode: "development",
  entry: {
    index: "./src/index.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js"
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.js?/,
        include: path.resolve(__dirname, "src"),
        loader: "babel-loader",
        options: {
          presets: ["react", "es2015"]
        }
      }
    ]
  }
};

module.exports = config;
