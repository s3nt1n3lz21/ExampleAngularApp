// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html
const timeout = 180 * 1000;

module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['parallel','jasmine', '@angular-devkit/build-angular'],
        plugins: [
            require('karma-parallel'),
            require('karma-jasmine'),
            require('karma-chrome-launcher'),
            require('karma-jasmine-html-reporter'),
            require('karma-coverage-istanbul-reporter'),
            require('@angular-devkit/build-angular/plugins/karma'),
            require('karma-junit-reporter')
        ],
        client: {
            clearContext: false // leave Jasmine Spec Runner output visible in browser
        },
        coverageIstanbulReporter: {
            dir: require('path').join(__dirname, '../coverage'),
            reports: ['html', 'lcovonly', 'cobertura'],
            fixWebpackSourcePaths: true
        },
        reporters: ['progress', 'kjhtml', 'junit'],
        junitReporter: {
            outputDir: '../junit'
        },
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['ChromeHeadless'],
        singleRun: false,
        browserDisconnectTimeout: timeout,
        browserNoActivityTimeout: timeout,
        files: [
            {
                pattern: '**/*.spec.ts',
                included: false
            }
        ]
    });
};
