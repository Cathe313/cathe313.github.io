
var _ = require('underscore');
var $app = $('#app');
var $header = $('#header');


function createHeaderEn() {
    $header.html('');
    var entryTemplateText = require('raw!../views/header-en.ejs');
    var template = _.template( entryTemplateText );
    var compiledTemplate = template();
    $header.append(compiledTemplate);
    $header.foundation();
}

function createHeaderFr() {
    $header.html('');
    var entryTemplateText = require('raw!../views/header-fr.ejs');
    var template = _.template( entryTemplateText );
    var compiledTemplate = template();
    $header.append(compiledTemplate);
    $header.foundation();
}

function displayMainPage() {
    $app.html('');
    if (window.localStorage.getItem('language') === 'En') {
        createHeaderEn();
        var entryTemplateText = require('raw!../views/main.ejs');
        var template = _.template(entryTemplateText);
        var compiledTemplate = template();
        $app.append(compiledTemplate);
    }
    else {
        createHeaderFr();
        entryTemplateText = require('raw!../views/main-fr.ejs');
        template = _.template(entryTemplateText);
        compiledTemplate = template();
        $app.append(compiledTemplate);
    }
}

function displayContact() {
    $app.html('');
    
    if (window.localStorage.getItem('language') === 'En') {
        createHeaderEn();
        var entryTemplateText = require('raw!../views/contact.ejs');
        var template = _.template(entryTemplateText);
        var compiledTemplate = template();
        $app.append(compiledTemplate);
    }
    else {
        createHeaderFr();
        entryTemplateText = require('raw!../views/contact-fr.ejs');
        template = _.template(entryTemplateText);
        compiledTemplate = template();
        $app.append(compiledTemplate);
    }
}

function displayAbout() {
    $app.html('');
    
    if (window.localStorage.getItem('language') === 'En') {
        createHeaderEn();
        var entryTemplateText = require('raw!../views/about.ejs');
        var template = _.template(entryTemplateText);
        var compiledTemplate = template();
        $app.append(compiledTemplate);
    }
    else {
        createHeaderFr();
        entryTemplateText = require('raw!../views/about-fr.ejs');
        template = _.template(entryTemplateText);
        compiledTemplate = template();
        $app.append(compiledTemplate);
    }
}

function displayProjects() {
    $app.html('');
    
    if (window.localStorage.getItem('language') === 'En') {
        createHeaderEn();
        var entryTemplateText = require('raw!../views/projects.ejs');
        var template = _.template(entryTemplateText);
        var compiledTemplate = template();
        $app.append(compiledTemplate);
    }
    else {
        createHeaderFr();
        entryTemplateText = require('raw!../views/projects-fr.ejs');
        template = _.template(entryTemplateText);
        compiledTemplate = template();
        $app.append(compiledTemplate);
    }
}

module.exports = {
    'main': displayMainPage,
    'contact': displayContact,
    'about': displayAbout,
    'projects': displayProjects
};