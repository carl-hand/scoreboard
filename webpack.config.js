var HTMLWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
	template: './app/index.html',
	filename: 'index.html',
	inject: 'body'
});
module.exports = {
	entry: './app/index.js',
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			}
		]
	},
	output: {
		filename: 'transformed.js',
		path:  '/build'
	},
	plugins: [HTMLWebpackPluginConfig]
};