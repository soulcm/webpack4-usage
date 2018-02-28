var webpack = require('webpack');

module.exports = {
  // mode: 'production',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              "presets": [
                ["env", {
                  "targets": {
                    // "chrome": 63
                    "browsers": [
                      "last 2 versions", "safari 7", "ie 7"
                    ]
                  },
                  // "modules": false,
                  "debug": true,
                  "useBuiltIns": false,
                  "include": [],
                  "exclude": []
                }]
              ],
              "plugins": [
                // "add-module-exports"
              ]
            }
          }
        ],
        exclude: /node_modules/,
      }
    ]
  }
}
