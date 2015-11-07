
var _ = require('underscore');
var $app = $('#app');


function main() {
    $app.html('');
    var entryTemplateText = require('raw!../views/main.ejs');
    var template = _.template(entryTemplateText);
    var compiledTemplate = template();
    $app.append(compiledTemplate);
    
}

module.exports = {
    'main': main
};