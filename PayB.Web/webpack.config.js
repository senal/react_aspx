const path = require("path");

module.exports = {
    context: path.resolve(__dirname, "./Modules/Components/"),
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

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
};