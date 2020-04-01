var gulp = require('gulp');

function css() {
	var postcss = require('gulp-postcss');

	return gulp.src('assets/css/rlo.css')
		.pipe(postcss([
			require('tailwindcss')('tailwind.config.js'),
			require('autoprefixer'),
		]))
		.pipe(require('gulp-purgecss')({
			content: [
				'index.html',
				'assets/dist/rlo.min.js',
			],
			defaultExtractor: function(content) {
				return content.match(/[\w-/:]+(?<!:)/g) || [];
			},
		}))
		.pipe(postcss([
			require('postcss-clean'),
		]))
		.pipe(require('gulp-rename')({ suffix: '.min' }))
		.pipe(gulp.dest('assets/css'));
}

function watch() {
	gulp.watch(['assets/css/rlo.css', 'assets/js/rlo.js', 'tailwind.config.js', 'index.html'], gulp.series(css));
}

exports.css = css;
exports.default = watch;
