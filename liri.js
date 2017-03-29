// Grabs the keys.js data
var keys = require("./keys.js");
// Gets twitter keys from the keys file storing it in a variable.
var keyList = keys.twitterKeys;
// Adding Node packages
var twitter = rewuire("twitter");
var spotify = require("spotify");
var request = require("request");
