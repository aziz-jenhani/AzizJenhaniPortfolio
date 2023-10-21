/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    loader: 'custom',
    loaderFile: './app/my-loader.ts',
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.node$/,
      use: "binary-loader",
    });
    return config;
  },
};

module.exports = nextConfig;
