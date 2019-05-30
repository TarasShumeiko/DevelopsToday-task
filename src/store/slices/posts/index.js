import { FETCH_POSTS } from './actions';

const INITIAL_STATE = {
  posts: [],
};

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_POSTS:
      return { posts: payload };
    default:
      return state;
  }
};