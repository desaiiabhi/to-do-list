var express = require('express');
var user = require('../controller/usercontroller')

var router = express.Router();

/* GET home page. */
router.get('/show',user.show_task); 
router.post('/add_task',user.add_task); 
router.get('/complate/:id',user.complete); 
router.post('/update/:id',user.edit_task); 
router.get('/delete/:id',user.delete_task); 

module.exports = router;
