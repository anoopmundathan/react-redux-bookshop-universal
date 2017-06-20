const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	devtool: 'eval-source-map',
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
			template: './public/index.html'
		})
	]
}

if(process.env.NODE_ENV === 'production') {
	
	// Minify html
	config.plugins[0].options.minify = {
				collapseWhitespace: true,
        		removeComments: true,
        		removeRedundantAttributes: true,
        		removeScriptTypeAttributes: true,
        		removeStyleLinkTypeAttributes: true
	}

	// Remove sourcemap
	config.devtool = '';
}

module.exports = config;