var playlist = {artistName: '', songTitle: ''};
  
function updatePlaylist(playlist, artistName, songTitle){
  playlist[''] = 'Slowdive';
  return playlist;
}
function removeFromPlaylist(playlist, artistName){
  delete playlist.artistName;
  return playlist;
}