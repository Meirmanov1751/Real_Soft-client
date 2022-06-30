import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {deletePostsThunkCreator, getPostsThunkCreator} from "./store/PostsThunkCreator";
import {Route, Routes} from "react-router-dom"
import CreatePage from "./component/pages/create-page/create-page";
import HomePage from "./component/pages/home-page/home-page";
import './App.css'
import Header from "./component/layout/header/header";
import FullInfo from "./component/pages/home-page/card/full-info/full-info";
import UpdatePost from "./component/pages/home-page/card/full-info/update-post/update-post";
import classes from "./component/pages/home-page/home-page.module.css";
import Search from "./component/layout/search/search";

function App() {
  let dispatch = useDispatch()
  let posts = useSelector(state => state.posts.posts)

  useEffect(() => {
     dispatch(getPostsThunkCreator())
  },[posts])

  return (
    <div className="App">
      <Header/>
      <div className={"container"}>
        <Routes>
          <Route path={'/'} element={<HomePage/>}>
            <Route path={':id'} element={<FullInfo/>}/>
            <Route path={':id/put'} element={<UpdatePost/>}/>
          </Route>
          <Route path={'create'} element={<CreatePage/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
