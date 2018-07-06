let express = require('express');
let router = express.Router();
let userModel = require('../models/usersModel/usersModel');
let util = require('../public/javascripts/util');

/* GET users listing. */
router.get('/list', function(req, res, next) {
  userModel.find({}, function(err, data) {
    if(err) res.render('error', util.handleError(err));
    let content = {
      title: '用户列表',
      list: data
    };
    res.render('users', content);
  });
});

module.exports = router;
