$(document).foundation();

var Backbone = require('backbone');
var display = require('./lib/display');

var router = Backbone.Router.extend({
    routes: {
        '': 'homePage',
        'main': 'main',
        'portfolio': 'portfolio',
        'contact': 'contact'
    },
    homePage: function() {
        this.navigate('main', {trigger: true});
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
