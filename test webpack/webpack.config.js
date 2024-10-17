const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.js', // Вхідна точка
  output: {
    path: path.resolve(__dirname, 'dist'), // Вихідна директорія
    filename: 'bundle.js', // Ім'я вихідного файлу
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/assets/images'), // Джерело
          to: 'assets/images' // Куди копіювати
        }
      ]
    })
  ],
  // Інші налаштування Webpack
};