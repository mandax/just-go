module.exports = {
	mode: "development",
	devtool: 'inline-source-map',
	devServer: {
		contentBase: './dist',
		host: "0.0.0.0",
		port: 8080
	}
}