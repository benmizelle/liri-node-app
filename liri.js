// ===============twitter================ //

// Grabs the keys.js data
 var getTweets = require("./keys.js");
// Gets twitter keys from the keys file storing it in a variable.
 var keyList = getTweets.twitterKeys;
// twitter npm package
 var twitter = require("twitter");

 var client = new twitter ({
 	keyList
 })
if (process.argv[2] === "my-tweets") {
	var params = {screen_name: 'nodejs'};
	client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }

});
console.log("Recent Tweets: " + JSON.stringify(client.get));
}

// ==================request================= //

// request npm package
 var request = require("request");
 var movieTitle = process.argv[3]
if (process.argv[2] === "movie-this") {
	request("https://www.omdbapi.com/?t=" + movieTitle + "&y=&plot=short&r=json"), function(error, response, body) {

  // If the request was successful...
  if (!error && response.statusCode === 200) {

    // Then log the body from the site!
    console.log(JSON.parse(body));
  }
}
};

// ====================spotify===================== //

// spotify npm package
var spotify = require("spotify");
var songTitle = process.argv[3];


if (process.argv[2] === "spotify-this-song") {

spotify.search({ type: 'track', query: songTitle }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }
 
    // conosle.log() info we need
    console.log("================================================================================");
    // log artist name
    console.log(("Artist: " + JSON.stringify(data.tracks.items[0].album.artists[0].name, null, 2)));
    // log song name
    console.log("Song Title: " + JSON.stringify(data.tracks.items[0].name, null, 2));
    // log preview link of the song
    console.log("Preview Song: " + JSON.stringify(data.tracks.items[0].preview_url, null, 2));
    // log album name
    console.log("Album Name: " + JSON.stringify(data.tracks.items[0].album.name, null, 2));

	console.log("================================================================================");
});
}

// ========================do what it says===================== //

// fs package
var fs = require("fs");

function readFile() {
	// reads random.txt file
fs.readFile("random.txt", "utf8", function(error, data) {
	var output = data
if (process.argv[2] === "do-what-it-says") {
	readFile()
	spotify.search({ type: 'track', query: output }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }
 
    // conosle.log() info we need
    console.log("================================================================================");
    // log artist name
    console.log("Artist: " + JSON.stringify(data.tracks.items[0].album.artists[0].name, null, 2));
    // log song name
    console.log("Song Title: " + JSON.stringify(data.tracks.items[0].name, null, 2));
    // log preview link of the song
    console.log("Preview Song: " + JSON.stringify(data.tracks.items[0].preview_url, null, 2));
    // log album name
    console.log("Album Name: " + JSON.stringify(data.tracks.items[0].album.name, null, 2));

	console.log("================================================================================");
});
};

readFile();