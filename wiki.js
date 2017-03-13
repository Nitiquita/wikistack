const express = require('express');
//external libraries
const morgan = require('morgan')
const nunjucks = require('nunjucks');
const routes = require("./routes");
const wiki = express();
const models = require('./models/index');
const bodyParser = require('body-parser');
const path = require('path');

// point nunjucks to the directory containing templates and turn off caching; configure returns an Environment
// instance, which we'll want to use to add Markdown support later.
var env = nunjucks.configure('views', {noCache: true});
// have res.render work with html files
wiki.set('view engine', 'html');
// when res.render works with html files, have it use nunjucks to do so
wiki.engine('html', nunjucks.render);
wiki.use(express.static(path.join(__dirname, 'public')));

wiki.use(bodyParser.json());
wiki.use(bodyParser.urlencoded({extended: true}));

models.User.sync({})
.then(function () {
    return models.Page.sync({})
})
.then(function () {
    wiki.listen(3000, function () {
        console.log('Server is listening on port 3001!');
    });
})
.catch(console.error);
