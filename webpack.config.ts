// import { ConfigurationFactory } from 'webpack'
import path from 'path'
import CopyWebpackPlugin from 'copy-webpack-plugin'

module.exports = {
    entry: {
        content_script: path.join(__dirname, 'src', 'content_script.ts'),
        background: path.join(__dirname, 'src', 'background.ts'),
        inject: path.join(__dirname, 'src', 'inject.ts'),

    },
    output: {
        // distディレクトリにcontent_scripts.jsを吐く
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /.ts$/,
                use: 'ts-loader',
                exclude: '/node_modules/'
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    plugins: [
        // publicディレクトリにあるファイルをdistディレクトリにコピーする
        new CopyWebpackPlugin({
            patterns: [{ from: 'public', to: '.', }],
        })
    ]
}

