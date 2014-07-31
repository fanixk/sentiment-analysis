'use strict';

var util = require('util'),
  twitter = require('twitter'),
  config = require('../../config/local.env'),
  sentimentAnalysis = require('../logic/sentimentAnalysis');

function twitterSearch(text, callback) {
  var twitterClient = new twitter(config.TWITTER);
  var response = []

  twitterClient.search(text, function(data) {
    data.statuses.forEach(function(tweet, index) {
      response.push({
        tweet: tweet,
        sentiment: sentimentAnalysis(tweet.text)
      });
    });
    
    callback(response);
  });
}

module.exports = twitterSearch;
