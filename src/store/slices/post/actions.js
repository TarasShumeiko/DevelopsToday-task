export const FETCH_POST = 'FETCH_POST';

export const fetchPost = (data) => ({
  type: FETCH_POST,
  payload: data,
});

export const fetchPostThunk = (id) => {
  return async (dispatch) => {
    const result = await fetch(`https://simple-blog-api.crew.red/posts/${id}`);
    const data = await result.json();
    dispatch(fetchPost(data));
  };
};