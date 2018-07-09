let https = require('https');
let cheerio = require('cheerio');


let imgsAction = {
  getHtml(url, cb) {
    https.get(url, function(res) {
      let html = '';
      let titles = [];
      res.setEncoding('utf-8');

      res.on('data', function(chunk) {
        html += chunk;
      });
      
      res.on('end', function() {
        console.log(html);
        cb(cheerio.load(html));
      });
    });
  },

  getImgs(html) {
    let $ = html;
    let imgTags = $('img');
    console.log(imgTags);
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