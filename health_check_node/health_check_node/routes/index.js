var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/checkStatus', function(req,res){
  res.send({msg:"success"},200);
})

module.exports = router;
