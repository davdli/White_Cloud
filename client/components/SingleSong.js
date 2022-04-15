import React, { useEffect } from 'react';
import { fetchSong } from '../redux/singleSong';
import { useSelector, useDispatch } from 'react-redux';
import VirtualPinao from './VirtualPiano';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

const SingleSong = (props) => {

  const song = useSelector((state) => state.singleSong);

  const dispatch = useDispatch();

  console.log(song)

  useEffect(() => {
    dispatch(fetchSong(props.match.params.id))
  }, []);

  return (
    <Wrap>
      <Sheet>
        <img src={song.sheet}/>
      </Sheet>
      <div>
        <VirtualPinao />
      </div>
    </Wrap>
  )
}

export default SingleSong;

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Sheet = styled.div`
  justify-content: center;
  align-items: center;
  img {
    width: 600px;
    height: 750px;
  }
  padding: 20px;
`
