const path = require('path');
const webpack = require('webpack');

module.exports = {
  publicRuntimeConfig: {
    APP_NAME: 'Blog',
    API_DEV: 'http://localhost:8000/api',
    API_PROD: 'http://localhost:8000/api',
    PRODUCTION: false
  },
  webpack: config => {
    config.resolve.modules.push(path.resolve('./'));
    return config;
  },
};
