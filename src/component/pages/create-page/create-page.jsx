import React, {useState} from 'react';
import {setPostsThunkCreator} from "../../../store/PostsThunkCreator";
import classes from "./create-page.module.css";

const CreatePage = () => {
  const [title, setTitle] = useState()
  const [content, setContent] = useState()
  const body = {title,content}

  return (
    <form content={classes.create}>
      Название:
      <input type="text" className={classes.title} placeholder={'title'} onChange={(e) => setTitle(e.target.value)} value={title}/>
      Текст:
      <textarea type="text" className={classes.content} placeholder={'content'} onChange={(e) => setContent(e.target.value)} value={content}/>
      <input type="submit" className={classes.submit} onClick={(e) =>  {
        e.preventDefault()
        setPostsThunkCreator(body)
        setTitle('')
        setContent('')
      }}/>
    </form>
  );
};

export default CreatePage;
