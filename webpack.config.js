const path = require("path");

module.exports = {
  entry: "./src/app.js",
  output: {
    filename: "bootstrap_min.js",
    path: path.resolve(__dirname, "dist/webpack"),
  },
  module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: function () {
                  return [require("precss"), require("autoprefixer")];
                },
              },
            },
          },
          {
            loader: "sass-loader",
          },
        ],
      },
    ],
  },
};
