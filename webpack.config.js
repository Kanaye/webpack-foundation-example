// extracts the css from the js files 
var ExtractTextPlugin = require('extract-text-webpack-plugin');
// extract plugin instance that creates the all.css within the output.path directory
var extractcss = new ExtractTextPlugin('all.css');

var Autoprefixer = require('autoprefixer');

module.exports = {
	// enable source 
	devtool: 'source-map',
	entry: {
		// Includes for js
		all: './src/js/all.js',
		// Includes scss
		css: './src/scss/all.scss'
	},
	output: {
		// all output files should go in the 'dist' directory in the folder this config lives in
		path: __dirname + '/dist',
		// files will be named [name].js where name is the name of the entry (so here we'll get an all.js and an css.js)
		filename: '[name].js'
	},

	module: {
		// configure loaders
		loaders: [{
			// use the extractcss plugin with the css, postcss and sass loaders for all scss files
			test: /\.scss$/,
			// list of loaders as the argument css processes the files and resolves possible imports, 
			// -url prevents the loader from importing url() values within the css (this would e.g. include images)
			// &sourceMap propertie specifies that it should create a source map for the css
			// the postcss-loader applies all configured plugins within the "postcss"-function (later in this file)
			// the sass-loader compiles the scss files to css
			loader: extractcss.extract(['css?-url&sourceMap', 'postcss', 'sass?sourceMap'])
		}]
	},
	postcss: function () {
		// returns the auto prefixer that adds vendor prefixes for the last 2 browsers
		// eg. transform will get transform, webkit-transform, moz-tranform, etc.
		return [
			Autoprefixer({
				browsers: 'last 2 versions',
				cascade: false
			})
		];
	},
	plugins: [
		extractcss // let the extract css extract the css to the all.css
	]

};