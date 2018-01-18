var playlist = { artistName: 'songTitle' } 

Function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, {[artistName]: songTitle } )
  
  
} 