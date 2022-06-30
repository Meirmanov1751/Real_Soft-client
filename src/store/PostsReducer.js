import {GET_ID, GET_POSTS} from "./const";

let initial = {
  posts: "",
  id: "",
}

export  function PostsReducer(state = initial, action) {
  switch (action.type){
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload
      }
    case GET_ID:
      return {
        ...state,
        id: action.id
      }
  }
  return state
}
