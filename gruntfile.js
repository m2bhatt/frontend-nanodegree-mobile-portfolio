module.exports = function(grunt) {

  grunt.initConfig({
    uglify: {
       dist: {
          files: {
             'views/js/main.min.js': ['views/js/main.js'],
          }
       }
    },
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'views/css',
          src: ['*.css', '!*.min.css'],
          dest: 'views/css',
          ext: '.min.css'
        },
        {
          expand: true,
          cwd: 'css',
          src: ['*.css', '!*.min.css'],
          dest:'css',
          ext: '.min.css'
        }],
      }
    },
    htmlmin: {
    dist: {
      options: {
        removeComments: true,
        collapseWhitespace: true
      },
      files: {
        'index.html': 'index.html',
        'views/pizza.html': 'views/pizza.html',
      }
    }
  },
});

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');

  grunt.registerTask('default', ['uglify','cssmin', 'htmlmin']);

};
