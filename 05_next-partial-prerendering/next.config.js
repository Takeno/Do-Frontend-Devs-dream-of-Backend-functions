/** @type {import('next').NextConfig} */

//#region app
const nextConfig = {
  experimental: {
    ppr: 'incremental',
  },
};
//#endregion app

module.exports = nextConfig;
