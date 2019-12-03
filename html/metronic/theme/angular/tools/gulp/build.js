var yargs = require('yargs');
var fs = require('fs');
var colors = require('colors');
global.atob = require('atob');

var release = true;

// merge with default parameters
var args = Object.assign({
    prod: false,
    default: false,
    angular: false,
    theme: '',
}, yargs.argv);

var themes = ['bWV0cm9uaWM=', 'a2Vlbg==', 'YXRsYXM='];
var pkg = 'default';
var confPath = '';
var theme = atob(themes[0]);

if (release) {
    confPath = './../build.json';
} else {
    themes.forEach(function (t) {
        var th = atob(t);
        if (args[th]) {
            theme = th;
        }
        ['default', 'angular'].forEach(function (p) {
            if (args[p]) {
                pkg = p;
            }
        });
    });

    var folder = pkg;
    if (pkg === 'default') {
        folder = 'preview';
    }
    confPath = './../../themes/themes/' + theme + '/dist/' + folder + '/build.json';
}

var d = new Date();
var t = d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
console.log('[' + t.grey + ']' + ' ' + 'Using config ' + confPath.green);
module.exports = require(confPath);
module.exports.config.theme = theme;
