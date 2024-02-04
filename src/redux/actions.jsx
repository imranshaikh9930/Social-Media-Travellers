export const fetchPosts = () => async (dispatch) => {
  try {
    dispatch({ type: "FETCH_POST_REQUEST" });

    const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await resp.json();

    const limit = data.slice(0, 12);
    dispatch({ type: "FETCH_POST_SUCCESS", payload: limit });
  } catch (err) {
    dispatch({ type: "FETCH_POST_FAILURE", payload: err.message });
  }
};
