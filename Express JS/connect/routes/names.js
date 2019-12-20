var express = require('express');

var router = express.Router();
var mysql=require('mysql');
var db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'friends'

})
db.connect(function(err){
    if(err) throw err;
    console.log('connected');
})
/* GET home page. */
router.get('/', function(req, res, next) {
    var query='select * from data';
    db.query(query,function(err,rows,fields){
        if(err) throw(err);
      res.json(rows);
      //res.render('names', { title: 'Names' ,names:rows});
    });
});

module.exports = router;
