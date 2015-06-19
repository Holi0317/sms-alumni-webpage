module.exports = (grunt) ->
  grunt.initConfig
    pkg: grunt.file.readJSON('package.json')

    # Compile coffee to javascript
    coffee:
      compile:
        expand: true
        flatten: true
        cwd: 'src/js'
        src: [
          '**/*.coffee'
          '!**/_*.coffee'
          '!bower_components/**/*'
        ]
        dest: 'src/static/js'
        ext: '.js'

    # Jade template engine support
    jade:
      compile:
        options:
          # Enable pretty for development usage
          pretty: true
        expand: true
        cwd: '.tmp'
        src: [
          '**/*.jade'
          '!**/_*.jade'
        ]
        dest: 'dist/'
        ext: '.html'

    # Clean directory
    clean:
      [
        'dist/'
      ]

    # Copy static file to dist
    copy:
      build:
        files: [{
          # Css file
          expand: true
          flatten: true
          cwd: 'src'
          src: [
            '**/*.css'
            '!**/_*.css'
            '!bower_components/**/*'
          ]
          dest: 'dist/static/css'
        }
        {
          # Javascript file
          expand: true
          flatten: true
          cwd: 'src'
          src: [
            '**/*.js'
            '!**/_*.js'
            '!bower_components/**/*'
          ]
          dest: 'dist/static/js'
        }
        {
          # font file
          expand: true
          flatten: true
          cwd: 'src'
          src: [
            'bower_components/**/dist/fonts/*'
          ]
          dest: 'dist/static/fonts'
        }
        {
          # Images
          expand: true
          cwd: 'src/static/img'
          src: ['**/*']
          dest: 'dist/static/img'
        }
        ]

    # Inject bower component into jade
    wiredep:
      task:
        src: [
          'src/**/*.jade'
        ]
        options:{}

    # Bundle and min all js, css, img
    jadeUsemin:
      compile:
        options:
          tasks:
            js: ['concat', 'uglify']
            css: ['concat', 'cssmin']
          targetPrefix: 'dist'
        files: [
          expand: true
          cwd: 'src'
          src: ['**/*.jade']
          dest: '.tmp/'
        ]

  # Load plugins for tasks
  grunt.loadNpmTasks('grunt-contrib-coffee')
  grunt.loadNpmTasks('grunt-contrib-jade')
  grunt.loadNpmTasks('grunt-contrib-clean')
  grunt.loadNpmTasks('grunt-wiredep')
  grunt.loadNpmTasks('grunt-contrib-concat')
  grunt.loadNpmTasks('grunt-contrib-uglify')
  grunt.loadNpmTasks('grunt-contrib-cssmin')
  grunt.loadNpmTasks('grunt-contrib-copy')
  grunt.loadNpmTasks('grunt-jade-usemin')

  # Default tasks
  grunt.registerTask('default', [
    'clean'
    'copy'
    'coffee'
    'wiredep'
    'jadeUsemin'
    'jade'
  ])
