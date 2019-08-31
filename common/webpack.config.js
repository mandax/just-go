require('dotenv').config();

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
	mode: "production",
	devtool: "source-map",
	
	resolve: {
		extensions: [".ts", ".tsx"]
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
	
	externals: {
		"react": "React",
		"react-dom": "ReactDOM"
	},

	...(isProduction ? {} : require('./webpack.development.js'))
};
