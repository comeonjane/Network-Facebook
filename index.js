import ReactDOM from 'react-dom';
import React from 'react';
import './index.css';
import App from './App';
import state, { subscribe } from './redux/state';
import { UpdateNewPostText,addPost } from './redux/state';
import {BrowserRouter} from "react-router-dom";
 
 let rerenderEntireTree = () => {

  ReactDOM.render(
    <React.StrictMode>
      <App state={state} addPost={addPost} UpdateNewPostText={UpdateNewPostText}   />

    </React.StrictMode>,
    document.getElementById('root')
  )
}

 rerenderEntireTree(state);
 subscribe(rerenderEntireTree);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

