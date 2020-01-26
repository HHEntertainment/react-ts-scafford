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
      }]
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],

  mode: 'production'
};
