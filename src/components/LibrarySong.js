import React from 'react';

const LibrarySong = ({ song, songs, setCurrentSong, audioRef, isPlaying, setSongs }) => {
  const songSelectHandler = async () => {
    await setCurrentSong(song);
    // add active state
    const newSongs = songs.map((targetSong) => {
      return {
        ...targetSong,
        active: targetSong.id === song.id
      };
    });
    setSongs(newSongs);
    // check if song is playing
    if (isPlaying) audioRef.current.play();
  };
  return (
    <div onClick={songSelectHandler} className={`library-song ${song.active ? 'selected' : ''}`}>
      <img alt={song.name} src={song.cover} />
      <div className='song-description'>
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>

  );
};

export default LibrarySong;
