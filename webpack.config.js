const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: '/node_modules',
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015', 'stage-1']
				}
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
			minify: {
        		collapseWhitespace: true,
        		removeComments: true,
        		removeRedundantAttributes: true,
        		removeScriptTypeAttributes: true,
        		removeStyleLinkTypeAttributes: true
      		}
		})
	]
}