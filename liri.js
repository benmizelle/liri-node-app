// Grabs the keys.js data
 var getTweets = require("./keys.js");
// Gets twitter keys from the keys file storing it in a variable.
 var keyList = getTweets.twitterKeys;
// Requires twitter npm package
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
console.log(client);
}

// Requires request npm package
 var request = require("request");








// Requires spotify npm package
var spotify = require("spotify");
var songTitle = process.argv[3];


if (process.argv[2] === "spotify-this-song") {

spotify.search({ type: 'track', query: songTitle }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }
 
    // conosle.log() info we need
    console.log("==================================");
    // log artist name
    console.log(("Artist: " + JSON.stringify(data.tracks.items[0].album.artists[0].name, null, 2)));
    // log song name
    console.log("Song Title: " + JSON.stringify(data.tracks.items[0].name, null, 2));
    // log preview link of the song
    console.log("Preview Song: " + JSON.stringify(data.tracks.items[0].preview_url, null, 2));
    // log album name
    console.log("Album Name: " + JSON.stringify(data.tracks.items[0].album.name, null, 2));

	console.log("==================================");
});

};








