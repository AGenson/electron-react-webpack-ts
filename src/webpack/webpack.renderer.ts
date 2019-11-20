import webpack from 'webpack'
import merge from 'webpack-merge'
import path from 'path'

import HtmlWebpackPlugin from 'html-webpack-plugin'

const common: webpack.Configuration = {
    entry: './src/renderer/index.tsx',
    output: {
        path: path.resolve(__dirname, '../../out/renderer')
    },
    resolve: {
        extensions: ['.js', '.json', '.ts', '.tsx']
    },
    node: {
      __dirname: false,
      __filename: false
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
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: { modules: true }
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            },
            {
                test: /\.svg$/,
                exclude: /node_modules/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'assets'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../renderer/index.html')
        })
    ]
}

const dev: webpack.Configuration = {
    mode: 'development',
    devtool: 'inline-source-map',
    output: {
        filename: 'renderer.dev.js'
    }
}

const prod: webpack.Configuration = {
    mode: 'production',
    target: 'electron-renderer',
    optimization: { minimize: true },
    devtool: 'source-map',
    output: {
        filename: 'renderer.prod.js'
    }
}

export default merge(common, process.env.NODE_ENV === 'development' ? dev : prod)
