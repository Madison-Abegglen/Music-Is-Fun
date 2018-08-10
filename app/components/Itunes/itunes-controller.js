import ItunesService from "./itunes-service.js";

//PRIVATE

const itunesService = new ItunesService()

function drawSongs(results, artist) {
  console.log(results)
  //YOUR CODING STARTS HERE
  let songs = results;
  let template = `
      <div class="col-sm-12 text-cool text30">
        <p class="text-center">Showing <span>${songs.length}</span> results for: <em>${artist}</em></p>
      </div>
    `
  for (let i = 0; i < songs.length; i++) {
    let song = songs[i];
    template += `
    <div class="card col-sm-3 d-inline-block offset-sm-2 mb-5 text-cool">
      <img class="card-img-top" src="${song.albumArt}" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">${song.title}</h5>
        <p class="card-text text-truncate">${song.artist}</p>
        <p class="card-text text-truncate">${song.collection}</p>
        <p class="card-text text-truncate">${song.price}</p>
        <audio src="${song.preview}" controls>
        </audio>
      </div>
    </div>
    `
  }
  document.getElementById("songs").innerHTML = template;
}


//PUBLIC
class ItunesController {
  //DO NOT MODIFY THIS METHOD
  getMusic(e) {
    e.preventDefault();
    var artist = e.target.artist.value;
    //changes the button to loading while songs load
    $('#get-music-button').text('LOADING....');
    itunesService.getMusicByArtist(artist).then(results => {
      drawSongs(results, artist)
      //changes button back to GET MUSIC once songs are loaded
      $('#get-music-button').text('GET MUSIC');
    })
  }
}


export default ItunesController