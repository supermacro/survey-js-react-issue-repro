const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.tsx',
  mode: 'production',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index_bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(t|j)sx?$/,
        use: { loader: 'ts-loader' },
        exclude: /node_modules/
      },
      {
        // Preprocess 3rd party .css files located in node_modules
        test: /\.css$/,
        include: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },

    ]
  },
  resolve: {
    modules: ['node_modules', '..'],
    extensions: ['.js', '.jsx', '.react.js', '.ts', '.tsx'],
    mainFields: ['browser', 'jsnext:main', 'main'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.template.html'
    })
  ],
}

