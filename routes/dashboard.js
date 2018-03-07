var express = require('express');
var router = express.Router();

router.get('/dashboard',function(req,res,next){
	res.render('main/home',{title:"Home Page"});
});