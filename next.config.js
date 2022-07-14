/** @type {import('next').NextConfig} */

const withPlugins = require("next-compose-plugins");

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
};

const withTM = require("next-transpile-modules")([
  "@fullcalendar/common",
  "@fullcalendar/react",
  "@fullcalendar/daygrid",
]);

module.exports = withPlugins([withTM], {
  /* config options here */
  nextConfig,
});
