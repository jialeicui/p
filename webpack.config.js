let path = require('path')
let webpack = require('webpack')

let hotMiddlewareScript = 'webpack-hot-middleware/client?path=http://127.0.0.1:7777/__webpack_hmr';

module.exports = {
	devtool: 'eval',
	entry: [
		hotMiddlewareScript,
		'babel-polyfill',
		path.resolve(__dirname, './src/frontend/app.js'),
	],
	output: {
		filename: 'bundle.js',
		publicPath: 'http://localhost:7777/dist'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],
	module: {
		loaders: [{
			test: /\.js$/,
			loaders: ['babel-loader'],
			include: path.join(__dirname, 'src'),
			exclude: /node_modules/,
		}]
	},
	target: 'electron-renderer'
}