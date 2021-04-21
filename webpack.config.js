const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
  mode: 'none',
  entry: {
    base: './src/js/base.js',
    index: [
      './src/styles/index.scss',
    ],
    result: [
      './src/styles/result.scss',
    ],
    quest: [
      './src/styles/quest.scss',
      './src/js/quest.js',
    ],
  },
  devtool: "source-map",
  devServer: {
    contentBase: './dist',
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Тестовое задание для Sravni.ru, Летина Наталья',
      template: 'src/index.html',
      filename: 'index.html',
      chunks: ['base', 'index'],
    }),
    new HtmlWebpackPlugin({
      title: 'Вопрос 1 из 10',
      template: 'src/quest1.html',
      filename: 'quest1.html',
      chunks: ['base','quest'],
    }),
    new HtmlWebpackPlugin({
      title: 'Вопрос 2 из 10',
      template: 'src/quest2.html',
      filename: 'quest2.html',
      chunks: ['base','quest'],
    }),
    new HtmlWebpackPlugin({
      title: 'Вопрос 3 из 10',
      template: 'src/quest3.html',
      filename: 'quest3.html',
      chunks: ['base','quest'],
    }),
    new HtmlWebpackPlugin({
      title: 'Вопрос 4 из 10',
      template: 'src/quest4.html',
      filename: 'quest4.html',
      chunks: ['base','quest'],
    }),
    new HtmlWebpackPlugin({
      title: 'Результаты теста',
      template: 'src/result.html',
      filename: 'result.html',
      chunks: ['base', 'result'],
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
    new StylelintPlugin({
      context: './src',
      // fix: true,
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
            },
          },
          "postcss-loader",
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext][query]'
        }
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin(),
    ]
  }
};
