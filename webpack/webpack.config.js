const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development', // або 'production'
  entry: './src/index.js', // твоя вхідна точка
  output: {
    path: path.resolve(__dirname, 'dist'), // директорія виходу
    filename: 'bundle.js', // ім'я вихідного файлу
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/assets/images'), // директорія з зображеннями
          to: 'assets/images' // шлях у директорії dist
        }
      ]
    })
  ],
};