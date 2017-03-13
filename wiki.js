const express = require('express');
//external libraries 
const morgan = require('morgan')
const nunjucks = require('nunjucks');
const routes = require("./routes");
const wiki = express();

// point nunjucks to the directory containing templates and turn off caching; configure returns an Environment 
// instance, which we'll want to use to add Markdown support later.
var env = nunjucks.configure('views', {noCache: true});
// have res.render work with html files
app.set('view engine', 'html');
// when res.render works with html files, have it use nunjucks to do so
app.engine('html', nunjucks.render);


//listen on a port 
//app.use to register middleware
//body parser 