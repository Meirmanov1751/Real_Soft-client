import React from 'react';
import classes from "./header.module.css";
import {NavLink} from "react-router-dom";
import Search from "../search/search";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={"container"}>
        <div className={classes.header__inner}>
          <div>
              <NavLink to={'/'} className={classes.header__btn}>Home</NavLink>
            <NavLink to={'create'} className={classes.header__btn}>Create Post</NavLink>
          </div>
          <Search/>
        </div>
      </div>
    </header>
  );
};

export default Header;
