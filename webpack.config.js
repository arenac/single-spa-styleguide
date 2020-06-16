const webpackMerge = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa");

module.exports = webpackConfigEnv => {
  const defaultConfig = singleSpaDefaults({
    orgName: "mfe",
    projectName: "global-style",
    webpackConfigEnv
  });

  return webpackMerge.smart(defaultConfig, {
    module: {
      rules: [
        {
          test: /\.s(c|a)ss$/,
          exclude: /(node_modules)/,
          use: {
            loader: "style-loader"
          },
        },
        {
          test: /\.s(c|a)ss$/,
          use: { 
            loader: "css-loader"
          },
        },
        {
          test: /\.s(c|a)ss$/,
          use: {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              plugins: [require("tailwindcss"), require("autoprefixer")]
            },
          },
        }
      ]
    }
  });
};
