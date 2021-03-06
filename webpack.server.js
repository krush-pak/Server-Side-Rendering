const path = require("path");

module.exports = {
  // Inform Webpack that we build bundle for nodeJS
  target: "node",

  // Tell webpack root file of server application
  entry: "./src/index.js",

  // Tell webpack where to put output file that is generated
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build")
  },

  // Tell webpack to run babel on every file it runs through
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: [
            "react",
            "stage-0",
            ["env", { targets: { browsers: ["last 2 versions"] } }]
          ]
        }
      }
    ]
  }
};
