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
		path: path.resolve(__dirname, './dist'),
		libraryTarget: 'commonjs2',
		publicPath: 'http://127.0.0.1:7777/dist/'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],
	module: {
		loaders: [{
			test: /\.js$/,
			loaders: ['react-hot-loader/webpack', 'babel-loader?presets[]=react'],
			// include: path.join(__dirname, 'src'),
			// exclude: /node_modules/,
		}]
	},
	target: 'electron-renderer'
}