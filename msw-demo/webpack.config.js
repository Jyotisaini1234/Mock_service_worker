const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', 
  output: {
    path: path.resolve(__dirname, 'dist'), 
    filename: 'bundle.js' 
  },
  mode: 'development', 
  resolve: {
    extensions: ['.js', '.jsx', '.json'], 
    alias: {
      msw: require.resolve('msw'), 
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, 
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'], 
          },
        },
      },
      {
        test: /\.css$/, 
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/, 
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: './public/favicon.ico', 
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),  },
    compress: true,
    port: 3000, 
    hot: true, 
    historyApiFallback: true,
  },
};
