var express = require('express');
var router = express.Router();
var axios = require('axios');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', lastname: 'Balaman' });
});

router.get('/home', function(req, res, next) {
  res.render('home');
});

router.get('/weather', function(req, res, next) {
  	const SEARCH_URL = 'https://api.openweathermap.org/data/2.5/weather';
	axios.get(SEARCH_URL, {
		params: {
			q: 'Davao',
			units: 'metric',
			appid: '299dafbd93e95452304f176a39de2b2e'
		}
	})
	.then(function (response) {
		//console.log(response);
		console.log(response.data);
		res.render('weather', {weather: response.data});
	})
	.catch(function (error) {
		console.log(error);
	});
  
});

module.exports = router;
