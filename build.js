({
    appDir: "./",
    optimizeCss: "standard.keeplines",
    //turn off optimization for now
    optimize: "none",
    mainConfigFile : "./js/main.js",
    baseUrl: "./js",
    removeCombined: true,
    findNestedDependencies: true,
    dir: "./public",
    skipDirOptimize: true,
    //ignore all with dots
    fileExclusionRegExp: "/" + [
        "^\\.",             //files that start with .
        "node_modules",     //nodejs stuff
        "\\.css$",            //CSS files
        "\\.scss$",           //SCSS files (sass)
        "build\\.js",       //r.js config
        "package\\.json",   //nodejs stuff
        "gulpfile\\.js",    //gulp config
        "^r.js$",           //r.js module
        "JSLintNet.*",      //JSLint settings
        "mm"
    ].join('|') + "/",
    // packages: ['app'],
    modules: [
        {
            name: "main",
            exclude: [
                "bundles/metacritic"
                "bundles/lib",
                "bundles/app",
                "bundles/anglib"
            ],
            /**
            *   to exclude some module for debugging purposes, we can do like this
            *   (module will appear like standalone file)
            **/
            //  excludeShallow : [
            //     "views/InputView"
            // ]
        },
        {
            name: 'bundles/metacritic',
            exclude: [
                'bundles/anglib'
            ]
        },
        {
            name: 'bundles/lib',
            exclude: [
                'bundles/anglib'
            ]
        },
        {
            name: 'bundles/app',
            exclude: [
                'bundles/anglib'
            ]
        },
        {
            name: 'bundles/anglib'
        }

    ],
    paths: {
        kendo: "empty:",
        jquery: "empty:"
        // text: "lib/text"
        // kendoAngular: "empty:"
    }
})