import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

const messages = [
    {id: 0, text: 'Hi man, dropped liked a? ;)'},
    {id: 1, text: 'Waaasaap man'},
    {id: 2, text: 'Holla boyyyys!'},
    {id: 3, text: 'Tralala humans;)'},
    {id: 4, text: 'Ko ko djambo dudes?'}
];

ReactDOM.render(<App messages={messages}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
