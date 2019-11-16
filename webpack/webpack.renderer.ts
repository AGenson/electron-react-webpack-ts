import webpack from 'webpack'
import merge from 'webpack-merge'
import path from 'path'

import HtmlWebpackPlugin from 'html-webpack-plugin'

const common: webpack.Configuration = {
    entry: './src/renderer/index.tsx',
    output: {
        path: path.resolve(__dirname, '../dist/renderer'),
        filename: 'renderer.bundle.js'
    },
    resolve: {
        extensions: ['.js', '.json', '.ts', '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../public/index.html')
        })
    ]
}

const dev: webpack.Configuration = {
    mode: 'development',
    devtool: 'inline-source-map'
}

const prod: webpack.Configuration = {
    mode: 'production',
    target: 'electron-renderer',
    optimization: { minimize: true }
}

export default merge(common, process.env.NODE_ENV === 'development' ? dev : prod)
