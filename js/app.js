$(document).foundation();

var Backbone = require('backbone');
var display = require('./lib/display');

//Changing between languages
if (window.localStorage.getItem('language') === null) {
    window.localStorage.setItem('language', 'En');
}
console.log(window.localStorage.getItem('language'));

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
        'portfolio': 'portfolio',
        'contact': 'contact'
    },
    homePage: function() {
        this.navigate('main', {
            trigger: true
        });
    },
    main: function() {
        display.main();
    },
    portfolio: function() {
        display.portfolio();
    },
    contact: function() {
        display.contact();
    }
});

var thisRouter = new router;

thisRouter.on();

Backbone.history.start();
