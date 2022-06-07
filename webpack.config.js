const path = require("path");

module.exports = {
  mode: "production",
  devServer: {
    watchFiles: ["src/**/*"],
  },
  entry: path.resolve(__dirname, "./src/index.ts"),
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        use: ["style-loader", "css-loader"],
        test: /\.css$/i,
        include: path.resolve(__dirname, "src"),
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },

  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public", "static", "js"),
  },
};
