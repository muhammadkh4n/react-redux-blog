const webpack =  require('webpack');
const path = require('path');

const debug = process.env.NODE_ENV !== 'production';

module.exports = {
  context: __dirname,
  devtool: debug ? 'inline-sourcemap' : null,
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { 
        test: /\.css$/, 
        exclude: /(node_modules|bower_components)/,
        use: 'css-loader',
      },
      { 
        test: /\.less$/, 
        exclude: /(node_modules|bower_components)/,
        use: [
          'style-loader', 
          { 
            loader: 'css-loader',
            options: {
              modules: true,
              camelCase: true,
            }
          }, 
          { loader: "less-loader" },
        ] 
      },
      { test: /\.ts$/, use: 'ts-loader' },
      { 
        test: /\.jsx?$/, 
        exclude: /(node_modules|bower_components)/,
        enforce: 'pre',
        use: [
          { loader: 'source-map-loader' },
          {
            loader: 'babel-loader',
            options: {
              presets: ['env', 'react', 'stage-0'],
              plugins: ['transform-runtime']
            }
          }
        ] 
      },
    ]
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourceMap: false }),
  ],
  devServer: {
    contentBase: path.join(__dirname, "public"),
    compress: true,
    open: true,
    port: 9000,
  },
};
