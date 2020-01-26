import React, {Component} from 'react';
import Header from './Header/Header';
import Navbar from './Navbar/Navbar';
import Profile from './Profile/Profile';
import News from './News/News';
import Settings from './Settings/Settings';
import './App.css';
import { Route, BrowserRouter } from 'react-router-dom';
import Dialogs from "./Dialogs/Dialogs";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="app-wrapper">
                    <Header/>
                    <Navbar/>
                    <div className="app-wrapper-content">
                        <Route path='/profile' component={Profile} />
                        <Route path='/dialogs' component={Dialogs}/>
                        <Route path='/news' component={News}/>
                        <Route path='/settings' component={Settings}/>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
