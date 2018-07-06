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
    res.render('user/users', content);
  });
});
router.get('/add', function(req, res, next) {
  let content = {
    title: '新增用户',
    status: ''
  };
  res.render('user/add', content);
});
router.post('/addAction', function(req, res) {
  let newUser = new userModel({
    username: req.body.username,
    userGender: req.body.userGender,
    userAge: req.body.userAge
  });
  newUser.save(function(err, data) {
    if(err) res.render('error', util.handleError(err));
    let content = {
      title: '新增用户',
      status: '新增用户成功'
    };
    res.render('user/add', content);
  });
});

router.post('/delete', function(req, res) {
  let _id = req.body._id;
  userModel.remove({_id: _id}, function(err, data) {
    if(err) res.render('error', util.handleError(err));
    res.status(200).json({msg: '删除成功'});
  });
});

module.exports = router;
