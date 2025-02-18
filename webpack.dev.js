const { merge } = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common');

// eslint-disable-next-line no-undef
module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    // eslint-disable-next-line no-undef
    static: path.resolve(__dirname, "dist"),
    open: true,
    compress: true,
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
  },
});
