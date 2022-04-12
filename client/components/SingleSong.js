import React, { useEffect } from 'react';
import { fetchSong } from '../redux/singleSong';
import { useSelector, useDispatch } from 'react-redux';

const SingleSong = (props) => {

  const song = useSelector((state) => state.singleSong);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSong(props.match.params.id))
  }, []);

  return (
    <div>SingleSong</div>
  )
}

export default SingleSong;
