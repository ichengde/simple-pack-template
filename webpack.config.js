const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const prod = process.env.NODE_ENV === 'production';

const config = {
  entry: {
    pic: './src/main.js',
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, './src'),
        ],
        loader: 'babel-loader',
        query: {
          presets: ['es2015'],
        },
      },
    ],
  },
  plugins: [
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  devServer: {
    contentBase: [path.join(__dirname, 'test'), path.join(__dirname, 'build')],
    compress: true,
    index: 'index.htm',
    port: 9000,
  },
};

if (prod) {
  config.plugins.push(new UglifyJSPlugin());
  config.output.filename = '[name].min.js';
}

module.exports = config;
