const express = require('express')
const router = express.Router();

module.exports = router;

router.get('/', function (req, res, next){
    
})

router.post('/',function (req, res, next) {

})

router.get('/add', function (req, res, next) {
    res.render('addpage');
})