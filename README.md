LIRI is an APP. LIRI is a Language Interpretation and Recognition Interface and a command line node app that takes in parameters and gives you back data.

This app can take in one of the following commands:

   * `concert-this` <Artist/bandname>

   Name of the venue

   Venue location

   Date of the Event (use moment to format this as "MM/DD/YYYY")

   * `spotify-this-song`  <song name>

  Artist(s)

  The song's name

  A preview link of the song from Spotify

  The album that the song is from

   * `movie-this` <movie name>

   Title of the movie.
   Year the movie came out.
   IMDB Rating of the movie.
   Rotten Tomatoes Rating of the movie.
   Country where the movie was produced.
   Language of the movie.
   Plot of the movie.
   Actors in the movie.

   * `do-what-it-says`

  Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.

 
