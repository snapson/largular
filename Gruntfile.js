module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		requirejs: {
			compile: {
				options: {
					appDir: "./",
					optimizeCss: "standard.keeplines",
					optimize: "none",
					mainConfigFile : "./js/main.js",
					baseUrl: "./js",
					removeCombined: true,
					findNestedDependencies: true,
					dir: "./public",
					skipDirOptimize: true,
					fileExclusionRegExp: "/" + [
						"^\\.",
						"node_modules",
						"build\\.js",
						"package\\.json",
						"gulpfile\\.js",
						"^r.js$",
						"JSLintNet.*"
					].join('|') + "/",
					modules: [
						{
							name: "main",
							exclude: [
								"bundles/metacritic",
								"bundles/lib",
								"bundles/app",
								"bundles/anglib"
							]
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
					}
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-requirejs');

	grunt.registerTask('build', 'requirejs');
	grunt.registerTask('server', 'Start the node server', function() {
		var done = this.async();
		grunt.log.writeln('Starting web server on port 8080');
		require('./public/server.js').on('close', done);
	});
	grunt.registerTask('start', 'Build & start the app', function() {
		grunt.task.run('build', 'server');
	});
}