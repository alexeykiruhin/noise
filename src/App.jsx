import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import './App.css';
import {Route} from 'react-router-dom';
import Communication from "./components/Communication/Communication";

const App = (props) => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Route
                    path='/profile'
                    render={() =>
                        <Profile profilePage={props.state.profileReducer}
                                 dispatch={props.dispatch}/>
                    }
                />
                <Route
                    path='/communication'
                    render={() =>
                        <Communication communication={props.state.communicationReducer}
                                       dispatch={props.dispatch}/>
                    }
                />
                <Route exact path='/news' component={News}/>
                <Route exact path='/settings' component={Settings}/>
            </div>
        </div>
    );
};

export default App;
