module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Compile jade
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

    clean: [
      'dist/**/*',
      '.tmp/**/*'
    ],

    copy: {
      build: {
        files: [{
          // CSS files
          expand: true,
          flatten: true,
          cwd: 'src',
          src: ['**/*.css',
                '!**/_*.css',
                '!bower_components/**/*'],
          dest: 'dist/static/css'
        }, {
          // Javascript files
          expand: true,
          flatten: true,
          cwd: 'src',
          src: ['**/*.js',
                '!**/*_.js',
                '!bower_components/**/*'],
          dest: 'dist/static/js'
        }, {
          // Font file
          expand: true,
          flatten: true,
          cwd: 'src',
          src: ['bower_components/**/dist/fonts/*'],
          dest: 'dist/static/fonts'
        }, {
          // Images
          expand: true,
          cwd: 'src/static/img',
          src: ['**/*'],
          dest: 'dist/static/img'
        }]
      }
    },

    wiredep: {
      task: {
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

  grunt.registerTask('default', ['clean',
                                 'copy',
                                 'wiredep',
                                 'jadeUsemin',
                                 'jade']);

};
