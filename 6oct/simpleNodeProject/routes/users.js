var express = require('express');
const request = require("request");
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/fx',
    (req, res, next) => {
      const options = {
        'method': 'GET',
        'url': 'http://apilayer.net/api/live?access_key=707d4d2111a1976c7c4bbd767a9bf3a6&currencies=EUR, GBP,JPY&format=',
      };
      request(options, function (error, response) {
        if (error) throw new Error(error);
        console.log('in users' , JSON.parse(response.body));
//        res.json(response.body);
        res.render('index',
            {title: JSON.parse(response.body)})
      });
    }

)
module.exports = router;
