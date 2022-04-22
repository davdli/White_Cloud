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
      <Songs>
        <SongGrid>
          {songs.map((song) => (
            <SongContainer className='song-container'>
              <SongInfo key={song.id}>
                <Link to={`/songs/${song.id}`}>
                  <img src={song.cover} />
                  <p>{song.name}</p>
                  <p>{song.artist}</p>
                </Link>
              </SongInfo>
            </SongContainer>
          ))}
        </SongGrid>
      </Songs>
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
const SongGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`

const SongContainer = styled.div`
  width: 300px;
  height: 400px;
  background: #FFFFFF;
  padding: 30px;
  margin: 30px;
  border-radius: 18px;
  box-shadow: 2px 4px 12px rgb(0 0 0 / 8%);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: transform 250ms;
  &:hover {
    transform: scale(1.01);
    box-shadow: 2px 4px 12px rgb(0 0 0 / 16%);
  }
`

const SongInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 200px;
    height: 200px;
    border-radius: 18px;
    box-shadow: 2px 4px 12px rgb(0 0 0 / 8%);
  }
  p {
    color: #1D1D1F;
    font-size: 17px;
    font-weight: 400;
    margin: 0px;
  }
`

const Songs = styled.div`
`

