const express = require('express')
const router = express.Router();
var models = require('../models');
var Page = models.Page;
var User = models.User;

module.exports = router;

router.get('/', function (req, res, next){
  res.redirect('/');
})

router.get('/add', function (req, res, next) {
  res.render('addpage');
})

router.get('/:title', function (req, res, next){
  Page.findOne({
    where: {
      urlTitle: req.params.title
    }
  })
  .then(function(foundPage){
    res.render('wikipage', {
      title: ,
      content:
    });
  })
  .catch(next);
})

router.post('/', function(req, res, next) {
  var page = Page.build({
    title: req.body.title,
    content: req.body.content
  });

  // STUDENT ASSIGNMENT:
  // make sure we only redirect *after* our save is complete!
  // note: `.save` returns a promise or it can take a callback.
  page.save()
  .then(function(){
    res.json(req.body);
  });
});
