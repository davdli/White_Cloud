import React from 'react';
import { fetchSongs } from '../redux/allSongs';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const AllSongs = (props) => {

  const songs = useSelector((state) => state.allSongs);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSongs())
  }, []);

  return (
    <div>
      <div>
        <h1>The best way to play the songs you love</h1>
      </div>
      <div>
        <div>
          {songs.map((song) => (
            <div key={song.id}>
              <Link to={`/songs/${song.id}`}>
                <img src={song.cover} />
                <p>{song.name}</p>
                <p>{song.artist}</p>
                <img
                  id='songSheet'
                  src={song.sheet}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AllSongs;
