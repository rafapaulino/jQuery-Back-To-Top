/*global module:false*/
module.exports = function(grunt) {
    'use strict';

    // Project configuration.
    grunt.initConfig({
        uglify: {
            target: {
                files: {
                    'js/backToTop.min.js': [
                        'js/backToTop.js'
                    ]
                }
            }
        },
        cssmin: {
			target: {
				files: {
					'css/backToTop.min.css': [
						'css/backToTop.css'
					]
				}
			}
		}
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // Default task.
    grunt.registerTask('default', ['uglify','cssmin']);

};
