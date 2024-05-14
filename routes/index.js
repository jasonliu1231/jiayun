var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '找餐店（大甲店）'});
});

router.get('/menu', function(req, res, next) {
  res.render('menu', { title: '餐點介紹' });
});

module.exports = router;
