module.exports = function (grunt) {
  "use strict";
  // Initialize the config
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    // Base path
    src: 'src',
    dest: 'dest',
    // Grunt-sass
    sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          "<%= dest %>/css/style.css": "<%= src %>/sass/*.scss"
        }
      }
    },
    // Combined Media Queries
    cmq: {
      options: {
        log: false
      },
      your_target: {
        files: {
          "<%= dest %>/css/combined": ["<%= dest %>/css/style.css"]
        }
      }
    },
    // Minify css
    cssmin: {
      target: {
        files: {
          "<%= dest %>/css/style.min.css": ["<%= dest %>/css/combined/*.css"]
        }
      }
    },
    // Grunt-contrib-watch
    watch: {
      sass: {
        // Watches all Sass or Scss files recursive within the sass folder
        files: ["<%= src %>/sass/**/*.scss"],
        // runs the task `sass` and cssmin whenever any watched file changes
        tasks: ["sass", "cmq", "cssmin:target"]
      }
    },
  });
  grunt.loadNpmTasks("grunt-sass");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-combine-media-queries");
  grunt.loadNpmTasks("grunt-contrib-cssmin");
  grunt.registerTask("default", ["sass", "cmq", "cssmin", "watch"]);
};
