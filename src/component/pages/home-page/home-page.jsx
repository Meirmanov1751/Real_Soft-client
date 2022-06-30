import React, {useState} from 'react';
import {useSelector} from "react-redux";
import {deletePostsThunkCreator} from "../../../store/PostsThunkCreator";
import Card from "./card/card";
import classes from "./home-page.module.css";
import {Outlet, useSearchParams} from "react-router-dom"
import Search from "../../layout/search/search";

const HomePage = () => {
  let posts = useSelector(state => state.posts.posts)
  let [searchParams, setSearchParams] = useSearchParams()
  let titleFilter = searchParams.get('title')

  return (
    <div>
      <div className={classes.home}>
        <Outlet/>
        {posts ?
          titleFilter ?
            posts.filter(p => p.title.toLowerCase().includes(titleFilter.toLowerCase())).map(post =>
              <Card title={post.title} content={post.content} _id={post._id}/>
            )
              :
            posts.map(post =>
              <Card title={post.title} content={post.content} _id={post._id}/>
          ):null}
      </div>
    </div>
  );
};

export default HomePage;
