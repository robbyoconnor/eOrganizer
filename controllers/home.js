/**
 * GET /
 * Home page.
 */
//var secrets = require('../config/secrets');
exports.index = function(req, res) {
  res.render('home', {
    title: 'Home'
  });
};
