import {GET_ID, GET_POSTS} from "./const";

export  const getPostsActionCreator = (posts) => {
  return {
    type: GET_POSTS,
    payload: posts
  }
}

export  const getIdActionCreator = (id) => {
  return {
    type: GET_ID,
    id
  }
}
