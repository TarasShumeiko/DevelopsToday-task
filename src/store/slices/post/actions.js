export const FETCH_POST = 'FETCH_POST';

export const fetchPost = (data) => ({
  type: FETCH_POST,
  payload: data,
});

export function fetchPostThunk() {
  return async function(dispatch) {
    const result = await fetch('https://simple-blog-api.crew.red/posts/1?_embed=comments');
    const data = await result.json();
    const fetchPostAction = fetchPost(data);
    dispatch(fetchPostAction);
  };
}