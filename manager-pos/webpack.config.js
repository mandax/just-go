const dotenv = require('dotenv');
const path = require('path');
const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');
const developmentConfig = require('./webpack.development.js');

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
		}, {
			from: path.resolve(__dirname, 'node_modules/react/umd/react.production.min.js'),
			to: path.resolve(__dirname, 'dist/react.production.min.js')
		}, {
			from: path.resolve(__dirname, 'node_modules/react-dom/umd/react-dom.production.min.js'),
			to: path.resolve(__dirname, 'dist/react-dom.production.min.js')
		}, {
			from: path.resolve(__dirname, 'node_modules/react-router-dom/umd/react-router-dom.min.js'),
			to: path.resolve(__dirname, 'dist/react-router-dom.min.js')
		}])
	],
	
	externals: {
		"react": "React",
		"react-dom": "ReactDOM",
		"react-router-dom": "ReactRouterDOM"
	},

	...(isProduction ? {} : developmentConfig)
};
