module.exports = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.node$/,
      use: "binary-loader",
    });

    return config;
  },
};
