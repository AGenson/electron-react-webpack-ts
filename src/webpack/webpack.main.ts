import webpack from 'webpack'
import merge from 'webpack-merge'
import path from 'path'

const common: webpack.Configuration = {
    entry: './src/main/index.ts',
    target: 'electron-main',
    output: {
        path: path.resolve(__dirname, '../../out/main')
    },
    resolve: {
        extensions: ['.js', '.json', '.ts']
    },
    node: {
      __dirname: false,
      __filename: false
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
    output: {
        filename: 'main.dev.js'
    }
}

const prod: webpack.Configuration = {
    mode: 'production',
    optimization: { minimize: true },
    devtool: 'source-map',
    output: {
        filename: 'main.prod.js'
    }
}

export default merge(common, process.env.NODE_ENV === 'development' ? dev : prod)
