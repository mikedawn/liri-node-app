// Read and set environment variables
require("dotenv").config();

//VARS
var axios = require("axios");
var request = require("request");
var fs = require("fs");
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
//vars to capture user inputs.
var userOption = process.argv[2];
var inputParameter = process.argv[3];


//Execute function
UserInputs(userOption, inputParameter);

//FUNCTIONS
function UserInputs(userOption, inputParameter) {
    switch (userOption) {
        case 'concert-this':
            showConcertInfo(inputParameter);
            break;
        case 'spotify-this-song':
            showSongInfo(inputParameter);
            break;
        case 'movie-this':
            showMovieInfo(inputParameter);
            break;
        case 'do-what-it-says':
            showSomeInfo();
            break;
    }
}

//Spotify
function showSongInfo(song) {

    var args = process.argv[2];

    spotify.search({ type: 'track', query: song }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }


        else if (args === 'spotify-this-song') {
            var song = process.argv.slice(3).join(" ");

            // console.log(song);
            spotify.search({
                type: 'track',
                query: song
            }, function (error, data) {
                if (error) {
                    console.log("There was a problem: " + error);
                }
                console.log("Artist Name: " + data.tracks.items[0].artists.name);
                console.log("Song Name: " + data.tracks.items[0].name);
                console.log("URL: " + data.tracks.items[0].href);
                console.log("Album: " + data.tracks.items[0].album.name);
            })
        }
    })
}
//Concert info
function showConcertInfo(artist) {
    var queryUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"

    axios.get(queryUrl).then(
        function (response) {

            //        console.log(response.data);

            var concertData = response.data

            if (!concertData.length) {

                console.log("noresultsfound");

                return;
            }

            for (i = 0; i < concertData.length; i++) {

                var conCert = concertData[i];
                var line = conCert.venue.name + " - " + conCert.venue.city + " - " + conCert.venue.country + " - " + conCert.datetime

                console.log(line);
            }


        });

    //movie info

}


if (args === 'movie-this') {
    var movie = process.argv.slice(3).join(" ");
    var request = ("http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy");
    console.log(request);
    axios.get(request).then(function (movieResponse) {
        console.log("Title: " + movieResponse.data.Title);
        console.log("Year: " + movieResponse.data.Year);
        console.log("Rating: " + movieResponse.data.imdbRating);
        console.log("Language: " + movieResponse.data.Language);
        console.log("Plot: " + movieResponse.data.Plot);
        console.log("Actors: " + movieResponse.data.Actors);
    })
} else if (args === 'do-what-it-says') {
    fs.readFile("random.txt", "utf8", function (error, data) {
        if (error) {
            console.log(error);
        }
        var array = data.split(",");
        console.log(array[1]);

    });
}

