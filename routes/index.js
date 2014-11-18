var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/olf/:olf', function(req, res) {
	res.send('Olfen golfen köper Rolfen ' + req.params.olf);

});

module.exports = router;
