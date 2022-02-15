const path = require("path");
const webpack = require("webpack");
const webpackmerge = require("webpack-merge");
 const modeConfig = (env) => require (`./webpack.${env}`) (env)
module.exports = ({mode}={mode:"production"}) => {
  
  return webpackmerge({
    entry: "./index.js",
    mode,
    module:{
      rules:[
        {
          test:/.js$/, 
          exclude:/node_modules/,
          use:{loader:"babel-loader"}
        }
      ]
    },
    output: {
      filename: "ads.js",
      path: path.resolve("dist"),
      publicPath: "http://localhost:8080/dist/",
      chunkFilename: "ads[id].js"
    },
  },modeConfig(mode)
  );
};

