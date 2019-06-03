export const FETCH_COMMENTS = 'FETCH_COMMENTS';

export const fetchComments = (data) => ({
  type: FETCH_COMMENTS,
  payload: data,
});

export const fetchCommentsThunk = (id) => {
  return async (dispatch) => {
    const result = await fetch(`https://simple-blog-api.crew.red/posts/${id}?_embed=comments`);
    const data = await result.json();
    dispatch(fetchComments(data));
  };
};