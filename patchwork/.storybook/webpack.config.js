const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['react', ['env', {modules: false}]],
              plugins: [
                'transform-flow-strip-types',
              ],
            },
          },
        ],
        include: path.resolve(__dirname, '../'),
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpe?g|gif|svg|ico|csv|doc|docx|xls|xlsx|ppt|pptx|md)/,
        include: path.resolve(__dirname, '../'),
        use: {
          loader: 'file-loader',
          options: {
            name: 'assets/[name].[hash].[ext]',
          },
        },
      },
      {
        test: /\.(woff|woff2|ttf|eot)/,
        include: path.resolve(__dirname, '../'),
        use: {
          loader: 'url-loader',
          options: {
            limit: 100000,
          },
        },
      },
      {
        test: /\.svg$/,
        use: 'svg-inline-loader',
        exclude: /node_modules/,
        include: path.resolve(__dirname, '../'),
      },
      {
        test: /\.s?css$/,
        include: path.resolve(__dirname, '../'),
        exclude: path.resolve(__dirname, '../styles/base.scss'),
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.s?css$/,
        include: path.resolve(__dirname, '../styles/base.scss'),
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              modules: false,
              importLoaders: 1,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      }
    ],
  },
};
