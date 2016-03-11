var _ = require('lodash');
var Event = require('../models/Event');
var secrets = require('../config/secrets');

exports.postEvent = function(req, res, next) {
	
	var event = new Event({
    name: req.body.title,
    description: req.body.desc
  });

	event.save(function (err) {
  	if (err) return next(err);
	res.redirect('/');
	});
};

exports.getEvent = function(req,res,next) {
	res.render('event')
};