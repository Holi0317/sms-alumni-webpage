module.exports = (grunt) ->
  grunt.initConfig
    pkg: grunt.file.readJSON('package.json')

    # Compress .js into .min.js 
    uglify:
      options:
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
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
          '**/*.jade',
          '!**/_*.jade'
        ]
        dest: 'dist/'
        ext: '.html'


  # Load plugins for tasks
  grunt.loadNpmTasks('grunt-contrib-coffee')
  grunt.loadNpmTasks('grunt-contrib-uglify')
  grunt.loadNpmTasks('grunt-contrib-jade')

  # Default tasks 
  grunt.registerTask('default', ['coffee', 'uglify', 'jade'])
