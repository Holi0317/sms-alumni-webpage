module.exports = (grunt) ->
  grunt.initConfig
    pkg: grunt.file.readJSON('package.json')

    # Compress .js into .min.js
    uglify:
      build:
        expand: true
        cwd: 'dist/static/js'
        src: ['*.js']
        dest: 'dist/static/js/'
        ext: '.min.js'

    # Compile coffee to javascript
    coffee:
      compile:
        expand: true
        flatten: true
        cwd: 'src/coffee'
        src: ['*.coffee']
        dest: 'dist/static/js/'
        ext: '.js'

    # Jade template engine support
    jade:
      compile:
        options:
          # Enable pretty for development usage
          pretty: true
        expand: true
        cwd: 'src/jade'
        src: [
          '**/*.jade'
          '!**/_*.jade'
        ]
        dest: 'dist/'
        ext: '.html'

    # Clean directory
    clean:
      [
        'dist/static/js/'
      ]

    # Inject bower component into html
    wiredep:
      task:
        src: ['dist/**/*.html']
      options:
        exclude: ['jquery']

  # Load plugins for tasks
  grunt.loadNpmTasks('grunt-contrib-coffee')
  grunt.loadNpmTasks('grunt-contrib-uglify')
  grunt.loadNpmTasks('grunt-contrib-jade')
  grunt.loadNpmTasks('grunt-contrib-clean')
  grunt.loadNpmTasks('grunt-wiredep')

  # Default tasks
  grunt.registerTask('default', [
    'clean'
    'coffee'
    'uglify'
    'jade'
    'wiredep'
  ])
