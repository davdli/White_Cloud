import React, { useEffect } from 'react';
import { fetchSongs } from '../redux/allSongs';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

const AllSongs = (props) => {

  const songs = useSelector((state) => state.allSongs);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSongs())
  }, []);

  return (
    <Wrap>
      <TitleText>
        <h1>Discover music. Take a look at our library of piano sheets.</h1>
      </TitleText>
      <div>
        <div id='all-songs'>
          {songs.map((song) => (
            <SongInfo key={song.id}>
              <Link to={`/songs/${song.id}`}>
                <img src={song.cover} />
                <p>{song.name}</p>
                <p>{song.artist}</p>
              </Link>
            </SongInfo>
          ))}
        </div>
      </div>
    </Wrap>
  )
}

export default AllSongs;

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`

const TitleText = styled.div`
  text-align: center;
  h1 {
    color: #6E6E73;
    font: 28px;
    margin: 22px 0px 22px 0px;
    font-weight: 600;
  }
`

const SongInfo = styled.div`
  img {
    width: 400px;
    height: 400px;
  }
  p {
    color: #1D1D1F;
    font: 28px;
    font-weight: 600;
  }
`
