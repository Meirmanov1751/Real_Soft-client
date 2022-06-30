import React, {useState} from 'react';
import classes from "./search.module.css";
import {useSearchParams} from "react-router-dom";

const Search = () => {
  let [searchParams, setSearchParams] = useSearchParams()
  let [text, setText] = useState()

  function handleSearch(e){
    setText(e.target.value)
    setSearchParams({title: e.target.value})
  }

  return (
    <div className={classes.seach}>
      <div  className={"container"}>
        <input type="search" className={classes.seach__input} onChange={(e) =>handleSearch(e)} value={text} placeholder="поиск.."/>
      </div>
    </div>
  );
};

export default Search;
