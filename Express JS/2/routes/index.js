var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
// router.get('/student/:id',function(req,res,next){
//   // res.render('student',{result:req.params.id});
//   res.json(req.params);

router.post('/student/submit',function(req,res,next){
  var id=req.body.id1;
  res.redirect('/student/'+id);
})
module.exports = router;
