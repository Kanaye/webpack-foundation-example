Webpack foundation example
--------------------------

Exmple on how to use [webpack](https://github.com/webpack/webpack) with [foundation 6](http://foundation.zurb.com/sites/docs/) and [jquery](https://github.com/jquery/jquery).

Loaders and plugins used:
- [sass-loader](https://github.com/jtangelder/sass-loader)
- [postcss-loader](https://github.com/postcss/postcss-loader) with [autoprefixer](https://github.com/postcss/autoprefixer)
- [css-loader](https://github.com/webpack/css-loader)
- [extract-text-webpack-plugin](https://github.com/webpack/extract-text-webpack-plugin)


jquery and foundation are installed as node modules via npm.


Getting started
_________________

1. Clone or download and extract the repository.
2. cd into the directory
3. run `npm i --save-dev` to install all the dependencies.
4. run `webpack` to compile the assets. This will also create a directory called `dist` including the files `all.js` (including you js), `css.js` (you can just ignore/delete this file it's only used by weback to compile the css) and a `all.css` (including all your css) it also builds sourcemaps for the assets. Use `webpack -w` to rebuild your files on change.
5. when production ready run `webpack -p` to minify and uglify the assets.

Edit the files in the `src/*` folder to fit your need.

Feel free to use this example o bootstrap your development, but don't forget to edit the `package.json`.


