const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
  entry: './src/index.js', // Точка входа вашего приложения
  output: {
    path: path.resolve(__dirname, 'dist'), // Папка, куда будет собираться ваш проект
    filename: 'bundle.js', // Имя собранного файла
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'], // Преобразование современного JS
          },
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'], // Для работы с CSS
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Шаблон HTML
    }),
    new MiniCssExtractPlugin(),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin(), // Минимизация CSS
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), // Папка, где хранятся статические файлы
    },
    compress: true,
    port: 9000,
    open: true, // Открывать браузер после старта сервера
  },
};
