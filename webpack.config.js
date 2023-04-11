const path = require('path');

module.exports = {
  'mode': 'development',
  devtool: 'source-map',
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, '_dest'),
    filename: './index.bundle.js',
  },
  devServer: {
    static: {
      directory: path.join(__dirname, '_dest'),
    }
  },
  performance: {
    hints: false,
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        },
      }
    ]
  }
};