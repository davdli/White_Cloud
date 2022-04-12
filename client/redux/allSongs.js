import axios from 'axios';

const FETCH_SONGS = 'FETCH_SONGS';

export const _fetchSongs = (songs) => {
  return {
    type: FETCH_SONGS,
    songs
  }
};

export const fetchSongs = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get('/api/songs');
      dispatch(_fetchSongs(data));
    } catch (error) {
      console.log(error);
    }
  }
};

export default function allSongsReducer(state = [], action) {
  switch (action.type) {
    case FETCH_SONGS:
      return action.songs
    default:
      return state;
  }
}
