import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {PostsReducer} from "./PostsReducer";

let reducers = combineReducers({
  posts: PostsReducer
})

export const store = createStore(reducers, applyMiddleware(thunk))
