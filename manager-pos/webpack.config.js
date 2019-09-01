const dotenv = require('dotenv');
const path = require('path');
const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';

dotenv.config();

module.exports = {
	mode: "production",
	devtool: "source-map",
	
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
		// passing JG_APP_ vars to the project
		new webpack.DefinePlugin(Object.keys(process.env).reduce(
			(acc, key) => {
				acc[key] = process.env[key];
				return acc;
			}, 
		{})),

		new CopyPlugin([{
			from: path.resolve(__dirname, 'static'),
			to: path.resolve(__dirname, 'dist')
		}])
	],
	
	externals: {
		"react": "React",
		"react-dom": "ReactDOM",
		"react-router-dom": "ReactRouterDOM"
	},

	...(isProduction ? {} : require('./webpack.development.js'))
};
