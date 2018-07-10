let express = require('express');
let router = express.Router();
let imageModel = require('../models/imagesModel/imagesModel');
let util = require('../public/javascripts/util');
let getImgsAction = require('../actions/images/getImgsAction');

router.get('/list', function(req, res) {
  imageModel.find(function(err, data) {
    if(err) res.render('error', util.handleError(err));
    let content = {
      title: '图片列表',
      imgs: [
        {
          url: '/images/740A3372.jpg',
          name: '哈哈哈哈'
        },
        {
          url: '/images/740A3373.jpg',
          name: '嘿嘿嘿嘿'
        },
        {
          url: '/images/740A3374.jpg',
          name: '啊啊啊啊'
        },
        {
          url: '/images/740A3376.jpg',
          name: '密密麻麻'
        },
      ]
    };
    res.render('image/images', content);
  });
});

router.get('/getImgs', function(req, res) {
  let content = {
    title: '爬取图片设置'
  };
  res.render('image/getImgsSetting', content);
});
router.post('/getImgsAction', function(req, res) {
  let url = req.body.url;
  getImgsAction.getHtml(url,function($) {
    let content = {
      title: '图片列表',
      imgs: []
    };
    let imgs = $('img');
    for(let i=0;i<imgs.length;i++) {
      content.imgs.push({url: imgs[i].attribs.src, name: imgs[i].attribs.src});
    }
    console.log(content);
    res.render('image/images', content);
  });
  // res.send('成功');
});

module.exports = router;