import React from 'react';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import './App.css';
import {Route} from 'react-router-dom';
import CommunicationContainer from "./components/Communication/CommunicationContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

const App = () => {
    return (
        <div className="app-wrapper">
            <HeaderContainer />
            <Navbar/>
            <div className="app-wrapper-content">
                <Route path='/profile/:userId?'
                       render={ () => <ProfileContainer /> } />
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
