import React, {useEffect} from 'react';
import {Link, useNavigate, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import classes from "./fullinfo.module.css";
import {getIdActionCreator} from "../../../../../store/PostsActionCreator";

const FullInfo = () => {
  let navigate = useNavigate()
  let {id} = useParams()
  let posts = useSelector(state => state.posts.posts)
  let post = posts ? posts.find(p => p._id == id) : null


  return (
    <div className={classes.fullinfo}>
    {
      post ?
        <div >
        <div className={classes.top}>
          <button className={classes.topBtn} onClick={() => navigate(-1)}>назад</button>
          <Link className={classes.topBtn} to={'put'}>изменить</Link>
        </div>
          <h1>{post.title}</h1>
          <p className={classes.content}>{post.content}</p>
      </div>
        :
        <button className={classes.topBtn} onClick={() => navigate(-1)}>назад</button>
    }
    </div>
  );
};

export default FullInfo;


