module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		watch: {
			options: {
				livereload: true,
				spawn: false,
				dateFormat: function(time) {
			      grunt.log.writeln('The watch finished in ' + time + 'ms at' + (new Date()).toString());
			      grunt.log.writeln('Waiting for more changes...');
			    },
			},
			scripts: {
				files: [
					'js/components/app/controllers/*.js'
				]
			}
		}
	});

	grunt.event.on('watch', function(action, filepath, target) {
		grunt.log.writeln(target + ': ' + filepath + ' has ' + action);
	});

	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('watch', ['watch']);
}