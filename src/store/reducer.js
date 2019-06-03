import { combineReducers } from 'redux';
import posts from './slices/posts';
import post from './slices/post';
import comments from './slices/comments';

const rootReducer = combineReducers({
  posts,
  post,
  comments
});

export default rootReducer;