module.exports = function(grunt) {

  'use strict';

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    compass: {
      dev: {
        // http://compass-style.org/help/tutorials/configuration-reference/#configuration-properties
        // these options will override (or extend) config.rb settings.
        options: {  
          cssDir: 'build/css/',
          sassDir: 'src/sass/'
        }
      }
    },
    // connect web server configuration
    connect: {
      server: {
        options: {
          port: 8000,
          hostname: 'localhost',
          open: true,
          livereload: true
        }
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/js/*.js',
        dest: 'build/js/<%= pkg.name %>.min.js'
      }
    },
    watch: {
	  options: {
		livereload: true
	  },
      css: {
        files: '**/*.scss',
        tasks: ['compass']
      }
    }
  });

  // Load the plugins.
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  
  // Default task(s).
  grunt.registerTask('default', ['uglify', 'connect:server', 'watch']);

};