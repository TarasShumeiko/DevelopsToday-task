export const CREATE_COMMENT_SUCCESS = 'CREATE_COMMENT_SUCCESS';
export const CREATE_COMMENT_ERROR = 'CREATE_COMMENT_ERROR';

export const createComment = () => async (dispatch) => {
  try {
    const data = fetch('api', {});
    dispatch(createCommentSuccess(data));
  } catch (error) {
    dispatch(createCommentError())
  }
};

const createCommentSuccess = (comment) => ({
  type: CREATE_COMMENT_SUCCESS,
  payload: comment,
});

const createCommentError = () => ({
  type: CREATE_COMMENT_ERROR
});