'use strict';

var _ = require('lodash');
var twitterSearch = require('./logic');

// Get list of twitters
exports.index = function(req, res) {
  res.json([]);
};

exports.create = function(req, res) {
  twitterSearch(req.body.search, function(data) {
    res.json(data);
  });
};