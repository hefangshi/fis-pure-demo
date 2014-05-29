var Backbone, Workspace, app;

Backbone = require('backbone');

Backbone.$ = require('jquery');

app = require('app/views/app');

Workspace = require('app/routers/router');

new Workspace();

Backbone.history.start();

Backbone.$(document).ready(function(){
    new app();
});
