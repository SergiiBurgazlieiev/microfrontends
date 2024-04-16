module.exports = {
	module: {
		rules: [
			// babel loader
			{
				test: /\.m?js$/, // when ever we import a file with extension mjs or js we want it to be processed with babel
				exclude: /node_modules/, // do not try to run babel against node module files
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-react', '@babel/preset-env'],
						plugins: ['@babel/plugin-transform-runtime'] // enables diff features such as ES6 syntax and etc
					}
				}
			}
		]
	}
};
