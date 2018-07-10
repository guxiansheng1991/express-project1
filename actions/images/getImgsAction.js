let http = require('http');
let https = require('https');
let cheerio = require('cheerio');


let imgsAction = {
  getHtml(url, cb) {
    let myProto = this._checkHttp(url);
    console.log(myProto);
    myProto.get(url, function(res) {
      let html = '';
      let titles = [];
      res.setEncoding('utf-8');

      res.on('data', function(chunk) {
        html += chunk;
      });
      
      res.on('end', function() {
        cb(cheerio.load(html));
      });
    });
  },

  getImgs(html) {
    let $ = html;
    let imgTags = $('img');
    return imgTags;
  },

  _checkHttp(url) {
    if(url.indexOf('https') != -1) {
      return https;
    }else {
      return http;
    }
  }

};

module.exports = imgsAction;