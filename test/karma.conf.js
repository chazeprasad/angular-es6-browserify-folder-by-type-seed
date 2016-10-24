const istanbul = require('browserify-istanbul');
const isparta  = require('isparta');

const karmaBaseConfig = {

  basePath: '../',

  singleRun: true,

  frameworks: ['jasmine', 'browserify'],

  preprocessors: {
    'src/app/**/*.js': ['browserify'],
    'test/**/*.js': ['browserify']
  },

  browsers: ['Chrome'],

  // reporters: ['progress', 'coverage'],
  // reporters: ['spec', 'coverage'],
  reporters: ['spec'],
  // enable / disable colors in the output (reporters and logs)
  colors: true,

  // level of logging
  // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
  // logLevel: config.LOG_DEBUG,
  concurrency: Infinity,

  // optionally, configure the reporter
  coverageReporter: {
            dir: './coverage',
            reporters: [
                { type: "html", subdir: "html" },
                { type: 'text-summary' }
            ]
        },

  autoWatch: true,

  browserify: {
    debug: true,
    extensions: ['.js'],
    transform: [
        'babelify',
      'browserify-ngannotate',
      'bulkify',
      istanbul({
        instrumenter: isparta,
        instrumenterConfig: { embedSource: true },
        ignore: ['**/node_modules/**', '**/test/**']
      })
    ]
  },

  proxies: {
    '/': 'http://localhost:9876/'
  },

  urlRoot: '/__karma__/',

  files: [
    // app-specific code
    'src/app/app.module.js',

    // 3rd-party resources
    'node_modules/angular-mocks/angular-mocks.js',

    // test files
    'test/unit/**/*.js'
  ]

};

const customLaunchers = {
  chrome: {
    base: 'SauceLabs',
    browserName: 'chrome'
  }
};



const ciAdditions = {
  sauceLabs: {
    testName: 'Karma Unit Tests',
    startConnect: false,
    build: process.env.TRAVIS_BUILD_NUMBER,
    tunnelIdentifier: process.env.TRAVIS_JOB_NUMBER
  },
  browsers: Object.keys(customLaunchers),
  customLaunchers: customLaunchers,
  reporters: ['progress', 'coverage', 'saucelabs']
};

module.exports = function(config) {
  const isCI = process.env.CI && Boolean(process.env.TRAVIS_PULL_REQUEST);
  // karmaBaseConfig.logLevel = config.LOG_DEBUG;
  config.set(isCI ? Object.assign(karmaBaseConfig, ciAdditions) : karmaBaseConfig);
};
