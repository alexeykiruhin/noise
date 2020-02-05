import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import './index.css';
import * as serviceWorker from './serviceWorker';
import state, {addPost, changeNewPostText, subscribe} from "./state/state";
import App from './App';

let reRender = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} changeNewPostText={changeNewPostText}/>
        </BrowserRouter>, document.getElementById('root')
    );
};
reRender(state);
subscribe(reRender);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
