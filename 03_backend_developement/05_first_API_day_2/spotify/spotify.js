const OAuth = require("OAuth");
const request = require("request");

const spotifyPayload = {
  SPOTIFY_ID: process.env.SPOTIFY_ID,
  SPOTIFY_SECRET: process.env.SPOTIFY_SECRET
};

let spotifyToken;

function getToken() {
  // console.log(spotifyId+":"+spotifySecret);
  const clientSecretEncoded = new Buffer(spotifyPayload.SPOTIFY_ID + ":" + spotifyPayload.SPOTIFY_SECRET).toString("base64");
  const headers = {
    "Authorization": `Basic ${clientSecretEncoded}`
  };
  // console.log( headers );

  request({
    url: "https://accounts.spotify.com/api/token",
    method: "POST",
    headers: headers,
    form: {
      "grant_type": "client_credentials"
    }
  },
  function(error, response, result) {
    // console.log (result );
    spotifyToken = JSON.parse(result).access_token;
    console.log(spotifyToken);
    getPlaylistsbyUser("louis.delcroix");

    // console.log( `token à utiliser = ${spotifyToken}` );

    // genesis = 3CkvROUTQ6nRi9yQOcsB50
    // pink floyd = 0k17h0D3J5VfsdmQ1iZtE9
    //searchAlbumsArtist("3CkvROUTQ6nRi9yQOcsB50");
  }
  );
}

getToken();

function getPlaylistsbyUser(user) {
  const headers = {
    "Authorization": `Bearer ${spotifyToken}`
  };
  // console.log( headers );
  return request({
    url: `https://api.spotify.com/v1/users/${user}/playlists`,
    method: "GET",
    headers: headers,
  },
  function(error, response, result) {
    // console.log("error:", error); // Print the error if one occurred
    // console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
    // console.log("result:", result); // Print the HTML for the Google homepage.

    const json = JSON.parse(result);
    // console.log( reponseJSON.items );

    console.log(json);
  }
  );

}

module.exports = {
  getToken: getToken
};


//
// curl -X GET "https://api.spotify.com/v1/users/louis.delcroix/playlists" -H "Authorization: Bearer BQBLCEXxAdqP6-zcWi4rz8HmN0eZsBb53iWAvPjyx9cKALPHu_Sb6IP_dtBECegdCsT2WVrvXLMfk-H1uyY"
//
// curl -X GET "https://api.spotify.com/v1/tracks/3n3Ppam7vgaVa1iaRUc9Lp" -H "Authorization: Bearer BQBLCEXxAdqP6-zcWi4rz8HmN0eZsBb53iWAvPjyx9cKALPHu_Sb6IP_dtBECegdCsT2WVrvXLMfk-H1uyY"
