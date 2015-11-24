$(document).foundation();

var Backbone = require('backbone');
var display = require('./lib/display');

//Changing between languages
if (window.localStorage.getItem('language') === null) {
    window.localStorage.setItem('language', 'En');
}
// console.log(window.localStorage.getItem('language'));

$('body').on('click', '.language', function() {
    if (window.localStorage.getItem('language') === 'Fr') {
        window.localStorage.setItem('language', 'En');
        console.log(window.localStorage.getItem('language'));
        window.location.reload();
        // display.createHeaderEn();
    }
    else {
        window.localStorage.setItem('language', 'Fr');
        console.log(window.localStorage.getItem('language'));
        window.location.reload();
        // display.createHeaderFr();
    }
});

var router = Backbone.Router.extend({
    routes: {
        '': 'homePage',
        'main': 'main',
        'about': 'about',
        'contact': 'contact',
        'projects': 'projects'
    },
    homePage: function() {
        this.navigate('main', {
            trigger: true
        });
    },
    main: function() {
        display.main();
    },
    about: function() {
        display.about();
    },
    contact: function() {
        display.contact();
    },
    projects: function() {
        display.projects();
    }
});

var thisRouter = new router;

thisRouter.on();

Backbone.history.start();
