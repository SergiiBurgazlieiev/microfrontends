const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: '[name].[contenthash].js',
	},
	resolve: {
		extensions: ['.js', '.vue'],
	},
	module: {
		rules: [
			{
				test: /\.(png|jpe?g|gif|woff|svg|eot|ttf)$/i,
				use: [
					{
						loader: 'file-loader',
					},
				],
			},
			{
				test: /\.vue$/,
				use: 'vue-loader',
			},
			{
				test: /\.scss|\.css$/,
				use: ['vue-style-loader', 'style-loader', 'css-loader', 'sass-loader'],
			},
			// babel loader
			{
				test: /\.m?js$/, // when ever we import a file with extension mjs or js we want it to be processed with babel
				exclude: /node_modules/, // do not try to run babel against node module files
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
						plugins: ['@babel/plugin-transform-runtime'], // enables diff features such as ES6 syntax and etc
					},
				},
			},
		],
	},
	plugins: [new VueLoaderPlugin()],
};
