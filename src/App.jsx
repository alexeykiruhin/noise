import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import './App.css';
import {Route} from 'react-router-dom';
import CommunicationContainer from "./components/Communication/CommunicationContainer";
import UsersContainer from "./components/Users/UsersContainer";

const App = (props) => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Route path='/profile'
                       render={ () => <Profile store={props.store} /> } />
                <Route path='/communication'
                       render={ () => <CommunicationContainer /> } />
                <Route path='/news'
                       component={News} />
                <Route path='/settings'
                       component={Settings} />
                <Route path='/users'
                       render={ () => <UsersContainer /> } />
            </div>
        </div>
    );
};

export default App;
