var webpack = require('webpack');
module.exports = {
    entry: './src/app.js',
    output: {
        path: __dirname + '/build',
        filename: "bundle.js"
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                plugins: ['transform-runtime'],
                presets: ['es2015', 'react', 'stage-2']
            }
        }, {
            test: /\.scss$/,
            loader: "style-loader!css-loader!sass-loader"
        },
            {
                test: /\.less/,
                loader: "style-loader!css-loader!less-loader"
            }
        ]
    },
    externals:{
        'BMap':'BMap',
        'BMapLib':'BMapLib',
    },
};