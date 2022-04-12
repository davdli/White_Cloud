import axios from 'axios';

const FETCH_SONG = 'FETCH_SONG';

export const _fetchSong = (song) => {
  return {
    type: FETCH_SONG,
    song
  }
};

export const fetchSong = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/songs/${id}`)
      dispatch(_fetchSong(data))
    } catch (error) {
      console.log(error)
    }
  }
}

export default function singleSongReducer(state = [], action) {
  switch (action.type) {
    case FETCH_SONG:
      return action.song
    default:
      return state
  }
}
