const path = require("path");
const webpack = require("webpack");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = function (env) {

    const isProduction = env === 'prod';

    return {
        context: path.join(__dirname, "./Modules/Components/"),
        resolve: {
            extensions: [".ts", ".tsx", ".js", ".json"]
        },
        // Enable sourcemaps for debugging webpack's output.
        devtool: "source-map",

        entry: {
            main: './index'
        },

        plugins: isProduction ? [new UglifyJsPlugin()] : [],

        output: {
            publicPath: './Assets/Scripts',
            path: path.join(__dirname, './Assets/Scripts/'),
            filename: isProduction ? '[name].build.min.js' : '[name].build.js'
        },

        module: {
            rules: [
                // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
                { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
                // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
                { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
            ]
        },
        externals: {
            "react": "React",
            "react-dom": "ReactDOM"
        }
    }
};