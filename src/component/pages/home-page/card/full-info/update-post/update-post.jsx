import React, {useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import classes from "./update-post.module.css";
import {patchPostsThunkCreator, setPostsThunkCreator} from "../../../../../../store/PostsThunkCreator";

const UpdatePost = () => {
  let navigate = useNavigate()
  let {id} = useParams()
  let posts = useSelector(state => state.posts.posts)
  let post = posts.find(p => p._id == id)
  const [title = post.title, setTitle] = useState()
  const [content = post.content, setContent] = useState()
  const body = {title,content}

  return (
    <form className={classes.update}>
      Изменить название:
      <input type="text" className={classes.title} onChange={(e) => setTitle(e.target.value)} value={title}/>
      Измеить текст:
      <textarea type="text" className={classes.content} onChange={(e) => setContent(e.target.value)} value={content}/>
      <input type="submit" className={classes.submit} value={'отправить'} onClick={(e) =>  {
        e.preventDefault()
        patchPostsThunkCreator(post._id,body)
        navigate(-1)
      }}
      />
    </form>
  );
};

export default UpdatePost;
