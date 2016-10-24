export default {

  browserPort: 3000,
  UIPort: 3001,
  testPort: 3002,

  sourceDir: './src/',
  buildDir: './build/',

  styles: {
    src: 'src/styles/**/*.scss',
    dest: 'build/css',
    prodSourcemap: false,
    sassIncludePaths: []
  },

  scripts: {
    src: 'src/app/**/*.js',
    dest: 'build/',
    test: 'test/**/*.js',
    gulp: 'gulp/**/*.js'
  },

  images: {
    src: 'src/images/**/*',
    dest: 'build/images'
  },

  fonts: {
    src: ['src/fonts/**/*'],
    dest: 'build/fonts'
  },
  css: {
    src: ['src/css/**/*'],
    dest: 'build/css'
  },
  js: {
    src: ['src/js/**/*'],
    dest: 'build/js'
  },

  assetExtensions: [
    'js',
    'css',
    'png',
    'jpe?g',
    'gif',
    'svg',
    'eot',
    'otf',
    'ttc',
    'ttf',
    'woff2?'
  ],

  views: {
    index: 'src/index.html',
    src: 'src/app/template/**/*.html',
    dest: 'src/app',
    module: 'app.template'
  },

  gzip: {
    src: 'build/**/*.{html,xml,json,css,js,js.map,css.map}',
    dest: 'build/',
    options: {}
  },

  browserify: {
    bundleName: 'app.bundle.js',
    prodSourcemap: false
  },

  test: {
    karma: 'test/karma.conf.js',
    protractor: 'test/protractor.conf.js'
  },

  init: function() {
    this.views.watch = [
      this.views.index,
      this.views.src
    ];

    return this;
  }

}.init();
