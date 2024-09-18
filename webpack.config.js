const HtmlWebpackPlugin = require('html-webpack-plugin');
const { GenerateSW } = require('workbox-webpack-plugin');
const { WebpackPwaManifest } = require('webpack-pwa-manifest');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
const path = require('path');

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.js').then((registration) => {
        console.log('Service Worker registered with scope:', registration.scope);
      });
    });
  }  

module.exports = {
  entry: './client/src/js/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
{
    test: /\.js$/,
    exclude: /node_modules/,
    use: 'babel-loader',
},
      // Loaders for JavaScript and CSS
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './client/index.html',
      title: 'Text Editor',
    }),

    // Workbox plugin to generate the service worker
    new GenerateSW({
        clientsClaim: true,
        skipWaiting: true,
        runtimeCaching: [
          {
            // Match any request ends with .png, .jpg, .jpeg, .svg, .gif
            urlPattern: /\.(?:png|jpg|jpeg|svg|gif)$/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'images',
              expiration: {
                maxEntries: 50,
              },
            },
          },
          {
            // Cache CSS, JS, and HTML files
            urlPattern: /\.(?:js|css|html)$/,
            handler: 'StaleWhileRevalidate',
            options: {
              cacheName: 'static-resources',
            },
          },
        ],
      }),
    ],
  };
    new WebpackPwaManifest({
      name: 'Text Editor',
      short_name: 'Editor',
      description: 'A simple text editor PWA',
      background_color: '#ffffff',
      theme_color: '#2196f3',
      start_url: '.',
      publicPath: '/',
      icons: [
        {
          src: path.resolve('client/src/images/icon.png'),
          sizes: [96, 128, 192, 256, 384, 512],
          destination: path.join('assets', 'icons'),
        },
      ],
    }),
    new WorkboxWebpackPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
    })
