const cssPlugin = require ("mini-css-extract-plugin")
module.exports = () => ({
  
    devtool:"source-map",
    output:{
        filename:"ads.js"

    },
    module:{
        rules:[{
            test:/\.css$/,
            use:[cssPlugin.loader,"css-loader"]
        }]
    },

plugins:[
    new cssPlugin()
]
})

