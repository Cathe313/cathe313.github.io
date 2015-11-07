$(document).foundation();

var Backbone = require('backbone');

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
        console.log('main');
    },
    portfolio: function() {
        console.log('portfolio');
    },
    contact: function() {
        console.log('contact');
    }
});

var thisRouter = new router;

thisRouter.on();

Backbone.history.start();
