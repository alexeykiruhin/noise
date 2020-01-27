import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import state, {addPost, changeValue, subscribe} from "./state/state";
import {BrowserRouter} from "react-router-dom";
import * as serviceWorker from './serviceWorker';

let reRender = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} changeValue={changeValue}/>
        </BrowserRouter>, document.getElementById('root')
    );
};

reRender(state);
subscribe(reRender);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
