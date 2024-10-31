const path = require('path');

module.exports = {
    mode: 'production',
    entry: {
      main: path.resolve(__dirname, './js/dashboard_main.js',)
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    performance: {
      maxAssetSize: 100000,
      maxEntrypointSize: 100000,
    },
    module: {
      rules: [
        {
          test:/\.css$/i,
          use : ['style-loader', 'css-loader'],
        },
        {
          test: /\.(?:ico|gif|png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
          use: [
            'file-loader',
            {
              loader: 'image-webpack-loader',
              options: {
                bypassOnDebug: true,
                disable: true,
              },
            },
          ],
        },
      ],
    },
  };
