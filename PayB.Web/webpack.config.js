const path = require("path");

module.exports = {
    context: path.resolve(__dirname, "./Modules/Components/"),
    resolve: {
            extensions: ['.ts']
    },
    entry: {
        main: './index'
    },
    output: {
        publicPath: './Assets/Scripts',
        path: path.resolve(__dirname, './Assets/Scripts/'),
        filename: '[name].build.js'
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    }
};