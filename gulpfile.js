// const {src, dest, watch, series} = require('gulp');
const {src, dest, watch} = require('gulp');
const browserSync = require('browser-sync').create();
// const cssmin = require('gulp-cssmin');
// const rename = require('gulp-rename');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
// const cleanCSS = require('gulp-clean-css');
// const minify = require('gulp-minify');
// const htmlmin = require('gulp-htmlmin');
// const tinypng = require('gulp-tinypng-compress');


// Static server
function bs() {
    serveSass();
    browserSync.init({
        server: {
            baseDir: "./src"
        }
    });
    watch("./src/**/*.html").on('change', browserSync.reload);
    watch("./src/js/**/*.js").on('change', browserSync.reload);
    watch("./src/sass/**/*.sass",serveSass);
};


function serveSass() {
    return src("./src/sass/**/*.sass", "./src/sass/**/*.scss")
        .pipe(sass())
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(dest("./src/css"))
        .pipe(browserSync.stream());
};

// function mincss(done) {
//     src(['src/**/*.css','!src/**/*.min.css'])
//       .pipe(cleanCSS({compatibility: 'ie8'}))
//       .pipe(dest('dist'));
//       src('src/**/*.min.css').pipe(dest('dist'));
//       done();
// };

// function minjs(done) {
//   src(['src/**/*.js', '!src/**/*.min.js'])
//     .pipe(minify({ 
//         ext: {
//           min: '.min.js'
//       },
//       ignoreFiles: ['-min.js']
//     }))
//     .pipe(dest('dist'));
//     src('src/**/*.min.js').pipe(dest('dist'));
//     done();
// };

// function minhtml(done) {
//   src('src/**/*.html')
//     .pipe(htmlmin({ collapseWhitespace: true }))
//     .pipe(dest('dist'));
//     done();
// };

// function imagemin(done) {
//   src('src/img/**/*.{png,jpg,jpeg}')
//       .pipe(tinypng({  key: 'RS70xZkHJCzdYJQF0BjGfd4Y517MTqFk', }))
//       .pipe(dest('dist/img'));
//   src('src/img/**/*.svg')
//       .pipe(dest('dist/img'));
//   done();
// };


// function php(done) {
//   src('src/**/*.php')
//     .pipe(dest('dist'));
//     done();
// };

// function fonts(done) {
//   src('src/fonts/**/**')
//     .pipe(dest('dist/fonts'));
//     done();
// };

exports.serve = bs;
// exports.mincss = series(mincss, minjs, minhtml, php, fonts, imagemin);

