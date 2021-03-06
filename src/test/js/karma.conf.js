module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '../../../',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],


        // list of files / patterns to load in the browser
        files: [
            'target/dependency/META-INF/resources/webjars/angularjs/1.6.6/angular.js',
            'target/dependency/META-INF/resources/webjars/angularjs/1.6.6/angular-route.js',
            'target/dependency/META-INF/resources/webjars/angularjs/1.6.6/angular-mocks.js',
            'src/main/resources/static/js/app/**/*.js',
            'src/test/js/**/*.js'
        ],


        // list of files to exclude
        exclude: [
            '**/karma.*.js'
        ],


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress'],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Chrome'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true,

        // Load required plugins
        plugins: [
            'karma-jasmine',
            'karma-chrome-launcher',
            'karma-junit-reporter'
        ],

        // Configure the JUnit reporter
        junitReporter: {
            outputFile: 'target/surefire-reports/js-tests.xml',
            suite: 'js-tests'
        }
    });
};
