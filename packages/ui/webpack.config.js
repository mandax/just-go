const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
	mode: "development",
	devtool: "inline-source-map",

	resolve: {
		extensions: [".js", ".ts", ".tsx"]
	},

	module: {
		rules: [
			{
				test: /\.ts(x?)$/,
				exclude: /node_modules/,
				use: [
					{
						loader: "ts-loader"
					}
				]
			},
			{
				enforce: "pre",
				test: /\.js$/,
				loader: "source-map-loader"
			}
		]
	},

	plugins: [
		new CopyPlugin([
			{
				from: path.resolve(__dirname, 'public/*'),
				to: path.resolve(__dirname, 'dist/')
			},
			{
				from: path.resolve(__dirname, 'node_modules/react/umd/react.production.min.js'),
				to: path.resolve(__dirname, 'dist/react.production.min.js')
			},
			{
				from: path.resolve(__dirname, 'node_modules/react-dom/umd/react-dom.production.min.js'),
				to: path.resolve(__dirname, 'dist/react-dom.production.min.js')
			}
		])
	],

	externals: {
		"react": "React",
		"react-dom": "ReactDOM",
		"react-router-dom": "ReactRouterDOM"
	}
};
