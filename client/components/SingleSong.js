import React, { useEffect } from 'react';
import { fetchSong } from '../redux/singleSong';
import { useSelector, useDispatch } from 'react-redux';
import VirtualPinao from './VirtualPiano';

const SingleSong = (props) => {

  const song = useSelector((state) => state.singleSong);

  const dispatch = useDispatch();

  console.log(song)

  useEffect(() => {
    dispatch(fetchSong(props.match.params.id))
  }, []);

  return (
    <div>
      <div>
        <h1>{song.name} by {song.artist}</h1>
        <img src={song.sheet}/>
      </div>
      <div>
        <VirtualPinao />
      </div>
    </div>
  )
}

export default SingleSong;
