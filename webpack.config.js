const path = require("path");
const webpack = require("webpack");
const webpackmerge = require("webpack-merge");
// const modeConfig = function (env){
//    require (`./webpack.${env}`)
  
// } (env)
module.exports = () => {
  
  return webpackmerge({
    entry: "./index.js",
    output: {
      filename: "ads.js",
      path: path.resolve("dist"),
      publicPath: "http://localhost:8080/dist/",
    },
  }
  );
};

