module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            development: {
                options: {
                    style: 'expanded'
                },
                files: {
                    'build/brix.css': 'scss/brix.scss',
                    'build/brix-all.css': 'scss/brix-all.scss'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-jshint');
};