module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jade: {
      compile: {
        options: {
          pretty: true
        },
        // File selector
        expand: true,
        cwd: '.tmp',
        src: ['**/*.jade',
              '!**/_*.jade'],
        dest: 'dist/',
        ext: '.html'
      }
    },

    clean: {
      compile: ['dist/**/*', '.tmp/**/*']
    },

    copy: {
      fonts: {
        files: [{
          expand: true,
          flatten: true,
          cwd: 'src',
          src: ['bower_components/**/dist/fonts/*'],
          dest: 'dist/static/fonts'
        }]
      },
      images: {
        files: [{
          expand: true,
          cwd: 'src/static/img',
          src: ['**/*'],
          dest: 'dist/static/img'
        }]
      }
    },

    wiredep: {
      compile: {
        src: [ 'src/**/*.jade' ],
        options: {}
      }
    },

    jadeUsemin: {
      compile: {
        options: {
          tasks: {
            js: ['concat', 'uglify'],
            css: ['concat', 'cssmin']
          },
          targetPrefix: 'dist'
        },
        files: [{
          expand: true,
          cwd: 'src',
          src: ['**/*.jade'],
          dest: '.tmp/'
        }]
      },
      watchCompile: {
        // Only change blocks of css and js into bundle version. No-op for bundling css/js
        options: {
          tasks: {
            js: [],
            css: []
          },
          targetPrefix: 'dist'
        },
        files: [{
          expand: true,
          cwd: 'src',
          src: ['**/*.jade'],
          dest: '.tmp/'
        }]
      }
    },

    uglify: {
      compile: {
        files: [{
          expand: true,
          cwd: 'src/static/js',
          src: ['**/*.js', '!**/_*.js'],
          dest: 'dist/static/js'
        }]
      }
    },

    cssmin: {
      compile: {
        files: [{
          expand: true,
          cwd: 'src/static/css',
          src: ['**/*.css', '!**/_*.css'],
          dest: 'dist/static/css'
        }]
      }
    },

    watch: {
      options: {
        livereload: true
      },
      jade: {
        // Does NOT support add or remove of file, nor adding dependency in bower
        // If that is the case, stop watch and run grunt once.
        files: ['src/**/*.jade'],
        tasks: ['jadeUsemin:watchCompile',
                'jade:compile']
      },
      cssBundle: {
        // Bundle css file on change
        // This does support adding file as this is how jade-usemin works
        files: ['src/static/css/**/_*.css'],
        tasks: ['jadeUsemin:compile']
      },
      javascriptBundle: {
        // Bundle js file on change
        files: ['src/static/js/**/_*.js'],
        tasks: ['jadeUsemin:compile']
      },
      css: {
        files: ['src/static/css/**/*.css'],
        tasks: ['cssmin:compile']
      },
      javascript: {
        files: ['src/static/js/**/*.js'],
        tasks: ['uglify:compile']
      }
    },

    connect: {
      server: {
        options: {
          livereload: true,
          base: 'dist/',
          port: 8080
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-wiredep');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-jade-usemin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('default', ['clean:compile',
                                 'cssmin:compile',
                                 'uglify:compile',
                                 'copy:fonts',
                                 'copy:images',
                                 'wiredep:compile',
                                 'jadeUsemin:compile',
                                 'jade:compile']);

  grunt.registerTask('serve', ['connect:server', 'watch']);

};
