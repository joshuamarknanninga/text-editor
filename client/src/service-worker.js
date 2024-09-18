new WorkboxWebpackPlugin.GenerateSW({
    runtimeCaching: [
      {
        urlPattern: /\.(?:html|css|js|png|jpg|jpeg|svg)$/,
        handler: 'CacheFirst',
        options: {
          cacheName: 'static-resources',
        },
      },
    ],
  }),
  