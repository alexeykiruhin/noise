import React, {Component} from 'react';
import Header from './Header/Header';
import Navbar from './Navbar/Navbar';
import Profile from './Profile/Profile';
import News from './News/News';
import Settings from './Settings/Settings';
import './App.css';
import { Route, BrowserRouter } from 'react-router-dom';
import Communication from "./Communication/Communication";

class App extends Component {
    constructor(props) {
        super(props);
        this.messages = props.messages;
    }

    render() {
        return (
            <BrowserRouter>
                <div className="app-wrapper">
                    <Header/>
                    <Navbar/>
                    <div className="app-wrapper-content">
                        <Route
                            exact
                            path='/profile'
                            render={(props) => <Profile {...props} messages={this.messages} />}
                        />
                        <Route exact path='/communication' component={Communication}/>
                        <Route exact path='/news' component={News}/>
                        <Route exact path='/settings' component={Settings}/>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
