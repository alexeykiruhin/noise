import React, {Component} from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import './App.css';
import { Route } from 'react-router-dom';
import Communication from "./components/Communication/Communication";

class App extends Component {
    constructor(props) {
        super(props);
        this.profilePage = props.state.profilePage;
        this.communication = props.state.communication;
    }

    render() {
        return (
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route
                        exact
                        path='/profile'
                        render={(props) =>
                            <Profile {...props} profilePage={this.profilePage}
                                     dispatch={this.props.dispatch} />
                        }
                    />
                    <Route
                        path='/communication'
                        render={(props) =>
                            <Communication {...props} communication={this.communication}
                                           dispatch={this.props.dispatch} />
                        }
                    />
                    <Route exact path='/news' component={News}/>
                    <Route exact path='/settings' component={Settings}/>
                </div>
            </div>
        );
    }
}

export default App;
