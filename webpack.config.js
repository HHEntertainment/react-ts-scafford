const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['./src/index.tsx'],
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },

  node: {
    fs: "empty"
  },

  module: {
    rules: [{ 
        test: /\.tsx?$/, 
        loader: 'awesome-typescript-loader'
      }, {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      }]
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      constants: path.resolve(__dirname, './src/constants/'),
      utils: path.resolve(__dirname, './src/utils/'),
      images: path.resolve(__dirname, './src/assets/images/'),
      views: path.resolve(__dirname, './src/views/'),
      store: path.resolve(__dirname, './src/store/'),
      models: path.resolve(__dirname, './src/models/'),
    }
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],

  mode: 'production'
};
