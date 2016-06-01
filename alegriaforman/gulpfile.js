const gulp = require('gulp');
const eslint = require('gulp-eslint');
const mocha = require('gulp-mocha');

var files = ['index.js', 'lib/**/*.js', 'gulpfile.js'];

var eslintrc = {
  'rules': {
    'no-console': 0,
    'indent': [
      2,
      2
    ],
    'quotes': [
      2,
      'single'
    ],
    'linebreak-style': [
      2,
      'unix'
    ],
    'semi': [
      2,
      'always'
    ]
  },
  'env': {
    'es6': true,
    'node': true,
    'browser': true
  },
  'globals': {
    'describe': false,
    'it': false,
    'beforeEach': false,
    'afterEach': false,
    'before': false,
    'after': false
  },
  'ecmaFeatures': {
    'modules': true,
    'experimentalObjectRestSpread': true
  },
  'extends': 'eslint:recommended'
};

gulp.task('mocha:test', () => {
  return gulp.src('./test/**/*test.js')
  .pipe(mocha());
});

gulp.task('lint:test', () => {
  return gulp.src('./test/**/*test.js')
    .pipe(eslint(eslintrc))
    .pipe(eslint.format());
});

gulp.task('lint:nontest', () => {
  return gulp.src(files)
  .pipe(eslint(eslintrc))
  .pipe(eslint.format());
});

// Bonus points
gulp.task('watch', () => {
  gulp.watch('./test/**/*test.js', ['lint:test', 'mochaTest']);
  gulp.watch(files, ['lint:nontest', 'mochaTest']);
});

gulp.task('lint', ['lint:test', 'lint:nontest']);
gulp.task('mochaTest', ['mocha:test']);
gulp.task('default', ['lint', 'mochaTest']);
