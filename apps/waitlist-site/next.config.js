const { loadEnv } = require("load-env");

module.exports = {
  reactStrictMode: true,
  transpilePackages: ["ui"],
  env: loadEnv(),
};
