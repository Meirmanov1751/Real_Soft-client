import {instance} from "../api/api";
import {getPostsActionCreator} from "./PostsActionCreator";

export const getPostsThunkCreator = () => (dispatch) => {
  instance.get('posts/')
    .then(res => dispatch(getPostsActionCreator(res.data)))
}

export const setPostsThunkCreator = (body) => {
  console.log(body)
  instance.post('posts/',body)
    .then(res => console.log(res.data))
}

export const patchPostsThunkCreator = (id,body) => {
  console.log(body)
  instance.put('posts/'+id,body)
    .then(res => console.log(res.data))
}


export const deletePostsThunkCreator = (id) => {
  instance.delete('posts/' + id)
    .then(res => console.log(res.data))
}
