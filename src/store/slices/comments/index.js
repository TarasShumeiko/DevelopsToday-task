import { CREATE_COMMENT_SUCCESS, CREATE_COMMENT_ERROR } from './actions';

// reducer
const initialState = {
  comments: []
};

const comments = (state = initialState, action) => {
  switch (action.type) {

    case CREATE_COMMENT_SUCCESS:
      return [action.payload]

  }
};

export default comments;