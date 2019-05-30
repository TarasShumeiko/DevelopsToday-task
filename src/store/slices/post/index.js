import { FETCH_POST } from './actions';

const INITIAL_STATE = {
  post: '',
};

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_POST:
      return { post: payload };
    default:
      return state;
  }
};