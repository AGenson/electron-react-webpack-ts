import webpack from 'webpack'
import merge from 'webpack-merge'
import path from 'path'

const common: webpack.Configuration = {
    entry: './src/main/index.ts',
    target: 'electron-main',
    output: {
        path: path.resolve(__dirname, '../dist/main'),
        filename: 'main.bundle.js'
    },
    resolve: {
        extensions: ['.js', '.json', '.ts']
    },
    module: {
        rules: [{
            test: /\.ts$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    }
}

const dev: webpack.Configuration = {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: { writeToDisk: true }
}

const prod: webpack.Configuration = {
    mode: 'production',
    optimization: { minimize: true }
}

export default merge(common, process.env.NODE_ENV === 'development' ? dev : prod)
