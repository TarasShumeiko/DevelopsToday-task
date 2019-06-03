import { FETCH_COMMENTS } from './actions';

const INITIAL_STATE = {
  comments: []
};

const comments = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_COMMENTS:
      return { comments: payload };

    default:
      return state;
  }
};

export default comments;