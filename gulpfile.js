const gulp = require('gulp');
const watch = require('gulp-watch');
const fs = require('fs-extra');
const path = require('path');

const sass = require('gulp-sass');
sass.compiler = require('sass');
const postcss = require('gulp-postcss');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('autoprefixer');

const webpack = require('webpack');
const webpackStream = require('webpack-stream');

const minimist = require('minimist');
const argv = minimist(process.argv.slice(2));

gulp.task("locate", (done) =>
{
  if (argv["mode"] === 'development')
  {
    copyFile('src/manifest.json', 'dist/manifest.json');
    copyFile('src/popup/popup.html', 'dist/popup/popup.html');
    copyDir('src/images/', 'dist/images/');
  }
  else if (argv["mode"] === 'production')
  {
    copyFile('src/manifest.json', 'product/manifest.json');
    copyFile('src/popup/popup.html', 'product/popup/popup.html');
    copyDir('src/images/', 'product/images/');
  }

  done();
})

gulp.task("sass", (done) =>
{
  if (argv["mode"] === 'development')
    gulp.src(['src/style/*.scss', 'src/style/**/*.scss'])
      .pipe(sass({outputStyle: "expanded"})
      .on("error", sass.logError))
      .pipe(sourcemaps.write({includeContent: false}))
      .pipe(sourcemaps.init({loadMaps: true}))
      .pipe(postcss([
        autoprefixer({
          cascade: false,
          // Support for IE grid.
          grid: true,
        })
      ]))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest("dist/style/"));
  else if (argv["mode"] == 'production')
    gulp.src(['src/style/*.scss', 'src/style/**/*.scss'])
      .pipe(sass({outputStyle: "compressed"})
      .on("error", sass.logError))
      .pipe(postcss([
        autoprefixer({
          cascade: false,
          // Support for IE grid.
          grid: true,
        })
      ]))
      .pipe(gulp.dest("product/style/"));

    done();
})

gulp.task('ts', (done) =>
{
  if (argv["mode"] == 'development')
  {
    const webpackConfig = require('./webpack.development.config.js');
    return webpackStream(webpackConfig, webpack)
      .pipe(gulp.dest("dist/script"));
  }
  else if (argv["mode"] == 'production')
  {
    const webpackConfig = require('./webpack.production.config.js');
    return webpackStream(webpackConfig, webpack)
      .pipe(gulp.dest("product/script"));
  }

  done();
});

gulp.task("clear", (done) =>
{
  if (argv["mode"] === 'development')
  {
    rm("./dist/");
    rm("/mnt/c/dev/makikomi-alert/dist/");
  }
  else if (argv["mode"] === 'production')
  {
    rm("./product/");
    rm("/mnt/c/dev/makikomi-alert/product/");
  }

  done();
})

gulp.task("checkVersion", (done) =>
{
  const manifestObj = JSON.parse(fs.readFileSync('src/manifest.json'));
  console.log(`manifest.json: ${manifestObj["version"]}`);
  done();
})

gulp.task("build", gulp.series(
  'clear',
  (done) =>
    setTimeout(() => {
      done();
    }, 200),
  gulp.parallel('locate', 'sass', 'ts'),
  (done) =>
    setTimeout(() => {
      done();
    }, 200),
  (done) =>
  {
    // WSL -> Windows
    if (argv["mode"] === 'development')
      copyDir("dist/", "/mnt/c/dev/makikomi-alert/dist/")
    else if (argv["mode"] === 'production')
      copyDir("product/", "/mnt/c/dev/makikomi-alert/product/")
    
    console.log("WSL -> Windows");
    done();
  }
))

gulp.task("watch", () =>
{
  return watch(["src/*.*", "src/**/*.*"], gulp.task("build"))
})

const copyFile = (oldPath, newPath) =>
{
  fs.copySync(oldPath, newPath);
}

const copyDir = copyFile;

const rm = (path) =>
{
  fs.removeSync(path);
}
