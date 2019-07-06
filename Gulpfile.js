const { watch, src, dest, parallel, series } = require('gulp')
const browserSync = require('browser-sync').create()
const data = require('./data.js')
const config = require('./config')
const pug = require('gulp-pug')
const stylus = require('gulp-stylus')
const concat = require('gulp-concat')
const minifyCSS = require('gulp-csso')
const uglify = require('gulp-uglify')
const imageResize = require('gulp-image-resize')
const spawn = require('child_process').spawn

// data.version = config.version
config.pugConfig.data = data

// compile pug -> HTML
const html = () => src(config.paths.views)
  .pipe(pug(config.pugConfig))
  .pipe(dest('dist'))

// compile stylus -> HTML
const css = () => src(config.paths.style)
  .pipe(stylus({ 'include css': true }))
  .pipe(concat(config.out.css))
  // .pipe(minifyCSS())
  .pipe(dest('dist'))
// .pipe(browserSync.stream())

// concatinate & minify JS
const js = () => src(config.paths.js)
  .pipe(concat('app.min.js'))
  // .pipe(uglify())
  .pipe(dest('dist'))

// watch files; compile on file event changes
const watchFiles = () => {
  // watch(config.paths.style, css)
  watch('src/style/**.styl', css)
  watch(config.paths.views, html)
  watch(config.paths.js, js)
  watch('./data.js', html)
  watch('Gulpfile.js', reload)
  watch('data.js', reload)
}

// resize & optimize images
const compileImages = () => src(config.paths.images)
  .pipe(imageResize({
    width: 600,
    height: 600,
    // crop: true,
    upscale: false
  }))
  .pipe(dest('dist/img'))

// setup browserSync; auto-reload compiled assets in open browser
const bs = () => browserSync.init(config.bsConfig)

// auto-reload
const reload = () => {
  spawn('gulp', [], { stdio: 'inherit' })
  process.exit()
}

// setup global build script; build all resources
const build = parallel(html, css, js, compileImages)
// const build = series(html, css, js)
const defaultTask = parallel(build, bs, watchFiles)

module.exports = { build, bs, js, css, html, watch: watchFiles, default: defaultTask }
