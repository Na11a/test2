import {
  IPostState,
  PostAction,
  PostActionTypes,
} from "../actions/postActions";

const InitialState: IPostState = {
  posts: [],
  loading: false,
  error: null,
};
export const postReducer = (
  state = InitialState,
  action: PostAction
): IPostState => {
  switch (action.type) {
    case PostActionTypes.FETCH_POSTS:
      return { loading: true, error: null, posts: [] };
    case PostActionTypes.FETCH_POSTS_SUCCESS:
      return { loading: false, error: null, posts: action.payload };
    case PostActionTypes.FETCH_POSTS_ERROR:
      return { loading: false, error: action.payload, posts: [] };
    default:
      return state;
  }
};
