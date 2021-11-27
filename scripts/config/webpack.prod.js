const { merge } = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const path = require("path");

const common = require("./webpack.common");
const { PROJECT_PATH } = require("../constant");

module.exports = merge(common, {
  mode: "production",
  devtool: false,
  output: {
    filename: "js/[name].[contenthash:8].js",
    path: path.resolve(PROJECT_PATH, "./dist"),
    assetModuleFilename: "images/[name].[contenthash:8].[ext]",
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: false,
        terserOptions: {
          compress: { pure_funcs: ["console.log"] },
        },
      }),
      new CssMinimizerPlugin(),
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].css",
      chunkFilename: "css/[name].[contenthash:8].chunk.css",
    }),
  ],
});
