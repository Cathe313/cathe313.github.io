
var _ = require('underscore');
var $app = $('#app');


function displayMainPage() {
    $app.html('');
    var entryTemplateText = require('raw!../views/main.ejs');
    var template = _.template(entryTemplateText);
    var compiledTemplate = template();
    $app.append(compiledTemplate);
}

function displayContact() {
    $app.html('');
    var entryTemplateText = require('raw!../views/contact.ejs');
    var template = _.template(entryTemplateText);
    var compiledTemplate = template();
    $app.append(compiledTemplate);
}

function displayPortfolio(){
    $app.html('');
    var entryTemplateText = require('raw!../views/portfolio.ejs');
    var template = _.template(entryTemplateText);
    var compiledTemplate = template();
    $app.append(compiledTemplate);
}


module.exports = {
    'main': displayMainPage,
    'contact': displayContact,
    'portfolio': displayPortfolio
};