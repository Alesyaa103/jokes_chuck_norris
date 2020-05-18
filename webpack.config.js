const CopyPlugin = require("copy-webpack-plugin");
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const imageminMozjpeg = require('imagemin-mozjpeg');

module.exports = {
  entry: {
    main: './src/index.js',
    vendor: './src/vendor.js'
  },
  plugins: [
    new CopyPlugin([
        { from: './public/apple-icon-180x180.png', to: '' },
        { from: './public/favicon-96x96.png', to: '' },
        { from: './public/favicon.ico', to: '' },
        { from: './public/og-image.jpg', to: ''}
      ]),
      new ImageminPlugin({
        plugins: [
          imageminMozjpeg({
            quality: 50,
            progressive: true
          })
        ]
      }),
  ],
  module: {
    rules: [
      {
        test:/\.html$/,
        use: ["html-loader"]
      }
    ]
  }

}