import React from 'react';
import classes from "./card.module.css";
import deleteBtn from "./img/icons8-delete-2.png"
import {deletePostsThunkCreator} from "../../../../store/PostsThunkCreator";
import {Link, useSearchParams} from "react-router-dom";

const Card = (props) => {
  return (
    <section className={classes.card}>
      <div className="card">
        <div className="card-body">
          {props.imagename ?
            <img src={props.imagename} style={{width: "100%"}}/>
            :
            null}

          <h5 className="card-title">{props.title}</h5>
          <p className={`card__text  ${classes.text}`}>{props.content}</p>
          <div className={classes.card__btns}>
            <Link to={`${props._id}`} className="btn btn-primary">Просмотр</Link>
            <button className={classes.card__btn} onClick={() => deletePostsThunkCreator(props._id)}><img
              src={deleteBtn} alt=""/></button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
