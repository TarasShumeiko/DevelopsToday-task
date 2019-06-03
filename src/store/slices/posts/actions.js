export const FETCH_POSTS = 'FETCH_POSTS';

export const fetchPosts = (data) => ({
  type: FETCH_POSTS,
  payload: data,
});

export const fetchPostsThunk = () => {
  return async (dispatch) => {
    const result = await fetch('https://simple-blog-api.crew.red/posts');
    const data = await result.json();
    dispatch(fetchPosts(data));
  };
};