module.exports = function (grunt) {
	
    grunt.config.set('mocha_istanbul', {
		coverage: {
			src: 'test/', // the folder, not the files
			options: {
				coverageFolder: 'coverage',
				mask: 'test.js',
				root: '.'
			}
		}
	});

	grunt.config.set('jshint', {
		app: ['app.js','test/*.js']
	});

	// load plugin
	grunt.loadNpmTasks('grunt-mocha-istanbul');
	grunt.loadNpmTasks('grunt-contrib-jshint');
		
	// Tasks
    grunt.registerTask('test', [
        'mocha_istanbul:coverage'
	]);
	
	grunt.registerTask('lint', [
        'jshint'
    ]);
        
};



