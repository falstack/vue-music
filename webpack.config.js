var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: "./src/music.vue",
    output: {
        path: "./bulid",
        publicPath: "/static/",
        filename: "vue-music.js",
        library: ["vueMusic"],
        libraryTarget: "umd"
    },
    module: {
        loaders: [
            { test: /\.(png|jpe?g|gif|svg|swf|eot|ttf|woff)(\?.*)?$/, loader: 'url?limit=50000' },
            { test: /\.vue$/, loader: 'vue'},
            { test: /\.js$/, loader: "babel", exclude: /node_modules/ },
            { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader')},
            { test: /\.scss$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader')},
        ]
    },
    vue: {
        loaders: {
            sass: ExtractTextPlugin.extract('vue-style-loader', 'css-loader!sass-loader'),
        },
    },
    babel: {
        presets: ['es2015', 'stage-2'],
        plugins: ['transform-runtime']
    },
    plugins: [
        new ExtractTextPlugin('../dist/vue-music.css', {
            allChunks: true,
        }),
    ]
};

if (process.env.NODE_ENV === 'production') {
    module.exports.output.path = "./dist";
    module.exports.output.filename = "vue-music.min.js";
        module.exports.plugins = [
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: '"production"'
                }
            }),
            new webpack.optimize.UglifyJsPlugin({
                sourceMap: false,
                compress: {
                    warnings: false
                }
            }),
            new ExtractTextPlugin('../dist/vue-music.css', {
                allChunks: true,
            })
        ];
} else {
    module.exports.devtool = '#source-map'
}