import axios from "axios";
import { Dispatch } from "react";
import { PostAction, PostActionTypes } from "./postActions";
const POST_SRC = "http://localhost:3000/db.json";

export const fetchPosts = () => {
  return async (dispatch: Dispatch<PostAction>) => {
    try {
      dispatch({ type: PostActionTypes.FETCH_POSTS });
      const response = await axios.get(POST_SRC);
      dispatch({
        type: PostActionTypes.FETCH_POSTS_SUCCESS,
        payload: response.data.posts,
      });
    } catch (e) {
      dispatch({ type: PostActionTypes.FETCH_POSTS_ERROR, payload: "Error" });
    }
  };
};
