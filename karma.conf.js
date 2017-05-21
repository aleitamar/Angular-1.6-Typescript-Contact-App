module.exports = function(config) {
    config.set({
        frameworks: ["jasmine", "karma-typescript"],
        basePath: '',
        files: [
            { pattern: "src/**/*.ts" },
            { pattern: "src/**/*.html", included: true, served: true, watched: true },
            { pattern: "src/**/*.css", included: false, served: true, watched: true },
            { pattern: "src/**/*.json", included: false, served: true, watched: true },
        ],
        htmlReporter: {
            outputDir: 'karma_html',
            templatePath: null,
            focusOnFailures: true,
            namedFiles: false,
            pageTitle: null,
            urlFriendlyName: false,
            reportName: 'report',
            preserveDescribeNesting: false,
            foldAll: false,
        },
        preprocessors: {
            "src/**/*.ts": ["karma-typescript"],
        },
        proxies: {
            "view1/view1.html": "/base/src/view1/view1.html",
            "/view1/view1.html": "/base/src/view1/view1.html"
        },
        reporters: ["progress", "karma-typescript", "kjhtml"],
        karmaTypescriptConfig: {
            tsconfig: "./tsconfig.json"
        },
        logLevel: config.LOG_INFO,
        browsers: ["Chrome"],
    });
}