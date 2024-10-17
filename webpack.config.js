const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/pages/src/index.js', // Вкажіть правильний шлях до entry-файлу
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'), // Вкажіть директорію для виходу
        clean: true, // Очищення директорії dist перед кожною компіляцією
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: ['html-loader'], // Додайте html-loader для обробки HTML
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader', 
                    'css-loader', 
                    'sass-loader',
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/pages/src/index.html', // Основний HTML файл
            filename: 'index.html',
        }),
        new HtmlWebpackPlugin({
            template: './src/pages/src/biography.html', // Шлях до біографії
            filename: 'biography.html',
        }),
        new HtmlWebpackPlugin({
            template: './src/pages/src/schedule.html', // Шлях до розкладу
            filename: 'schedule.html',
        }),
        new HtmlWebpackPlugin({
            template: './src/pages/src/news.html', // Шлях до новин
            filename: 'news.html',
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/pages/src'), // Шлях до директорії з файлами
                    to: path.resolve(__dirname, 'dist'), // Шлях до вихідної директорії
                    // Немає правил ігнорування, тому всі файли будуть скопійовані
                },
            ],
        }),
    ],
    mode: 'development', // Або 'production' в залежності від мети
};