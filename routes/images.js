let express = require('express');
let router = express.Router();

router.get('/list', function(req, res) {
  // res.render('images');
  res.send('images');
});

module.exports = router;