import {createStore, combineReducers, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import auth from './auth';
import allSongsReducer from '../redux/allSongs';
import singleSongReducer from '../redux/singleSong';

const reducer = combineReducers({
  auth,
  allSongs: allSongsReducer,
  singleSong: singleSongReducer
 })

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
);

const store = createStore(reducer, middleware);

export default store;
export * from './auth';
