var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* write 페이지 라우팅 */
router.get('/write', function(req, res, next) {
  res.render('write'); // write.ejs 템플릿을 렌더링
});

module.exports = router;
