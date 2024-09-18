const HtmlWebpackPlugin = require('html-webpack-plugin');
const { WebpackPwaManifest } = require('webpack-pwa-manifest');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './client/src/js/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      // Loaders for JavaScript and CSS
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './client/index.html',
      title: 'Text Editor',
    }),
    new WebpackPwaManifest({
      name: 'Text Editor',
      short_name: 'Editor',
      description: 'A simple text editor PWA',
      background_color: '#ffffff',
      theme_color: '#2196f3',
      start_url: '.',
      icons: [
        {
          src: path.resolve('client/src/images/icon.png'),
          sizes: [96, 128, 192, 256, 384, 512],
        },
      ],
    }),
    new WorkboxWebpackPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
    }),
  ],
};
